(function(){
  "use strict";

  const portfolios = [
    {
      title:"Public Safety and Emergency Readiness",
      benefit:"Law enforcement, detention, emergency planning, emergency communications, fire support, and disaster readiness protect people and property throughout Walton County.",
      members:[
        item("Walton County Sheriff's Office","Sheriff's Office","sheriffs-office.html",["Walton County Sheriff's Office","Sheriff's Office"]),
        item("Emergency Management","Emergency Management","emergency-management.html"),
        item("E911 Fund","E911","e911-fund.html",["E911 Fund","E911"]),
        item("South Walton Fire","South Walton Fire","south-walton-fire-and-state-control.html"),
        item("State Fire","State Fire Control","south-walton-fire-and-state-control.html"),
        item("Probation Services","Probation","probation.html",["Probation Services","Probation"])
      ],
      note:"Sheriff personnel detail and performance measures are managed by the independently elected Sheriff's Office and are not included in the County department performance dataset."
    },
    {
      title:"Roads, Transportation, and Infrastructure",
      benefit:"Road maintenance, engineering, drainage, sidewalks, and capital delivery support safe mobility and the infrastructure needed by a growing county.",
      members:[
        item("Public Works","Public Works","public-works.html"),
        item("Engineering Services","Engineering Department","engineering-department.html",["Engineering Services","Engineering Department","Public Works Engineering Services"]),
        item("Sidewalk","Sidewalk Fund","sidewalk-fund.html",["Sidewalk","Sidewalk Fund"]),
        item("MSBU","Municipal Service Benefit Unit Fund","municipal-service-benefit-unit-fund.html",["MSBU","Municipal Service Benefit Unit Fund","Municipal Service Benefit Unit"])
      ]
    },
    {
      title:"Solid Waste and Environmental Stewardship",
      benefit:"Waste collection, transfer, disposal, recycling support, environmental compliance, and resource protection help maintain a safe and healthy physical environment.",
      members:[
        item("Solid Waste","Solid Waste","solid-waste.html"),
        item("Environmental Services","Environmental Resources","environmental-resources.html",["Environmental Services","Environmental Resources"]),
        item("Soil Conservation","Soil Conservation","soil-conservation.html")
      ],
      note:"The Solid Waste Fund's interfund transfer is excluded from this operating-service view to avoid counting the same resources twice."
    },
    {
      title:"Growth, Permitting, and Community Standards",
      benefit:"Planning, permitting, inspections, code compliance, and geographic information help manage development, protect construction safety, and maintain community standards.",
      members:[
        item("Building Department","Building Department","building-department.html"),
        item("Planning","Planning","planning.html"),
        item("Planning Short-Term Rental","Short-Term Rental Program","planning.html",["Planning Short-Term Rental","Planning"]),
        item("Code Compliance","Code Compliance","code-compliance.html"),
        item("Code Compliance Beach","Beach Code Compliance","code-compliance.html",["Code Compliance Beach","Code Compliance"]),
        item("Geographic Info Systems","Geographic Information Systems","geographic-info-systems.html")
      ]
    },
    {
      title:"Tourism, Beaches, and Visitor Services",
      benefit:"Tourism promotion, beach operations, visitor services, beach mobility, and visitor-funded public safety support the tourism economy and help manage visitor impacts.",
      members:[
        item("Marketing","Tourism Marketing","tourism-administration.html#marketing",["Marketing","Tourism Marketing","Tourism Administration"]),
        item("Beach Operations","Beach Operations","tourism-beach-operations.html",["Beach Operations","Tourism Beach Operations"]),
        item("Beach Tram","Beach Tram","tourism-beach-operations.html",["Beach Tram","Tourism Beach Operations"]),
        item("Tourism Administration","Tourism Administration","tourism-administration.html"),
        item("Sales and Visitors Center","Sales and Visitor Center","tourism-administration.html#sales-and-visitor-center",["Sales and Visitors Center","Sales and Visitor Center","Tourism Administration"]),
        item("Communications","Tourism Communications","tourism-administration.html#communications",["Communications","Tourism Communications","Tourism Administration"]),
        item("North Walton Tourist Development Tax","North Walton Tourism","tourism-administration.html#north-walton",["North Walton Tourist Development Tax","North Walton","Tourism Administration"]),
        item("Tourism Public Safety","Tourism Public Safety","tourism-lifeguard-services-and-beach-safety.html",["Tourism Public Safety","Tourism Lifeguard Services and Beach Safety"]),
        item("South Walton Fire Lifeguard Services","Lifeguard Services","tourism-lifeguard-services-and-beach-safety.html",["South Walton Fire Lifeguard Services","Tourism Lifeguard Services and Beach Safety"])
      ],
      note:"The Board-committed Beach Renourishment amount is tracked separately from this operating-service view and remains dedicated to future beach renourishment activity."
    },
    {
      title:"Libraries, Parks, and Recreation",
      benefit:"Libraries, parks, recreation programs, golf, aquatics, and community facilities provide educational, cultural, and recreational opportunities for residents and visitors.",
      members:[
        item("Libraries","Libraries","libraries.html",["Libraries","County Libraries"]),
        item("Recreation","Recreation","recreation.html"),
        item("Recreation Plat Fee","Recreation Plat Fee Fund","recreation-plat-fee-fund.html",["Recreation Plat Fee","Recreation Plat Fee Fund"]),
        item("Eagle Springs Golf and Recreation Center","Eagle Springs Golf and Recreation Center","eagle-springs-golf-and-recreation-center.html"),
        item("Eagle Springs Grill","Eagle Springs Grill","eagle-springs-grill.html")
      ]
    },
    {
      title:"Housing, Veterans, Health, and Community Support",
      benefit:"Housing assistance, veteran advocacy, public health support, extension education, nonprofit partnerships, and community programs assist residents with specialized needs.",
      members:[
        item("Housing & Urban Development","Housing and Urban Development","housing-and-urban-development.html"),
        item("Veteran Services","Veteran Services","veteran-services.html"),
        item("Walton County Health Department","Walton County Health Department","walton-county-health-department.html"),
        item("Extension Office","Extension Office","extension-office.html"),
        item("Non-Profit Funding Program","Non-Profit Funding Program","non-profit-funding-program.html"),
        item("Culture and Recreation (Senior Centers & Mainstreet)","Senior Centers and Main Street","statutory-and-other-agency-funding.html")
      ]
    },
    {
      title:"County Facilities and Government Support",
      benefit:"Facilities, administration, legal, financial, workforce, and procurement services provide the operating foundation used to deliver public programs and maintain accountable government.",
      members:[
        item("Board of County Commissioners","Board of County Commissioners","board-of-county-commissioners.html",["Board of County Commissioners","BCC Other Uses Contingency"]),
        item("Building Construction and Maintenance","Building Construction and Maintenance","building-construction-and-maintenance.html"),
        item("County Administration","County Administration","county-administration.html"),
        item("Office of the County Attorney","Office of the County Attorney","office-of-the-county-attorney.html"),
        item("Human Resources","Human Resources","human-resources.html"),
        item("Office of Management and Budget","Office of Management and Budget","office-of-management-and-budget.html"),
        item("Procurement","Purchasing","purchasing.html",["Procurement","Purchasing"])
      ]
    },
    {
      title:"North Walton Mosquito Control",
      benefit:"Mosquito surveillance, treatment, inspection, and public education protect public health and quality of life within the North Walton Mosquito Control service area.",
      members:[
        item("Mosquito Control","Mosquito Control","mosquito-control.html",["Mosquito Control","Mosquito Control State Aid"]),
        item("Mosquito Control State Aid","State-Supported Mosquito Control","mosquito-control.html",["Mosquito Control State Aid","Mosquito Control"])
      ]
    },
    {
      title:"Courts and Judicial System Support",
      benefit:"Circuit and county court operations, court technology, indigent defense, prosecution support, guardian ad litem advocacy, and medical examiner services support the local judicial system that County government is statutorily required to fund.",
      members:[
        item("Circuit Court","Circuit Court","circuit-court.html"),
        item("County Court","County Court","county-court.html"),
        item("Court Innovations","Court Technology & Innovations","court-technology-and-innovations.html",["Court Innovations","Court Technology - Court Administration","Court Technology and Innovations"]),
        item("Guardian Ad Litem","Guardian Ad Litem","guardian-ad-litem.html"),
        item("Public Defender","Public Defender","public-defender.html"),
        item("State Attorney","State Attorney","state-attorney.html"),
        item("Medical Examiner","Medical Examiner","medical-examiner.html")
      ],
      note:"These are independently elected or appointed judicial offices and autonomous entities. County government funds them as required by Florida law but does not direct their day-to-day operations."
    },
    {
      title:"Elections, Records, and Financial Administration",
      benefit:"Court records, property valuation, elections administration, and property tax collection are independently elected constitutional offices that County government funds but does not operate.",
      members:[
        item("Clerk of Court","Clerk of Courts & County Comptroller","clerk-of-courts-and-county-comptroller.html",["Clerk of Court","Clerk of Courts & County Comptroller","Clerk of Circuit Court"]),
        item("Property Appraiser","Property Appraiser","property-appraiser.html"),
        item("Supervisor of Elections","Supervisor of Elections","supervisor-of-elections.html"),
        item("Tax Collector","Tax Collector","tax-collector.html"),
        item("Statutory & Other","Statutory & Other Agency Funding","statutory-and-other-agency-funding.html",["Statutory & Other","Statutory and Other Agency Fund","Statutory and Other"])
      ],
      note:"Constitutional Officers are independently elected under Florida's Constitution, set their own budgets within statutory limits, and submit them to the County; they are not managed by the Board of County Commissioners."
    }
  ];

  function item(expenseName,label,href,dataNames){
    return {expenseName:expenseName,label:label,href:href,dataNames:dataNames||[expenseName]};
  }
  function normalize(value){
    return String(value||"").toLowerCase().replace(/&/g,"and").replace(/[^a-z0-9]+/g," ").trim();
  }
  function money(value){
    return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(value||0);
  }
  function compactMoney(value){
    if(value>=1000000) return "$"+(value/1000000).toFixed(value>=100000000?1:2).replace(/\.0+$/,"").replace(/(\.\d)0$/,"$1")+"M";
    if(value>=1000) return "$"+Math.round(value/1000)+"K";
    return money(value);
  }
  function escapeHtml(value){
    return String(value==null?"":value).replace(/[&<>"']/g,function(ch){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch];});
  }
  function rowAmount(row){ return Number(row.FY2027_Proposed||0); }
  function priorRowAmount(row){ return Number(row.FY2026_Original_Budget||0); }
  function revenueBucket(row){
    const code=String(row.Revenue_Code||row.Object_Code||"");
    if(code.indexOf("311")===0) return "Property tax";
    if(code.indexOf("38")===0) return "Transfers";
    if(code.indexOf("32")===0||code.indexOf("34")===0||code.indexOf("35")===0) return "Charges, permits, and fines";
    if(code.indexOf("33")===0) return "Intergovernmental revenue";
    return "Other assigned revenue";
  }
  const OBJECT_TYPE_ORDER=["Personnel Services","Operating Expenditures","Capital Outlay","Debt Service","Grants and Aid","Other Uses"];
  function objectTypeLabel(value){
    const type=String(value||"").trim();
    return type||"Unclassified";
  }
  function formatTrend(current,prior){
    if(!prior) return "";
    const pct=((current-prior)/prior)*100;
    return (pct>0?"+":"")+pct.toFixed(1)+"%";
  }
  function formatTrendDollar(current,prior){
    if(!prior) return "";
    const diff=current-prior;
    const abs=Math.abs(diff);
    const amount=abs>=1000000?"$"+(abs/1000000).toFixed(1)+"M":abs>=1000?"$"+Math.round(abs/1000)+"K":"$"+Math.round(abs);
    return (diff>0?"+":diff<0?"-":"")+amount;
  }
  function matchingNames(portfolio){
    const names=new Set();
    portfolio.members.forEach(function(member){member.dataNames.forEach(function(name){names.add(normalize(name));});});
    return names;
  }
  function renderPortfolio(portfolio,data,index){
    const names=matchingNames(portfolio);
    const expenseByName=new Map();
    (data.expenditures||[]).forEach(function(row){
      const key=normalize(row.Dept_Name);
      if(!names.has(key)) return;
      expenseByName.set(key,(expenseByName.get(key)||0)+rowAmount(row));
    });
    let budget=0;
    const departmentRows=portfolio.members.map(function(member){
      const amount=expenseByName.get(normalize(member.expenseName))||0;
      budget+=amount;
      return '<li><a href="'+escapeHtml(member.href)+'"><span>'+escapeHtml(member.label)+'</span><strong>'+money(amount)+'</strong></a></li>';
    }).join("");

    let fte=0,priorFte=0;
    (data.staffing||[]).forEach(function(row){
      if(!names.has(normalize(row.Dept_Name))) return;
      fte+=Number(row["2027"]||0);
      priorFte+=Number(row["2026"]||0);
    });

    // Same dedup as departments.html's own priorBudget -- a shared account
    // split across multiple Dept_Names would otherwise count its FY2026
    // total once per Dept_Name sharing it.
    const dedupedExpenditures=Array.isArray(data.dedupedExpenseRows)?data.dedupedExpenseRows:(data.expenditures||[]);
    let priorBudget=0;
    dedupedExpenditures.forEach(function(row){
      if(names.has(normalize(row.Dept_Name))) priorBudget+=priorRowAmount(row);
    });

    const costByType=new Map();
    (data.expenditures||[]).forEach(function(row){
      const key=normalize(row.Dept_Name);
      if(!names.has(key)) return;
      const type=objectTypeLabel(row.Object_Type);
      costByType.set(type,(costByType.get(type)||0)+rowAmount(row));
    });
    const costTypeRows=OBJECT_TYPE_ORDER.concat(Array.from(costByType.keys()).filter(function(t){return OBJECT_TYPE_ORDER.indexOf(t)===-1;}))
      .filter(function(type){return costByType.has(type)&&costByType.get(type);})
      .map(function(type){
        const amount=costByType.get(type);
        const pct=budget?Math.round((amount/budget)*100):0;
        return '<li><span>'+escapeHtml(type)+'</span><strong>'+compactMoney(amount)+'</strong><em>'+pct+'%</em></li>';
      }).join("")||'<li><span>Cost by type</span><strong>Not available</strong></li>';

    const revenueBuckets=new Map();
    (data.revenues||[]).forEach(function(row){
      if(!names.has(normalize(row.Dept_Name))) return;
      const amount=rowAmount(row);
      if(!amount) return;
      const bucket=revenueBucket(row);
      revenueBuckets.set(bucket,(revenueBuckets.get(bucket)||0)+amount);
    });
    // Transfers in are excluded from "assigned revenue" for the subsidy
    // comparison below -- a transfer into a fund (e.g. the General Fund
    // subsidizing the Sheriff Fund) is itself the subsidy mechanism, not
    // revenue that offsets it. Counting it as offsetting revenue would make
    // every transfer-supported program look self-funded. It still appears
    // in the funding breakdown list, just not in the subsidy math.
    const revenueAssignedExcludingTransfers=Array.from(revenueBuckets.entries())
      .filter(function(entry){return entry[0]!=="Transfers";})
      .reduce(function(sum,entry){return sum+entry[1];},0);
    const subsidy=budget-revenueAssignedExcludingTransfers;
    const fundingRows=Array.from(revenueBuckets.entries()).sort(function(a,b){return b[1]-a[1];}).map(function(entry){
      return '<li><span>'+escapeHtml(entry[0])+'</span><strong>'+money(entry[1])+'</strong></li>';
    }).join("")||'<li><span>Revenue assignment</span><strong>See department schedules</strong></li>';
    const subsidyPct=budget>0?Math.round((subsidy/budget)*100):0;
    const subsidyHtml=budget<=0?'':(subsidy>0
      ? '<p class="wc-value-subsidy"><strong>'+money(subsidy)+'</strong> ('+subsidyPct+'% of this program&rsquo;s cost) is not covered by revenue assigned directly to these departments (property tax, fees, charges, and intergovernmental revenue) and relies on other County resources, including any interfund transfer shown above. <span class="wc-value-subsidy-note">This compares directly assigned, non-transfer revenue to total cost for the included departments; it is not an audited subsidy calculation and some revenue may be recorded at the fund rather than department level.</span></p>'
      : '<p class="wc-value-subsidy"><strong>'+money(-subsidy)+'</strong> more in directly assigned, non-transfer revenue than cost is recorded for these departments, meaning this program is not a net draw on other County resources by this measure. <span class="wc-value-subsidy-note">This compares directly assigned, non-transfer revenue to total cost for the included departments; it is not an audited subsidy calculation.</span></p>');

    const seen=new Set();
    const measures=(data.performanceMeasures||[]).filter(function(row){return names.has(normalize(row.Dept_Name));}).filter(function(row){
      const key=normalize(row.Measure)+"|"+normalize(row.Projected_2027);
      if(!row.Measure||seen.has(key)) return false;
      seen.add(key);
      return true;
    }).slice(0,5);
    const targetRows=measures.map(function(row){
      const prior=String(row.Projected_2026||"").trim();
      const target=String(row.Projected_2027||"").trim()||"Not provided";
      const comparison=prior?"FY 2026 projection: "+prior+"; FY 2027 target: "+target:"FY 2027 target: "+target;
      return '<li><strong>'+escapeHtml(row.Dept_Name)+': '+escapeHtml(target)+'</strong><span>'+escapeHtml(row.Measure)+'<br>'+escapeHtml(comparison)+'</span></li>';
    }).join("")||'<li><strong>Performance target not available</strong><span>The responsible office has not supplied an FY 2027 performance measure in the County department dataset.</span></li>';

    const trendDollar=formatTrendDollar(budget,priorBudget);
    const trendPct=formatTrend(budget,priorBudget);
    const trendClass=trendDollar?(trendDollar.charAt(0)==="-"?"wc-value-trend-down":"wc-value-trend-up"):"";
    const trendHtml=trendDollar?('<span class="'+trendClass+'">'+escapeHtml(trendDollar)+'</span> <span class="wc-value-trend-paren">('+escapeHtml(trendPct)+')</span>'):"&mdash;";

    const html='<details class="wc-value-service" data-program-key="'+escapeHtml(normalize(portfolio.title))+'"'+(index===0?' open':'')+'><summary>'+
      '<span class="wc-value-title"><strong>'+escapeHtml(portfolio.title)+'</strong><span>'+escapeHtml(portfolio.benefit)+'</span></span>'+
      '<span class="wc-value-metric"><span>Budget represented</span><strong>'+compactMoney(budget)+'</strong></span>'+
      '<span class="wc-value-metric"><span>YoY change</span><strong class="wc-value-metric-trend">'+trendHtml+'</strong></span>'+
      '<span class="wc-value-metric"><span>Departments</span><strong>'+portfolio.members.length+'</strong></span>'+
      '<span class="wc-value-metric"><span>FTE represented</span><strong>'+new Intl.NumberFormat("en-US",{maximumFractionDigits:1}).format(fte)+'</strong></span>'+
      '<span class="wc-value-chevron" aria-hidden="true">⌄</span></summary>'+
      '<div class="wc-value-body"><div><h3>Departments and FY 2027 budget</h3><ul class="wc-value-departments">'+departmentRows+'</ul>'+
      (portfolio.note?'<p style="margin-top:14px">'+escapeHtml(portfolio.note)+'</p>':'')+
      '<h3 style="margin-top:22px">Cost by type</h3><ul class="wc-value-cost-type">'+costTypeRows+'</ul>'+
      '</div><div><h3>Revenue assigned to included departments</h3><ul class="wc-value-funding">'+fundingRows+'</ul>'+
      subsidyHtml+
      '<h3 style="margin-top:22px">Selected FY 2027 service targets</h3><ul class="wc-value-targets">'+targetRows+'</ul></div></div></details>';
    return {html:html,budget:budget,priorBudget:priorBudget,fte:fte,priorFte:priorFte,count:portfolio.members.length};
  }

  function renderOverviewRow(portfolio,result){
    const trendDollar=formatTrendDollar(result.budget,result.priorBudget);
    const trendClass=trendDollar?(trendDollar.charAt(0)==="-"?"wc-value-trend-down":"wc-value-trend-up"):"";
    const trendHtml=trendDollar?'<span class="wc-value-overview-trend '+trendClass+'">'+escapeHtml(trendDollar)+'</span>':"";
    return '<a class="wc-value-overview-row" href="#'+encodeURIComponent(normalize(portfolio.title))+'" data-program-jump="'+escapeHtml(normalize(portfolio.title))+'">'+
      '<span class="wc-value-overview-name">'+escapeHtml(portfolio.title)+'</span>'+
      '<span class="wc-value-overview-desc">'+escapeHtml(portfolio.benefit)+'</span>'+
      '<span class="wc-value-overview-amount">'+compactMoney(result.budget)+trendHtml+'</span>'+
    '</a>';
  }

  function updateHeroStats(totals){
    const statEl=function(name){ return document.querySelector('[data-program-stat="'+name+'"]'); };
    const totalEl=statEl("total"), countEl=statEl("count"), agenciesEl=statEl("agencies"), fteEl=statEl("fte"), changeEl=statEl("change");
    if(totalEl) totalEl.textContent=compactMoney(totals.budget);
    if(countEl) countEl.textContent=String(portfolios.length);
    if(agenciesEl) agenciesEl.textContent=String(totals.count);
    if(fteEl) fteEl.textContent=new Intl.NumberFormat("en-US",{maximumFractionDigits:1}).format(totals.fte);
    if(changeEl){
      const dollar=formatTrendDollar(totals.budget,totals.priorBudget);
      const pct=formatTrend(totals.budget,totals.priorBudget);
      changeEl.textContent=dollar?dollar+(pct?" ("+pct+")":""):"—";
    }
  }

  document.addEventListener("DOMContentLoaded",function(){
    const container=document.getElementById("services-public-value");
    const overviewContainer=document.getElementById("services-public-value-overview");
    if(!container||!window.WCBudgetData) return;
    window.WCBudgetData.loadBudgetData().then(function(data){
      const results=portfolios.map(function(portfolio,index){return renderPortfolio(portfolio,data,index);});
      container.innerHTML=results.map(function(r){return r.html;}).join("");
      const totals=results.reduce(function(acc,r){acc.budget+=r.budget;acc.priorBudget+=r.priorBudget;acc.fte+=r.fte;acc.count+=r.count;return acc;},{budget:0,priorBudget:0,fte:0,count:0});
      updateHeroStats(totals);
      if(overviewContainer){
        overviewContainer.innerHTML=portfolios.map(function(portfolio,index){return renderOverviewRow(portfolio,results[index]);}).join("");
        overviewContainer.addEventListener("click",function(event){
          const row=event.target.closest("[data-program-jump]");
          if(!row) return;
          event.preventDefault();
          if(typeof window.wcProgramShowAll==="function") window.wcProgramShowAll();
          const target=document.querySelector('.wc-value-service[data-program-key="'+row.getAttribute("data-program-jump")+'"]');
          if(target){
            target.open=true;
            target.scrollIntoView({behavior:"smooth",block:"start"});
          }
        });
      }
    }).catch(function(error){
      console.error(error);
      container.innerHTML='<div class="wc-data-error">Service information could not be loaded. Please try again later.</div>';
      if(overviewContainer) overviewContainer.innerHTML='<div class="wc-data-error">Service information could not be loaded. Please try again later.</div>';
    });
  });
})();
