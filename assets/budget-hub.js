/* Walton County FY 2027 Budget -- question hub data layer.

   Fills the [data-hub-stat] slots on a topic hub with live budget figures so
   the answers on the page can never drift from the schedules underneath.

   Each hub page declares which topic it is via
   <main data-hub="personnel">, and the matching builder below returns a plain
   {slotName: displayString} map. Markup ships with a dash in every slot, so a
   data failure degrades to a readable page rather than a broken one -- the
   questions and the narrative still stand on their own. */
(function () {
  "use strict";

  function money(value, decimals) {
    var abs = Math.abs(value);
    if (abs >= 1e6) return "$" + (value / 1e6).toFixed(decimals == null ? 1 : decimals) + "M";
    if (abs >= 1e3) return "$" + Math.round(value / 1e3) + "K";
    return "$" + Math.round(value);
  }

  function exact(value) {
    return "$" + Math.round(value).toLocaleString("en-US");
  }

  function num(value) {
    var rounded = Math.round(value * 10) / 10;
    return rounded.toLocaleString("en-US");
  }

  function signed(value) {
    var rounded = Math.round(value * 10) / 10;
    return (rounded > 0 ? "+" : "") + rounded.toLocaleString("en-US");
  }

  function toNumber(value) {
    var parsed = parseFloat(String(value == null ? "" : value).replace(/[$,()]/g, ""));
    return isFinite(parsed) ? parsed : 0;
  }

  function sumField(rows, field) {
    return rows.reduce(function (total, row) { return total + toNumber(row[field]); }, 0);
  }

  // ---- Personnel -------------------------------------------------------
  // "Personnel Services" covers salaries, taxes, retirement and insurance.
  // Object 510000 is a single lump-sum line carrying the Constitutional
  // Officers' personnel budgets, so it is reported separately rather than
  // mixed into the itemised Board-controlled detail.
  var LUMP_SUM_PERSONNEL_OBJECT = "510000";
  var OVERTIME_OBJECT = "514000";

  function personnel(data) {
    var expenditures = data.expenditures || [];
    var personnelRows = expenditures.filter(function (row) {
      return String(row.Object_Type || "").trim() === "Personnel Services";
    });
    var total = sumField(personnelRows, "FY2027_Proposed");
    var lumpSum = sumField(personnelRows.filter(function (row) {
      return String(row.Object_Code || "").trim() === LUMP_SUM_PERSONNEL_OBJECT;
    }), "FY2027_Proposed");
    var overtimeRows = expenditures.filter(function (row) {
      return String(row.Object_Code || "").trim() === OVERTIME_OBJECT;
    });
    var overtime = sumField(overtimeRows, "FY2027_Proposed");
    // Growth is measured actual-to-actual. Comparing the FY 2027 *proposal*
    // against a FY 2020 *actual* would mix a plan with a result and produce a
    // different number from the trend chart lower down the same page.
    var overtime2020 = overtimeRows.reduce(function (t, row) {
      return t + toNumber(row.FY2020_Actual);
    }, 0);
    var latestActual = 0;
    // Deliberately not named `total` -- `var` hoists to function scope and a
    // second `var total` here silently overwrote the personnel-cost total
    // computed above, reporting overtime as the whole personnel budget.
    for (var year = 2025; year >= 2020; year--) {
      var yearTotal = overtimeRows.reduce(function (t, row) {
        return t + toNumber(row["FY" + year + "_Actual"]);
      }, 0);
      if (yearTotal > 0) { latestActual = yearTotal; break; }
    }

    var staffing = data.staffing || [];
    var fte2027 = staffing.reduce(function (t, row) { return t + toNumber(row["2027"]); }, 0);
    var fte2026 = staffing.reduce(function (t, row) { return t + toNumber(row["2026"]); }, 0);

    var positions = data.personnelPositionCosts || [];
    var fullTime = 0;
    var partTime = 0;
    positions.forEach(function (row) {
      var hours = Number(row.Standard_Hours) || 0;
      if (hours && hours < 2080) partTime += 1; else fullTime += 1;
    });

    var out = {
      fte: num(fte2027),
      fteChange: signed(fte2027 - fte2026) + " FTE",
      cost: money(total),
      costExact: exact(total),
      lumpSum: money(lumpSum),
      fullTime: fullTime.toLocaleString("en-US"),
      partTime: partTime.toLocaleString("en-US"),
      overtime: exact(overtime)
    };
    if (overtime2020 > 0 && latestActual > 0) {
      out.overtimeGrowth = Math.round((latestActual / overtime2020 - 1) * 100) + "%";
    }
    return out;
  }

  // ---- Revenue ---------------------------------------------------------
  function revenue(data) {
    var rows = data.revenues || [];
    var total = sumField(rows, "FY2027_Proposed");
    var byType = {};
    rows.forEach(function (row) {
      var type = String(row.Revenue_Type || "").trim();
      if (!type) return;
      byType[type] = (byType[type] || 0) + toNumber(row.FY2027_Proposed);
    });
    var ranked = Object.keys(byType).map(function (k) {
      return { name: k, value: byType[k] };
    }).sort(function (a, b) { return b.value - a.value; });

    var out = { total: money(total), totalExact: exact(total) };
    if (ranked.length) {
      out.largestSource = ranked[0].name;
      out.largestShare = total ? Math.round(ranked[0].value / total * 100) + "%" : "—";
      out.sourceCount = String(ranked.length);
    }
    return out;
  }

  var BUILDERS = { personnel: personnel, revenue: revenue };

  function apply(values) {
    Object.keys(values).forEach(function (key) {
      var nodes = document.querySelectorAll('[data-hub-stat="' + key + '"]');
      for (var i = 0; i < nodes.length; i++) nodes[i].textContent = values[key];
    });
  }

  function init() {
    var host = document.querySelector("[data-hub]");
    if (!host) return;
    var builder = BUILDERS[host.getAttribute("data-hub")];
    if (!builder || !window.WCBudgetData || !window.WCBudgetData.loadBudgetData) return;

    window.WCBudgetData.loadBudgetData().then(function (data) {
      try {
        apply(builder(data) || {});
      } catch (e) {
        // Leaving the dashes in place is the correct failure mode: a wrong
        // number on a budget page is worse than a visibly missing one.
        if (window.console) console.error("Hub stats could not be built:", e);
      }
    }).catch(function (e) {
      if (window.console) console.error("Hub data failed to load:", e);
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
