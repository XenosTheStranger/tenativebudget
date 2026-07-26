/* Walton County FY 2027 Budget -- workforce composition.

   Answers three GFOA Personnel Budget questions that the budget data already
   contains but no page was reporting:

     - How many staff are full time vs. part time?
     - Does the government expect premium salary costs (overtime, shift
       premium, weekend pay)?
     - Which positions or functions expect the most significant change?

   Full-time status is derived from Standard_Hours_per_Year in the position
   cost sheet: 2,080 hours is a full-time position and 1,040 is half-time.
   That field covers Board-controlled departments only -- Constitutional
   Officers submit their own personnel detail -- so every figure rendered
   here is explicitly scoped to the positions the sheet covers rather than
   presented as a countywide headcount. */
(function () {
  "use strict";

  var FULL_TIME_HOURS = 2080;

  function money(value) {
    return "$" + Math.round(value).toLocaleString("en-US");
  }

  function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  // The position sheet stores the 8-digit Dept_Code in its department column,
  // so names come from the expenditure and staffing rows that carry both.
  function departmentNameLookup(data) {
    var map = {};
    (data.staffing || []).concat(data.expenditures || []).forEach(function (row) {
      var code = String(row.Dept_Code || "").trim();
      var name = String(row.Dept_Name || "").trim();
      if (code && name && !map[code]) map[code] = name;
    });
    return map;
  }

  function composition(data) {
    var names = departmentNameLookup(data);
    var rows = data.personnelPositionCosts || [];
    if (!rows.length) return null;

    var fullTime = 0;
    var partTime = 0;
    var partTimeByDept = {};
    var premiumTotal = 0;
    var premiumCount = 0;
    var premiumByDept = {};
    var fteCovered = 0;

    rows.forEach(function (row) {
      var hours = Number(row.Standard_Hours) || 0;
      var code = String(row.Dept_Code || "").trim();
      var dept = names[code] || code;
      if (hours && hours < FULL_TIME_HOURS) {
        partTime += 1;
        partTimeByDept[dept] = (partTimeByDept[dept] || 0) + 1;
      } else {
        fullTime += 1;
      }
      fteCovered += Number(row.Allocation_Pct) || 0;

      var premium = Number(row.Weekend_Pay) || 0;
      if (premium > 0) {
        premiumTotal += premium;
        premiumCount += 1;
        premiumByDept[dept] = (premiumByDept[dept] || 0) + premium;
      }
    });

    var toSorted = function (obj) {
      return Object.keys(obj).map(function (k) {
        return { name: k, value: obj[k] };
      }).sort(function (a, b) { return b.value - a.value; });
    };

    return {
      fullTime: fullTime,
      partTime: partTime,
      positions: fullTime + partTime,
      fteCovered: fteCovered,
      partTimeByDept: toSorted(partTimeByDept),
      premiumTotal: premiumTotal,
      premiumCount: premiumCount,
      premiumByDept: toSorted(premiumByDept)
    };
  }

  // Largest authorized FTE movements between the current and proposed year.
  function staffingChanges(data) {
    var byDept = {};
    (data.staffing || []).forEach(function (row) {
      var dept = String(row.Dept_Name || "").trim();
      if (!dept) return;
      var current = parseFloat(row["2026"]) || 0;
      var proposed = parseFloat(row["2027"]) || 0;
      byDept[dept] = (byDept[dept] || 0) + (proposed - current);
    });
    return Object.keys(byDept)
      .map(function (k) { return { name: k, value: byDept[k] }; })
      .filter(function (d) { return Math.abs(d.value) > 0.001; })
      .sort(function (a, b) { return Math.abs(b.value) - Math.abs(a.value); });
  }

  function signed(value) {
    var rounded = Math.round(value * 100) / 100;
    return (rounded > 0 ? "+" : "") + rounded;
  }

  // Departments are organised by function in the budget publication -- the
  // same Florida uniform activity classifications the Consolidated
  // Expenditure table is built on -- so authorized FTE can be reported the
  // same way. Classification goes through WCBudgetData.expenseActivityForRow
  // rather than a local copy so this view and the expenditure tables can
  // never disagree about which function a department sits in.
  var FUNCTION_ORDER = [
    "General Government", "Public Safety", "Physical Environment", "Transportation",
    "Economic Environment", "Human Services", "Culture and Recreation", "Court Related Cost"
  ];

  function normalizeName(value) {
    return String(value == null ? "" : value).toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  }

  // The staffing sheet leaves Dept_Code blank for the Constitutional Officers
  // and the Board, and a blank code resolves to whichever activity happens to
  // sit against the empty key -- which silently filed the Sheriff's 669 FTE
  // under Human Services. Those rows are resolved by department name against
  // the expenditure rows instead, which do carry proper codes. The two offices
  // whose staffing and expenditure names differ are mapped explicitly.
  var NAME_ALIASES = {
    "clerk of circuit court": "clerk of court",
    "sheriff": "walton county sheriff s office"
  };

  function functionByDepartmentName(data, classify) {
    var counts = {};
    (data.expenditures || []).forEach(function (row) {
      var name = normalizeName(row.Dept_Name);
      if (!name || !String(row.Dept_Code || "").trim()) return;
      var fn = "";
      try { fn = classify(row) || ""; } catch (e) { fn = ""; }
      if (!fn) return;
      if (!counts[name]) counts[name] = {};
      counts[name][fn] = (counts[name][fn] || 0) + 1;
    });
    // A department can carry stray rows in another activity, so take the
    // activity that dominates its expenditure lines rather than the first seen.
    var resolved = {};
    Object.keys(counts).forEach(function (name) {
      var best = null;
      Object.keys(counts[name]).forEach(function (fn) {
        if (!best || counts[name][fn] > counts[name][best]) best = fn;
      });
      resolved[name] = best;
    });
    return resolved;
  }

  function staffingByFunction(data) {
    var classify = window.WCBudgetData && window.WCBudgetData.expenseActivityForRow;
    if (typeof classify !== "function") return null;

    var nameMap = functionByDepartmentName(data, classify);
    var byFunction = {};
    var unclassified = 0;

    (data.staffing || []).forEach(function (row) {
      var current = parseFloat(row["2026"]) || 0;
      var proposed = parseFloat(row["2027"]) || 0;
      if (!current && !proposed) return;

      var fn = "";
      var code = String(row.Dept_Code || "").trim();
      if (code) {
        try {
          fn = classify({ Dept_Code: code, Dept_Name: row.Dept_Name }) || "";
        } catch (e) {
          fn = "";
        }
      }
      if (!fn) {
        var name = normalizeName(row.Dept_Name);
        fn = nameMap[name] || nameMap[NAME_ALIASES[name] || ""] || "";
      }
      // Capitalisation is inconsistent in the source activity list
      // ("economic Environment"), so match case-insensitively against the
      // canonical labels instead of trusting the string as supplied.
      var canonical = "";
      for (var i = 0; i < FUNCTION_ORDER.length; i++) {
        if (FUNCTION_ORDER[i].toLowerCase() === fn.trim().toLowerCase()) {
          canonical = FUNCTION_ORDER[i];
          break;
        }
      }
      if (!canonical) { unclassified += proposed; return; }

      if (!byFunction[canonical]) byFunction[canonical] = { current: 0, proposed: 0 };
      byFunction[canonical].current += current;
      byFunction[canonical].proposed += proposed;
    });

    var rows = FUNCTION_ORDER.filter(function (fn) { return byFunction[fn]; }).map(function (fn) {
      return {
        name: fn,
        current: byFunction[fn].current,
        proposed: byFunction[fn].proposed,
        change: byFunction[fn].proposed - byFunction[fn].current
      };
    });
    if (!rows.length) return null;

    var total = rows.reduce(function (s, r) { return s + r.proposed; }, 0);
    return { rows: rows, total: total, unclassified: unclassified };
  }

  function functionHtml(f) {
    if (!f) return "";
    var max = f.rows.reduce(function (m, r) { return Math.max(m, r.proposed); }, 0) || 1;
    var html = [];
    html.push('<h3 class="wc-workforce-subhead">Authorized staffing by function, FY 2027</h3>');
    html.push('<p class="wc-workforce-note">The budget organizes departments by function, so the workforce can be read the same way. These are the same functional categories used in the <a href="consolidated-financial-schedules.html">Consolidated Financial Schedules</a>, covering all ' +
      (Math.round(f.total * 10) / 10).toLocaleString("en-US") + ' authorized full-time equivalents including the independently elected Constitutional Officers.</p>');
    html.push('<ul class="wc-workforce-bars">');
    f.rows.sort(function (a, b) { return b.proposed - a.proposed; }).forEach(function (r) {
      var share = f.total ? Math.round(r.proposed / f.total * 100) : 0;
      var delta = Math.round(r.change * 100) / 100;
      html.push('<li><span class="wc-workforce-bar-label">' + escapeHtml(r.name) +
        (delta ? ' <em>' + (delta > 0 ? "+" : "") + delta + ' FTE</em>' : '') + '</span>' +
        '<span class="wc-workforce-bar"><i style="width:' + (r.proposed / max * 100).toFixed(1) + '%"></i></span>' +
        '<strong>' + (Math.round(r.proposed * 10) / 10).toLocaleString("en-US") + ' &middot; ' + share + '%</strong></li>');
    });
    html.push('</ul>');
    if (f.unclassified > 0) {
      html.push('<p class="wc-workforce-note"><span class="wc-review-flag">' +
        (Math.round(f.unclassified * 10) / 10).toLocaleString("en-US") +
        ' FTE could not be matched to a function and are excluded from the figures above. Check the department names in the staffing record against the expenditure record.</span></p>');
    }
    return html.join("");
  }

  // Overtime is object code 514000. Historical actuals come from Supabase and
  // are merged onto the expenditure rows as FY<year>_Actual before this runs,
  // so the whole series can be built from the expenditure set alone.
  var OVERTIME_OBJECT = "514000";
  var ACTUAL_YEARS = [2020, 2021, 2022, 2023, 2024, 2025];

  function overtime(data) {
    var rows = (data.expenditures || []).filter(function (row) {
      return String(row.Object_Code || "").trim() === OVERTIME_OBJECT;
    });
    if (!rows.length) return null;

    var series = ACTUAL_YEARS.map(function (year) {
      return {
        label: "FY " + year,
        note: "actual",
        value: rows.reduce(function (sum, row) {
          return sum + (Number(row["FY" + year + "_Actual"]) || 0);
        }, 0)
      };
    }).filter(function (point) { return point.value > 0; });

    var budget2026 = rows.reduce(function (sum, row) {
      return sum + (Number(row.FY2026_Original_Budget) || Number(row.FY2026_Budget) || 0);
    }, 0);
    if (budget2026 > 0) series.push({ label: "FY 2026", note: "budget", value: budget2026 });

    var proposed = rows.reduce(function (sum, row) {
      return sum + (Number(row.FY2027_Proposed) || 0);
    }, 0);
    series.push({ label: "FY 2027", note: "tentative", value: proposed });

    var byDept = {};
    rows.forEach(function (row) {
      var dept = String(row.Dept_Name || "").trim();
      var value = Number(row.FY2027_Proposed) || 0;
      if (dept && value > 0) byDept[dept] = (byDept[dept] || 0) + value;
    });

    var lastActual = null;
    for (var i = series.length - 1; i >= 0; i--) {
      if (series[i].note === "actual") { lastActual = series[i]; break; }
    }
    var firstActual = series.length && series[0].note === "actual" ? series[0] : null;

    return {
      series: series,
      proposed: proposed,
      lastActual: lastActual,
      firstActual: firstActual,
      byDept: Object.keys(byDept).map(function (k) {
        return { name: k, value: byDept[k] };
      }).sort(function (a, b) { return b.value - a.value; })
    };
  }

  function overtimeHtml(o) {
    if (!o) return "";
    var max = o.series.reduce(function (m, p) { return Math.max(m, p.value); }, 0) || 1;
    var html = [];

    html.push('<h3 class="wc-workforce-subhead">Overtime, FY 2020 to FY 2027</h3>');
    html.push('<ul class="wc-workforce-bars">');
    o.series.forEach(function (p) {
      html.push('<li><span class="wc-workforce-bar-label">' + p.label + ' <em>' + p.note + '</em></span>' +
        '<span class="wc-workforce-bar"><i style="width:' + (p.value / max * 100).toFixed(1) + '%"></i></span>' +
        '<strong>' + money(p.value) + '</strong></li>');
    });
    html.push('</ul>');

    if (o.firstActual && o.lastActual && o.firstActual.value > 0) {
      var growth = (o.lastActual.value / o.firstActual.value - 1) * 100;
      html.push('<p class="wc-workforce-note">Overtime paid grew about ' + Math.round(growth) +
        '% between ' + o.firstActual.label + ' and ' + o.lastActual.label +
        '. It is concentrated in services that must respond outside scheduled hours rather than spread evenly across the organization.</p>');
    }

    if (o.byDept.length) {
      html.push('<ul class="wc-workforce-list">');
      o.byDept.slice(0, 6).forEach(function (d) {
        var share = o.proposed ? Math.round(d.value / o.proposed * 100) : 0;
        html.push('<li><span>' + escapeHtml(d.name) + '</span><strong>' + money(d.value) + ' &middot; ' + share + '%</strong></li>');
      });
      html.push('</ul>');
    }

    // Budgeting below the most recent actual is a real planning risk and is
    // stated rather than left for a reader to notice from the chart.
    if (o.lastActual && o.proposed < o.lastActual.value) {
      html.push('<p class="wc-workforce-note"><strong>Worth watching.</strong> The FY 2027 tentative overtime budget of ' +
        money(o.proposed) + ' is below ' + o.lastActual.label + ' actual overtime of ' + money(o.lastActual.value) +
        '. Holding overtime at the tentative level depends on filling vacancies and on a storm season, beach season, and solid-waste workload close to normal. If those assumptions do not hold, overtime is one of the first budget lines that would need to be monitored during the year.</p>');
    }
    return html.join("");
  }

  // Each block is returned separately so a hub page can mount them into
  // individual question cards. A page that only supplies the single legacy
  // #workforce-composition container still gets everything, in order.
  function blocks(data) {
    var c = composition(data);
    if (!c) return null;
    var out = {};

    var ptShare = c.positions ? (c.partTime / c.positions * 100) : 0;
    out.scope = '<p class="wc-workforce-note"><strong>What these counts cover.</strong> These are the ' +
      c.positions.toLocaleString("en-US") + ' individually budgeted positions in the departments the Board controls, together about ' +
      (Math.round(c.fteCovered * 10) / 10).toLocaleString("en-US") + ' full-time equivalents. They are not a countywide headcount: independently elected Constitutional Officers prepare their own personnel detail, and their staffing appears in the authorized FTE table rather than here. A budgeted position is a position the budget pays for, which is not the same as a person currently in the job.</p>';

    var ft = [];
    ft.push('<div class="wc-workforce-metrics">');
    ft.push('<div class="wc-workforce-metric"><strong>' + c.fullTime.toLocaleString("en-US") + '</strong><span>Full-time budgeted positions<small>Scheduled 2,080 hours a year</small></span></div>');
    ft.push('<div class="wc-workforce-metric"><strong>' + c.partTime.toLocaleString("en-US") + '</strong><span>Part-time budgeted positions<small>Scheduled 1,040 hours a year, ' + ptShare.toFixed(1) + '% of these positions</small></span></div>');
    ft.push('</div>');
    if (c.partTimeByDept.length) {
      ft.push('<h3 class="wc-workforce-subhead">Where the part-time positions are</h3>');
      ft.push('<ul class="wc-workforce-list">');
      c.partTimeByDept.forEach(function (d) {
        ft.push('<li><span>' + escapeHtml(d.name) + '</span><strong>' + d.value + ' part-time</strong></li>');
      });
      ft.push('</ul>');
      ft.push('<p class="wc-workforce-note">Part-time positions are concentrated in services with seasonal or extended public hours rather than spread across the organization.</p>');
    }
    ft.push(out.scope);
    out.composition = ft.join("");

    out.fn = functionHtml(staffingByFunction(data));

    if (c.premiumByDept.length) {
      var pm = [];
      pm.push('<div class="wc-workforce-metrics"><div class="wc-workforce-metric"><strong>' + money(c.premiumTotal) +
        '</strong><span>Budgeted weekend and shift premium pay<small>Across ' + c.premiumCount.toLocaleString("en-US") + ' positions</small></span></div></div>');
      pm.push('<ul class="wc-workforce-list">');
      c.premiumByDept.slice(0, 8).forEach(function (d) {
        pm.push('<li><span>' + escapeHtml(d.name) + '</span><strong>' + money(d.value) + '</strong></li>');
      });
      pm.push('</ul>');
      pm.push('<p class="wc-workforce-note">Premium pay is budgeted where services must be staffed outside normal weekday hours &mdash; beach operations, the beach tram, code compliance, solid waste, and facility maintenance. This is scheduled weekend and shift premium, budgeted separately from overtime.</p>');
      out.premium = pm.join("");
    }

    out.overtime = overtimeHtml(overtime(data));

    var changes = staffingChanges(data);
    if (changes.length) {
      var ch = ['<ul class="wc-workforce-list">'];
      changes.slice(0, 10).forEach(function (d) {
        ch.push('<li><span>' + escapeHtml(d.name) + '</span><strong class="' + (d.value > 0 ? "is-up" : "is-down") + '">' + signed(d.value) + ' FTE</strong></li>');
      });
      ch.push('</ul>');
      out.changes = ch.join("");
    }
    return out;
  }

  var MOUNTS = {
    composition: "wf-composition",
    fn: "wf-function",
    premium: "wf-premium",
    overtime: "wf-overtime",
    changes: "wf-changes"
  };

  function render(data) {
    var parts = blocks(data);
    var legacy = document.getElementById("workforce-composition");
    if (!parts) {
      if (legacy) legacy.innerHTML = '<p class="wc-workforce-note">Workforce composition could not be calculated from the current budget data.</p>';
      return;
    }
    var mountedAny = false;
    Object.keys(MOUNTS).forEach(function (key) {
      var host = document.getElementById(MOUNTS[key]);
      if (!host) return;
      host.innerHTML = parts[key] || "";
      mountedAny = true;
    });
    if (!mountedAny && legacy) {
      legacy.innerHTML = [parts.composition, parts.fn, parts.premium, parts.overtime, parts.changes]
        .filter(Boolean).join("");
    }
  }

  function init() {
    var hasMount = document.getElementById("workforce-composition");
    if (!hasMount) {
      for (var key in MOUNTS) {
        if (document.getElementById(MOUNTS[key])) { hasMount = true; break; }
      }
    }
    if (!hasMount || !window.WCBudgetData || !window.WCBudgetData.loadBudgetData) return;
    window.WCBudgetData.loadBudgetData().then(render).catch(function () {
      var legacy = document.getElementById("workforce-composition");
      if (legacy) legacy.innerHTML = '<p class="wc-workforce-note">Workforce composition could not be loaded.</p>';
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
