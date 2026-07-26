// Renders a fund schedule shell identical in style to renderFundSchedule()
// (assets/cip-fund-schedule.js) for funds with a real FY2027 budget but no
// Board-identified project list in the CIP project tracker yet. Shows the
// budgeted amount as a single placeholder line item rather than $0.
function renderPlaceholderFundSchedule(config){
  const mount = document.getElementById(config.mountId);
  if(!mount){
    return;
  }

  const amount = Number(config.amount || 0);
  const amountLabel = money(amount);

  ensureCipScheduleStyles();

  mount.innerHTML = `
    <section class="wc-cip-schedule-shell" aria-label="${escapeHtml(config.label)} capital schedule">
      <div class="wc-cip-schedule-controls">
        <div class="wc-cip-schedule-control-top">
          <div>
            <h2>FY 2027 Schedule</h2>
            <p>No individual project has been Board-directed yet; the full amount is shown as a placeholder pending that decision.</p>
          </div>
          <div class="wc-cip-active-total">
            <strong>${amountLabel}</strong>
            <span>FY 2027 Total</span>
          </div>
        </div>
      </div>
      <div class="wc-cip-year-body">
        <div class="wc-cip-year-summary" aria-label="${escapeHtml(config.label)} schedule summary">
          <div class="wc-cip-year-stat">
            <strong>${amountLabel}</strong>
            <span>${escapeHtml(config.label)}</span>
          </div>
          <div class="wc-cip-year-stat">
            <strong>1</strong>
            <span>Projects Listed</span>
          </div>
          <div class="wc-cip-year-stat">
            <strong>${money(0)}</strong>
            <span>In-House Engineering</span>
          </div>
        </div>
        <div class="wc-table-wrap wc-cip-year-table">
          <div class="wc-cip-table-label-row">
            <p class="wc-table-label">FY 2027 ${escapeHtml(config.label)} Schedule</p>
          </div>
          <div class="wc-data-table-scroll">
            <table class="wc-data-table">
              <thead>
                <tr>
                  <th>Project</th>
                  <th class="wc-num">FY 2027</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>${escapeHtml(config.projectTitle)}</td>
                  <td class="wc-num">${amountLabel}</td>
                </tr>
                <tr class="wc-table-total-row">
                  <td>Total FY 2027 ${escapeHtml(config.label)}</td>
                  <td class="wc-num">${amountLabel}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  `;
}
