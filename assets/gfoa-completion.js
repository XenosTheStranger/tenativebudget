(function () {
  "use strict";

  const money = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  });

  function number(value) {
    const parsed = Number(String(value == null ? "" : value).replace(/[$,()]/g, ""));
    return Number.isFinite(parsed) ? parsed : 0;
  }

  function reserveComparison() {
    const host = document.getElementById("gfoa-reserve-comparison");
    if (!host || !window.WCBudgetData || !window.WCBudgetData.loadBudgetData) return;

    window.WCBudgetData.loadBudgetData().then(function (data) {
      const generalExpenditures = (data.expenditures || []).reduce(function (total, row) {
        return String(row.Dept_Code || "").slice(0, 3) === "001"
          ? total + number(row.FY2027_Proposed)
          : total;
      }, 0);
      const balances = (data.fundBalances || []).filter(function (row) {
        return String(row.Fund_Code || "").padStart(3, "0") === "001";
      }).sort(function (a, b) {
        return number(b.Year) - number(a.Year);
      });
      const preferred = balances.find(function (row) {
        return /unassigned/i.test(String(row.Object_Description || ""));
      }) || balances[0];
      const estimatedBalance = preferred ? number(preferred.Fund_Balance) : 0;
      const benchmark = generalExpenditures / 6;
      const months = generalExpenditures ? estimatedBalance / generalExpenditures * 12 : 0;
      const margin = estimatedBalance - benchmark;

      host.innerHTML = [
        '<div class="wc-reserve-metrics">',
          '<div class="wc-reserve-metric"><span>FY 2027 General Fund expenditures and transfers out</span><strong>' + money.format(generalExpenditures) + '</strong></div>',
          '<div class="wc-reserve-metric"><span>Two-month policy benchmark</span><strong>' + money.format(benchmark) + '</strong></div>',
          '<div class="wc-reserve-metric"><span>Estimated unassigned General Fund balance</span><strong>' + money.format(estimatedBalance) + '</strong></div>',
          '<div class="wc-reserve-metric"><span>Estimated operating coverage</span><strong>' + months.toFixed(2) + ' months</strong></div>',
        '</div>',
        '<p class="wc-reserve-result">For planning purposes, the estimated balance is <strong>' + money.format(Math.abs(margin)) + (margin >= 0 ? ' above' : ' below') + '</strong> the two-month benchmark. Final policy compliance depends on the adopted budget, year-end results, and the official classification of fund balance.</p>'
      ].join("");
    }).catch(function () {
      host.innerHTML = '<p class="wc-reserve-result">The policy comparison could not be calculated from the current budget data.</p>';
    });
  }

  function capitalDisclosure() {
    const host = document.getElementById("gfoa-capital-disclosure");
    if (!host || host.dataset.gfoaLoaded === "true" || !window.wcCipProjectsReady) return false;
    host.dataset.gfoaLoaded = "true";

    window.wcCipProjectsReady.then(function (projects) {
      const rows = Array.isArray(projects) ? projects : [];
      const count = function (field) {
        return rows.filter(function (row) { return String(row[field] || "").trim(); }).length;
      };
      const rawCount = function (field, valid) {
        return rows.filter(function (row) {
          const value = String((row.raw || {})[field] || "").trim();
          return value && (!valid || valid(value));
        }).length;
      };
      const statusRows = [
        ["Project priority", rawCount("Project Priority", function (value) { return value.toLowerCase() !== "none"; })],
        ["Project narrative", rawCount("Project Narrative")],
        ["Project manager", count("project_manager")],
        ["Supplemental funding-source detail", count("funding_source")],
        ["Estimated completion date", count("completion")],
        ["Estimated operating impact", count("operational_impact")]
      ];
      host.innerHTML = [
        '<div class="wc-capital-status-summary"><strong>' + rows.length + '</strong><span>projects reviewed in the current five-year plan</span></div>',
        '<div class="wc-capital-status-grid">',
          statusRows.map(function (item) {
            return '<div><span>' + item[0] + '</span><strong>' + item[1] + ' of ' + rows.length + '</strong></div>';
          }).join(""),
        '</div>',
        '<p class="wc-capital-status-note"><strong>Data limitation:</strong> A blank field means the information has not been supplied; it does not mean zero impact or no completion schedule. The current project source also does not consistently classify projects as new, replacement, or rehabilitation, or identify full-funding and contingency amounts. Those fields should be completed by the responsible departments before the final GFOA submission.</p>'
      ].join("");
    }).catch(function () {
      host.innerHTML = '<p class="wc-capital-status-note">Capital-data completeness could not be calculated from the current project file.</p>';
    });
    return true;
  }

  function init() {
    reserveComparison();
    if (!capitalDisclosure()) {
      let attempts = 0;
      const timer = window.setInterval(function () {
        attempts += 1;
        if (capitalDisclosure() || attempts >= 40) window.clearInterval(timer);
      }, 250);
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
