(function(){
  "use strict";

  var SERVICES = {
    "building construction and maintenance":[
      ["Build and renew county facilities","Plans and delivers construction, renovation, and major repair projects for county buildings."],
      ["Maintain public buildings","Keeps county facilities safe, functional, and available for the people who use them."],
      ["Manage facility systems","Coordinates building systems, preventive maintenance, and service requests across county operations."]
    ],
    "building department":[
      ["Review building plans","Checks proposed construction for compliance with applicable building and safety requirements."],
      ["Issue permits","Processes permits that authorize eligible construction, alteration, and related work."],
      ["Inspect construction","Verifies permitted work at required stages before completion or occupancy."]
    ],
    "code compliance":[
      ["Respond to code concerns","Receives and investigates reported conditions that may violate county codes."],
      ["Resolve property violations","Works with property owners to correct documented violations and restore compliance."],
      ["Support neighborhood standards","Conducts field activity and case follow-up that protect community health, safety, and appearance."]
    ],
    "county administration":[
      ["Carry out Board direction","Coordinates implementation of policies and decisions adopted by the Board of County Commissioners."],
      ["Coordinate county operations","Aligns departments, priorities, and executive decisions across Board-controlled government."],
      ["Support public accountability","Provides executive oversight, issue resolution, and communication about county operations."]
    ],
    "eagle springs golf and recreation center":[
      ["Operate the golf course","Provides and maintains the public golf experience at Eagle Springs."],
      ["Maintain recreation grounds","Cares for the course, grounds, equipment, and supporting recreation assets."],
      ["Host community recreation","Provides access, programming, and gathering opportunities at the recreation center."]
    ],
    "eagle springs grill":[
      ["Provide food service","Prepares and serves food and beverages for Eagle Springs patrons and guests."],
      ["Support events and outings","Provides hospitality support for golf, recreation, and community events."],
      ["Operate the grill","Manages daily customer service, supplies, food safety, and point-of-sale activity."]
    ],
    "emergency management":[
      ["Prepare for emergencies","Develops plans, training, and coordination arrangements before disasters occur."],
      ["Coordinate emergency response","Connects agencies, information, and resources during an emergency activation."],
      ["Support community recovery","Coordinates recovery information, assistance, and continuity after an emergency."]
    ],
    "engineering department":[
      ["Design public infrastructure","Develops and reviews plans for roads, drainage, and other county infrastructure."],
      ["Manage infrastructure projects","Coordinates engineering work from scope and permitting through construction."],
      ["Review development impacts","Evaluates technical plans and infrastructure requirements associated with development."]
    ],
    "environmental resources":[
      ["Protect natural resources","Supports stewardship of waterways, habitat, and environmentally sensitive county resources."],
      ["Manage environmental projects","Plans and coordinates restoration, monitoring, and resource-management initiatives."],
      ["Provide environmental review","Supplies technical review and guidance for county projects and environmental responsibilities."]
    ],
    "extension office":[
      ["Share research-based education","Connects residents with practical information from the University of Florida extension system."],
      ["Support agriculture and landscapes","Provides education and assistance for farms, gardens, natural resources, and pest management."],
      ["Develop youth and families","Offers 4-H and community learning opportunities that build skills and leadership."]
    ],
    "geographic info systems":[
      ["Maintain county map data","Creates and maintains geographic information used across county operations."],
      ["Provide public mapping","Makes location-based county information available through maps and online tools."],
      ["Support location decisions","Provides spatial analysis for planning, infrastructure, emergency response, and service delivery."]
    ],
    "housing and urban development":[
      ["Support housing stability","Administers eligible housing assistance and improvement activities for residents."],
      ["Manage community-development funding","Coordinates grants and programs intended to improve housing and community conditions."],
      ["Connect residents with resources","Provides program information, eligibility guidance, and application support."]
    ],
    "human resources":[
      ["Recruit and support employees","Coordinates hiring, onboarding, employee records, and workplace support."],
      ["Administer pay and benefits","Manages compensation, benefits, classification, and related personnel processes."],
      ["Guide workforce policy","Supports performance, training, employee relations, and compliance with employment requirements."]
    ],
    "libraries":[
      ["Provide books and information","Connects residents with collections, research help, technology, and digital resources."],
      ["Support learning at every age","Offers literacy, educational, and cultural programs for children, adults, and families."],
      ["Provide welcoming public spaces","Maintains accessible places for reading, study, connection, and community activity."]
    ],
    "mosquito control":[
      ["Monitor mosquito activity","Uses surveillance and field information to identify mosquito populations and conditions."],
      ["Reduce mosquito populations","Applies appropriate treatment and source-control practices in the service area."],
      ["Respond to resident concerns","Investigates service requests and provides information about mosquito prevention."]
    ],
    "mossy head wastewater treatment facility":[
      ["Treat wastewater","Operates treatment processes that protect public health and the environment."],
      ["Maintain the treatment system","Inspects, repairs, and maintains facility equipment and supporting infrastructure."],
      ["Monitor regulatory compliance","Tests, documents, and reports treatment performance under applicable requirements."]
    ],
    "office of management and budget":[
      ["Build the annual budget","Coordinates department requests, revenue estimates, balancing, and the tentative county budget."],
      ["Monitor public spending","Tracks budget performance and supports amendments throughout the fiscal year."],
      ["Explain financial decisions","Produces schedules, forecasts, analysis, and public budget information for decision-making."]
    ],
    "office of the county attorney":[
      ["Advise county government","Provides legal counsel to the Board and Board-controlled departments."],
      ["Prepare and review legal documents","Reviews ordinances, resolutions, agreements, contracts, and other county instruments."],
      ["Represent the county","Manages litigation, claims, hearings, and other legal proceedings involving the county."]
    ],
    "planning":[
      ["Guide long-range growth","Maintains planning policies that shape future land use and community development."],
      ["Review development proposals","Evaluates applications for consistency with county plans and land-development requirements."],
      ["Support public land-use decisions","Provides analysis, public-process support, and recommendations for planning decisions."]
    ],
    "probation":[
      ["Supervise court-ordered probation","Monitors people assigned to county probation under court requirements."],
      ["Track compliance","Documents reporting, conditions, payments, and other obligations established by the court."],
      ["Report to the court","Provides compliance information and case updates needed for judicial decisions."]
    ],
    "public works":[
      ["Maintain roads and rights-of-way","Repairs and maintains county roads, shoulders, signs, and related transportation assets."],
      ["Manage drainage and storm impacts","Maintains drainage systems and responds to conditions affecting travel and property."],
      ["Deliver transportation improvements","Coordinates paving, resurfacing, bridge, and other road improvement work."]
    ],
    "purchasing":[
      ["Run fair solicitations","Coordinates competitive purchasing processes for county goods, services, and construction."],
      ["Support county purchasing","Helps departments obtain needed resources under adopted rules and contracts."],
      ["Maintain procurement records","Documents awards, contracts, vendor information, and purchasing compliance."]
    ],
    "recreation":[
      ["Operate parks and recreation facilities","Maintains public parks, fields, courts, and supporting amenities."],
      ["Provide recreation programs","Coordinates activities, leagues, and opportunities for residents of different ages."],
      ["Support community use","Schedules facilities and helps residents access safe places to play and gather."]
    ],
    "soil conservation":[
      ["Support conservation planning","Provides local assistance for soil, water, and natural-resource conservation practices."],
      ["Connect landowners with technical help","Links agricultural and rural property needs with conservation information and partners."],
      ["Promote resource stewardship","Supports education and cooperative projects that protect working lands and water resources."]
    ],
    "solid waste":[
      ["Provide waste collection and disposal support","Coordinates county solid-waste services and disposal operations."],
      ["Operate waste facilities","Maintains transfer, convenience, recycling, and related solid-waste sites and equipment."],
      ["Reduce improper disposal","Supports recycling, public information, and responsible handling of eligible materials."]
    ],
    "tourism administration":[
      ["Promote Walton County destinations","Coordinates marketing and communications funded for eligible tourism purposes."],
      ["Support visitors and tourism partners","Provides visitor information, sales support, and destination services."],
      ["Administer tourism resources","Manages eligible Tourist Development Tax activities, contracts, planning, and accountability."]
    ],
    "tourism beach operations":[
      ["Maintain public beach access","Supports cleanliness, amenities, and daily operations at county beach locations."],
      ["Protect and restore beaches","Coordinates eligible renourishment, shoreline, and beach-preservation work."],
      ["Move visitors to the beach","Operates eligible transportation and tram activities that support beach access."]
    ],
    "tourism lifeguard services and beach safety":[
      ["Provide lifeguard coverage","Supports trained lifeguard presence at designated beach locations."],
      ["Respond to beach emergencies","Coordinates rescue and public-safety response when beachgoers need help."],
      ["Promote safer beach use","Provides warning, education, and operational support for changing beach conditions."]
    ],
    "veteran services":[
      ["Help veterans navigate benefits","Provides information and assistance with eligible federal, state, and local benefits."],
      ["Prepare and track claims","Assists veterans and families with applications, evidence, and claim follow-up."],
      ["Connect families with support","Refers veterans, dependents, and survivors to appropriate services and resources."]
    ]
  };

  var CHALLENGE_GROUPS = [
    {
      departments:["building construction and maintenance","engineering department","public works","solid waste","mossy head wastewater treatment facility","recreation","eagle springs golf and recreation center"],
      text:"Keeping pace with growth while maintaining aging assets, managing construction costs, and scheduling work with limited staff and equipment."
    },
    {
      departments:["building department","code compliance","planning","environmental resources","mosquito control"],
      text:"Responding to growing workloads while providing timely service, maintaining consistent enforcement, and adapting to changing regulatory and environmental conditions."
    },
    {
      departments:["emergency management","tourism lifeguard services and beach safety"],
      text:"Maintaining year-round readiness for unpredictable events, seasonal demand, severe weather, and competition for trained personnel and specialized equipment."
    },
    {
      departments:["extension office","housing and urban development","libraries","soil conservation","veteran services","probation"],
      text:"Meeting changing community needs while managing caseloads, maintaining public access, and delivering reliable service with limited staffing and program capacity."
    },
    {
      departments:["county administration","human resources","office of management and budget","office of the county attorney","purchasing","geographic info systems"],
      text:"Supporting a growing organization while recruiting and retaining skilled staff, modernizing systems, meeting compliance requirements, and responding to competing priorities."
    },
    {
      departments:["tourism administration","tourism beach operations"],
      text:"Balancing seasonal visitor demand and community impacts while protecting natural assets and using legally restricted tourism revenues for eligible purposes."
    },
    {
      departments:["eagle springs grill"],
      text:"Maintaining dependable customer service while managing food, supply, labor, and operating costs that can change quickly."
    }
  ];

  function challengeFor(key){
    for(var i=0;i<CHALLENGE_GROUPS.length;i++){
      if(CHALLENGE_GROUPS[i].departments.indexOf(key)!==-1) return CHALLENGE_GROUPS[i].text;
    }
    return "Maintaining reliable service while responding to growth, changing workloads, staffing capacity, rising costs, and evolving operational requirements.";
  }

  function normalize(value){
    return String(value||"").toLowerCase().replace(/&/g,"and").replace(/[^a-z0-9]+/g," ").trim();
  }

  function escapeHtml(value){
    return String(value===undefined||value===null?'':value).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }
  function money(value){return (Number(value)||0).toLocaleString('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0});}
  function compactMoney(value){
    var amount=Number(value)||0;
    if(Math.abs(amount)>=1000000) return '$'+(amount/1000000).toLocaleString('en-US',{maximumFractionDigits:1})+'M';
    return money(amount);
  }
  function sum(rows,field){return (rows||[]).reduce(function(total,row){return total+(Number(row[field])||0);},0);}
  var QUESTION_ICONS={
    cost:'<circle cx="12" cy="12" r="9"/><path d="M15 8.5c-.6-.9-1.6-1.5-3-1.5-1.7 0-3 1-3 2.5s1.3 2.5 3 2.5 3 1 3 2.5-1.3 2.5-3 2.5c-1.4 0-2.4-.6-3-1.5M12 5v14"/>',
    capital:'<path d="M4 21V8h16v13M2 21h20M7 8V4h10v4M8 13h3M13 13h3M8 17h3M13 17h3"/>',
    contracts:'<path d="M7 3h10v4H7zM5 7h14v14H5zM8 12h8M8 16h5M9 5h6"/>',
    funding:'<path d="M3 10h18M5 10v8M9 10v8M15 10v8M19 10v8M3 18h18M2 7l10-4 10 4v3H2z"/>',
    services:'<path d="M9 5h6M9 3h6v4H9zM7 5H5v16h14V5h-2M8 12l2 2 5-5M8 18h8"/>',
    added:'<circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/>',
    collaborate:'<circle cx="8" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c0-4 2-7 5-7s5 3 5 7M13 15c1-1.2 2.3-1.8 4-1.8 2.7 0 4.5 2.7 4.5 6.8M11 10l3-1"/>',
    accountable:'<path d="M4 18l5-5 4 3 7-9M15 7h5v5"/>',
    staffing:'<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c0-4 2.5-7 6-7s6 3 6 7M14 14c3.5 0 6 2.3 6 6"/>',
    changing:'<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9z"/>',
    challenges:'<path d="M12 3 2.5 20h19zM12 9v5M12 18h.01"/>',
    snapshot:'<path d="M3 10h18M5 10V20M9 10V20M15 10V20M19 10V20M3 20h18M2 7l10-4 10 4v3H2z"/>'
  };
  function icon(nameOrPath){var content=QUESTION_ICONS[nameOrPath]||'<path d="'+escapeHtml(nameOrPath)+'"/>';return '<span class="wc-profile-question-icon" aria-hidden="true"><svg viewBox="0 0 24 24">'+content+'</svg></span>';}
  function serviceIcon(index){
    var paths=['M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2M9 2h6v4H9zM9 14l2 2 4-4','M3 3v18h18M7 16l4-5 4 3 5-7M7 16v2M11 11v7M15 14v4M20 7v11','M2 4h20M4 4v13h16V4M8 21l4-4 4 4M8 13l3-3 2 2 3-4'];
    return '<span class="wc-profile-service-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="'+paths[index%paths.length]+'"/></svg></span>';
  }
  function question(label,body,path,className){
    var details=document.createElement('details');
    details.className='wc-simple-disclosure wc-department-question wc-profile-question'+(className?' '+className:'');
    details.innerHTML='<summary>'+icon(path||'M5 12h14M12 5v14')+'<span class="wc-simple-disclosure-summary"><b>'+escapeHtml(label)+'</b></span></summary><div class="wc-simple-disclosure-body">'+body+'</div>';
    return details;
  }
  function configureExistingQuestion(id,label,path){
    var mount=document.getElementById(id);
    var details=mount&&mount.closest('.wc-department-question');
    if(!details) return null;
    details.classList.add('wc-profile-question');
    var summary=details.querySelector(':scope>summary');
    if(summary) summary.innerHTML=icon(path)+'<span class="wc-simple-disclosure-summary"><b>'+escapeHtml(label)+'</b></span>';
    return details;
  }
  function financeStat(label,amount,prior,total){
    var change=amount-prior;
    var pct=prior?change/prior*100:0;
    var pctText=prior?(pct>0?'+':'')+pct.toFixed(1)+'%':amount?'New':'0.0%';
    var direction=change>0?'Increasing':change<0?'Decreasing':'Unchanged';
    var trendClass=change>0?'is-up':change===0?'is-flat':'is-down';
    return '<article class="wc-profile-finance-stat"><span>'+escapeHtml(label)+'</span><div class="wc-profile-finance-main"><strong>'+money(amount)+'</strong><div class="wc-profile-finance-change '+trendClass+'"><em>'+direction+'</em>'+(change?(change>0?'+':'−')+money(Math.abs(change)):'$0')+'</div><div class="wc-profile-finance-percent '+trendClass+'">'+pctText+'</div></div><small>'+(total?((amount/total)*100).toFixed(1):'0.0')+'% of total</small></article>';
  }
  function costContextValue(label,value,id,explanation){
    return '<div><div class="wc-profile-context-label"><span>'+escapeHtml(label)+'</span><span class="wc-profile-context-tooltip"><button type="button" aria-label="How '+escapeHtml(label.toLowerCase())+' is calculated" aria-describedby="'+id+'">i</button><span class="wc-profile-context-tooltip-text" id="'+id+'" role="tooltip">'+escapeHtml(explanation)+'</span></span></div><strong>'+value+'</strong></div>';
  }
  function departmentFundingBuckets(rows){
    var buckets={};
    function add(label,amount,explanation){
      if(!buckets[label]) buckets[label]={label:label,amount:0,explanation:explanation};
      buckets[label].amount+=Math.abs(Number(amount)||0);
    }
    (rows||[]).forEach(function(row){
      var name=String(row.Revenue_Name||'');
      var type=String(row.Revenue_Type||'');
      var amount=row.FY2027_Proposed;
      if(/ad valorem taxes/i.test(name)) return;
      if(/tourist development|tdc public safety/i.test(name)) add('Visitor-funded revenue',amount,'Tourist Development Tax and related reimbursements are supported by taxes collected from short-term lodging stays.');
      else if(/local government 1\/2 cent sales tax|discretionary sales surtax/i.test(name)) add('Sales-tax revenue',amount,'Assigned local sales-tax revenue. Sales taxes are paid through taxable purchases made by residents and visitors.');
      else if(/fuel tax/i.test(name)) add('Fuel-tax revenue',amount,'Constitutional, county, municipal, voted, or local-option fuel taxes assigned to this department.');
      else if(/permits fees|charges for services|fines and forfeits/i.test(type)||/fees?|charges?|fines?|rentals?/i.test(name)) add('Fees and service charges',amount,'Fees, permits, fines, rentals, or service charges paid by users of a regulated activity or County service.');
      else if(/grant/i.test(name)) add('Grant funding',amount,'State or federal grant revenue assigned to this department.');
      else if(/interfund group transfer|balance brought forward/i.test(name)||/other sources/i.test(type)) add('Transfers and prior resources',amount,'Transfers from another County fund or accumulated resources carried forward for an authorized use.');
      else if(/indirect administrative fees/i.test(name)) add('Internal administrative fees',amount,'Charges allocated to other County funds for central administrative support.');
      else if(/intergovernmental revenues/i.test(type)) add('State and shared revenue',amount,'State-shared or other intergovernmental revenue assigned to this department.');
      else add('Other non-property revenue',amount,'Other assigned revenue that does not come from ad valorem property taxes.');
    });
    return Object.keys(buckets).map(function(label){return buckets[label];}).filter(function(item){return item.amount>0;}).sort(function(a,b){return b.amount-a.amount;});
  }
  function retainBudgetRows(root,allowed){
    root.querySelectorAll('tbody tr').forEach(function(row){
      if(row.classList.contains('wc-table-total-row')){row.remove();return;}
      var cell=row.querySelector('.wc-category-column')||row.cells[0];
      var category=normalize(cell&&cell.textContent);
      if(!allowed(category)) row.remove();
    });
  }
  function addBudgetTotals(root){
    root.querySelectorAll('table').forEach(function(table){
      var body=table.tBodies[0],headers=Array.prototype.slice.call(table.querySelectorAll('thead th'));
      if(!body||!headers.length) return;
      var firstNumber=headers.findIndex(function(header){return header.classList.contains('wc-num');});
      if(firstNumber<0) firstNumber=1;
      var rows=Array.prototype.slice.call(body.rows).filter(function(row){return !row.classList.contains('wc-table-total-row');});
      function cellAmount(cell){var text=String(cell&&cell.textContent||'').trim();var negative=/^\(.*\)$/.test(text)||text.charAt(0)==='-';var value=Number(text.replace(/[^0-9.]/g,''))||0;return negative?-value:value;}
      var totals=headers.slice(firstNumber).map(function(_,offset){return rows.reduce(function(total,row){return total+cellAmount(row.cells[firstNumber+offset]);},0);});
      var tr=document.createElement('tr');
      tr.className='wc-table-total-row';
      tr.innerHTML='<td colspan="'+firstNumber+'">Total</td>'+totals.map(function(total,index){
        var header=headers[firstNumber+index];
        return '<td class="'+escapeHtml(header&&header.className?header.className:'wc-num')+'">'+money(total)+'</td>';
      }).join('');
      body.appendChild(tr);
    });
  }
  function enhanceFinanceSheets(expenseQuestion,revenueQuestion,capitalQuestion,attempt){
    attempt=attempt||0;
    var expenseMount=document.getElementById('department-expense-table');
    var button=expenseMount&&expenseMount.querySelector('.wc-view-budget-lines-toggle');
    var detail=button&&document.getElementById(button.dataset.target);
    if(!expenseMount||!button||!detail){if(attempt<40) window.setTimeout(function(){enhanceFinanceSheets(expenseQuestion,revenueQuestion,capitalQuestion,attempt+1);},75);return;}
    if(expenseMount.dataset.profileEnhanced==='true') return;
    expenseMount.dataset.profileEnhanced='true';expenseMount.classList.add('wc-profile-finance-enhanced');
    button.dataset.closedLabel='View Budget Sheet';button.dataset.openLabel='Hide Budget Sheet';button.textContent='View Budget Sheet';
    var capitalDetail=detail.cloneNode(true);capitalDetail.id=detail.id+'-capital';capitalDetail.hidden=true;
    retainBudgetRows(detail,function(category){return category==='personnel services'||category==='operating expenditures';});
    retainBudgetRows(capitalDetail,function(category){return category==='capital outlay';});
    capitalDetail.querySelectorAll('.wc-budget-line-zero-current').forEach(function(row){row.classList.remove('wc-budget-line-zero-current');});
    addBudgetTotals(detail);addBudgetTotals(capitalDetail);
    var capitalBody=capitalQuestion&&capitalQuestion.querySelector('.wc-simple-disclosure-body');
    if(capitalBody){
      var footer=document.createElement('div');footer.className='wc-finance-card-footer';footer.innerHTML='<button type="button" class="wc-view-budget-lines-toggle" data-target="'+capitalDetail.id+'" data-closed-label="View Budget Sheet" data-open-label="Hide Budget Sheet" aria-expanded="false">View Budget Sheet</button>';
      capitalBody.appendChild(footer);capitalBody.appendChild(capitalDetail);
    }
    var changeLinks=document.querySelector('[data-profile-change-sheet-links]');
    if(changeLinks) changeLinks.innerHTML='<button type="button" class="wc-view-budget-lines-toggle" data-target="'+escapeHtml(detail.id)+'" data-closed-label="View Operating Budget Sheet" data-open-label="Hide Operating Budget Sheet" aria-expanded="false">View Operating Budget Sheet</button><button type="button" class="wc-view-budget-lines-toggle" data-target="'+escapeHtml(capitalDetail.id)+'" data-closed-label="View Capital Budget Sheet" data-open-label="Hide Capital Budget Sheet" aria-expanded="false">View Capital Budget Sheet</button>';
    var revenueMount=document.getElementById('department-revenue-table');
    if(revenueMount){revenueMount.classList.add('wc-profile-finance-enhanced');var revenueButton=revenueMount.querySelector('.wc-view-budget-lines-toggle');if(revenueButton){revenueButton.dataset.closedLabel='View Revenue Sheet';revenueButton.dataset.openLabel='Hide Revenue Sheet';revenueButton.textContent='View Revenue Sheet';}}
    var utilityMount=document.getElementById('department-building-construction-tables');
    if(utilityMount&&utilityMount.textContent.trim()){
      utilityMount.classList.add('wc-profile-finance-enhanced');
      var utilityButton=utilityMount.querySelector('.wc-view-budget-lines-toggle');
      if(utilityButton){utilityButton.dataset.closedLabel='View Utilities Sheet';utilityButton.dataset.openLabel='Hide Utilities Sheet';utilityButton.textContent='View Utilities Sheet';}
    }
    document.querySelectorAll('.wc-profile-questions .wc-data-updated-note').forEach(function(note){note.remove();});
  }
  function renderStaffingProfile(rows,attempt){
    attempt=attempt||0;
    var mount=document.getElementById('department-staffing-table');
    if(!mount) return;
    if(!mount.querySelector('.wc-finance-card')&&attempt<40){window.setTimeout(function(){renderStaffingProfile(rows,attempt+1);},75);return;}
    var years=['2024','2025','2026','2027'];
    var grouped=[];
    (rows||[]).forEach(function(row){
      var name=row.Position_Name||'Position';
      var item=grouped.find(function(group){return group.name===name;});
      if(!item){item={name:name,'2024':0,'2025':0,'2026':0,'2027':0};grouped.push(item);}
      years.forEach(function(year){item[year]+=Number(row[year])||0;});
    });
    grouped.sort(function(a,b){return (Number(b['2027'])||0)-(Number(a['2027'])||0)||a.name.localeCompare(b.name);});
    var totals={'2024':0,'2025':0,'2026':0,'2027':0};
    grouped.forEach(function(item){years.forEach(function(year){totals[year]+=item[year];});});
    var change=totals['2027']-totals['2026'];
    var max=Math.max.apply(null,grouped.map(function(item){return item['2027'];}).concat([0]));
    var roster=grouped.map(function(item){var width=max?Math.max(2,item['2027']/max*100):0;return '<div class="wc-finance-card-row"><div class="wc-finance-card-row-head"><strong>'+escapeHtml(item.name)+'</strong><span>'+item['2027'].toLocaleString('en-US',{maximumFractionDigits:2})+' FTE</span></div><div class="wc-finance-card-track" aria-hidden="true"><span style="width:'+width.toFixed(2)+'%"></span></div></div>';}).join('');
    var tableRows=grouped.map(function(item){return '<tr><td>'+escapeHtml(item.name)+'</td>'+years.map(function(year){return '<td class="wc-num">'+item[year].toLocaleString('en-US',{maximumFractionDigits:2})+'</td>';}).join('')+'</tr>';}).join('');
    tableRows+='<tr class="wc-table-total-row"><td>Total FTE</td>'+years.map(function(year){return '<td class="wc-num">'+totals[year].toLocaleString('en-US',{maximumFractionDigits:2})+'</td>';}).join('')+'</tr>';
    var changeClass=change>0?'is-up':change===0?'is-flat':'is-down';
    mount.hidden=false;
    mount.innerHTML='<section class="wc-finance-card wc-profile-staffing-card"><div class="wc-finance-card-head"><div><p class="wc-finance-card-kicker">Authorized positions</p><strong class="wc-finance-card-total">'+totals['2027'].toLocaleString('en-US',{maximumFractionDigits:2})+' FTE</strong><span class="wc-finance-card-subtitle">Full-time equivalent positions</span></div><div class="wc-profile-staffing-change '+changeClass+'"><em>FTE change</em>'+(change===0?'Unchanged':(change>0?'+':'−')+Math.abs(change).toLocaleString('en-US',{maximumFractionDigits:2})+' FTE')+'</div></div><div class="wc-finance-card-breakdown">'+roster+'</div><div class="wc-finance-card-footer"><button type="button" class="wc-view-budget-lines-toggle" data-target="wc-profile-personnel-sheet" data-closed-label="View Personnel Sheet" data-open-label="Hide Personnel Sheet" aria-expanded="false">View Personnel Sheet</button></div><div class="wc-budget-lines-detail wc-budget-lines-card" id="wc-profile-personnel-sheet" hidden><div class="wc-data-table-scroll"><table class="wc-data-table wc-staffing-table"><thead><tr><th>Position Name</th><th class="wc-num">FY 2024</th><th class="wc-num">FY 2025</th><th class="wc-num">FY 2026</th><th class="wc-num">Proposed</th></tr></thead><tbody>'+tableRows+'</tbody></table></div></div></section>';
  }
  function renderPerformanceProfile(rows,attempt){
    attempt=attempt||0;
    var mount=document.getElementById('department-performance-table');
    if(!mount) return;
    if(!mount.textContent.trim()&&attempt<40){window.setTimeout(function(){renderPerformanceProfile(rows,attempt+1);},75);return;}
    if(!rows.length){mount.hidden=false;mount.innerHTML='<p class="wc-profile-no-measures">No department performance measures were supplied in the published budget data.</p>';return;}
    var goals=rows.map(function(row){return row.Goal||'';}).filter(function(goal,index,all){return goal&&all.indexOf(goal)===index;});
    var history=[['2022','Actual_2022'],['2023','Actual_2023'],['2024','Actual_2024'],['2025','Actual_2025'],['Current projection','Projected_2026']];
    mount.hidden=false;
    mount.innerHTML=(goals.length===1?'<div class="wc-profile-performance-goal"><span>Department goal</span><strong>'+escapeHtml(goals[0])+'</strong></div>':'')+'<div class="wc-profile-performance-list">'+rows.map(function(row){
      var values=history.filter(function(item){return row[item[1]]!==''&&row[item[1]]!=null;}).map(function(item){return '<span>'+escapeHtml(item[0])+': <b>'+escapeHtml(row[item[1]])+'</b></span>';}).join('');
      return '<article class="wc-profile-performance-item"><div><h3>'+escapeHtml(row.Measure||'Performance measure')+'</h3></div><div class="wc-profile-performance-target"><span>Proposed target</span><strong>'+escapeHtml(row.Projected_2027||'Not listed')+'</strong></div>'+((row.Objective||values)?'<details class="wc-profile-performance-history"><summary>View context and history +</summary><div>'+(row.Objective?'<p><span>Objective</span>'+escapeHtml(row.Objective)+'</p>':'')+(values?'<div class="wc-profile-performance-values">'+values+'</div>':'')+'</div></details>':'')+'</article>';
    }).join('')+'</div>';
  }

  function render(){
    var eyebrow=document.querySelector('.page-eyebrow');
    var title=document.querySelector('.page-title');
    if(!eyebrow||!title||normalize(eyebrow.textContent)!=='departments') return;
    if(!window.__wcDepartmentServiceDataReady&&window.WCBudgetData&&typeof window.WCBudgetData.loadBudgetData==='function'){
      if(window.__wcDepartmentServiceDataPending) return;
      window.__wcDepartmentServiceDataPending=true;
      window.WCBudgetData.loadBudgetData().then(function(data){
        window.__wcDepartmentServiceData=data;
        window.__wcDepartmentServiceDataReady=true;
        render();
      }).catch(function(){
        window.__wcDepartmentServiceDataReady=true;
        render();
      });
      return;
    }
    var key=normalize(title.textContent);
    var services=SERVICES[key];
    if(!services) return;
    var challenge=challengeFor(key);
    if(document.querySelector('.wc-board-department-profile')){
      document.body.classList.remove('wc-board-department-loading');
      var existingMain=document.querySelector('main#content');
      if(existingMain) existingMain.removeAttribute('aria-busy');
      return;
    }

    var narrative=document.getElementById('department-narrative');
    var functionSection=narrative&&narrative.querySelector('.statement-of-function');
    if(narrative&&!functionSection&&narrative.querySelector('.wc-data-loading')){
      window.setTimeout(render,80);
      return;
    }
    if(!functionSection&&narrative){
      var existingNarrativeNodes=Array.prototype.slice.call(narrative.childNodes);
      functionSection=document.createElement('section');
      functionSection.className='statement-of-function content-section';
      functionSection.innerHTML='<h2>Function and Services</h2>';
      narrative.innerHTML='';
      existingNarrativeNodes.forEach(function(node){functionSection.appendChild(node);});
      narrative.appendChild(functionSection);
    }
    if(!functionSection) return;
    functionSection.classList.add('wc-dept-function-services');
    var functionHeading=functionSection.querySelector('h2');
    if(functionHeading){
      functionHeading.textContent='Statement of Function';
      functionHeading.id='wc-dept-function-services-title';
    }
    var mediaWrapper=narrative&&narrative.parentElement;
    var supportingMedia=[];
    if(mediaWrapper){
      Array.prototype.forEach.call(mediaWrapper.children,function(child){
        if(child===narrative) return false;
        if(child.matches&&child.matches('.wc-video-frame,.extension-video-frame,.mosquito-video-frame,.libraries-video-frame,figure,a[class*="iframe-link"]')) supportingMedia.push(child);
      });
    }
    document.querySelectorAll('main#content > a.libraries-iframe-link,main#content > a.environmental-iframe-link,main#content > a.public-works-iframe-link,main#content > a.lifeguard-iframe-link,main#content > .recreation-parks-section').forEach(function(item){
      if(supportingMedia.indexOf(item)===-1) supportingMedia.push(item);
    });
    if(supportingMedia.length&&functionHeading){
      functionSection.classList.add('wc-dept-function-services--with-video','wc-dept-video-right');
      if(mediaWrapper) mediaWrapper.classList.add('wc-dept-statement-flow');
      var mediaRail=document.createElement('aside');
      mediaRail.className='wc-dept-supporting-media';
      mediaRail.setAttribute('aria-label','Department media and resources');
      supportingMedia.forEach(function(item){mediaRail.appendChild(item);});
      functionHeading.insertAdjacentElement('afterend',mediaRail);
    }
    var serviceSection=document.createElement('section');
    serviceSection.className='wc-dept-services wc-profile-services-section';
    serviceSection.innerHTML='<h2 class="wc-profile-section-title">Core services</h2><div class="wc-dept-services-grid">'+services.map(function(service,index){return '<article>'+serviceIcon(index)+'<div><h3>'+escapeHtml(service[0])+'</h3><p>'+escapeHtml(service[1])+'</p></div></article>';}).join('')+'</div>';
    functionSection.insertAdjacentElement('afterend',serviceSection);

    var data=window.__wcDepartmentServiceData||{};
    var expenses=window.WCBudgetData.getDepartmentExpenses(title.textContent.trim())||[];
    var revenues=window.WCBudgetData.getDepartmentRevenues(title.textContent.trim())||[];
    var staffing=window.WCBudgetData.getDepartmentStaffing(title.textContent.trim())||[];
    var performanceRows=window.WCBudgetData.getDepartmentPerformanceMeasures(title.textContent.trim())||[];
    var budget=sum(expenses,'FY2027_Proposed');
    var priorBudget=sum(expenses,'FY2026_Original_Budget');
    var budgetChange=budget-priorBudget;
    var fte=sum(staffing,'2027');
    var priorFte=sum(staffing,'2026');
    var fteChange=fte-priorFte;
    var fundCodes=[];
    expenses.forEach(function(row){var code=String(row.Fund_Code||row.Dept_Code||'').trim().slice(0,3);if(code&&fundCodes.indexOf(code)===-1) fundCodes.push(code);});
    var fundNames=fundCodes.map(function(code){var match=(data.funds||[]).find(function(fund){return String(fund.Fund_Code||'').trim()===code;});return match&&match.Fund_Name?match.Fund_Name:'Fund '+code;});
    var snapshot=document.createElement('section');
    snapshot.className='wc-profile-snapshot wc-board-department-profile';
    snapshot.innerHTML='<div class="wc-profile-snapshot-label">'+icon('snapshot')+'<h2>Department<br>Snapshot</h2></div><dl><div><dt>Budget</dt><dd>'+compactMoney(budget)+'<small class="'+(budgetChange>0?'is-up':budgetChange<0?'is-down':'')+'">'+(budgetChange>0?'+':budgetChange<0?'−':'')+compactMoney(Math.abs(budgetChange))+(priorBudget?' ('+(budgetChange/priorBudget*100).toFixed(1)+'%)':'')+'</small></dd></div><div><dt>Fund</dt><dd>'+escapeHtml(fundNames.join(', ')||'Not listed')+'</dd></div><div><dt>Authorized Positions</dt><dd>'+fte.toLocaleString('en-US',{maximumFractionDigits:2})+' FTE<small class="'+(fteChange>0?'is-up':fteChange<0?'is-down':'')+'">'+(fteChange===0?'Unchanged':(fteChange>0?'+':'−')+Math.abs(fteChange).toLocaleString('en-US',{maximumFractionDigits:2})+' FTE')+'</small></dd></div><div><dt>Oversight</dt><dd>Board of County Commissioners</dd></div></dl>';
    var mainContent=document.querySelector('main#content');
    var statementAnchor=mediaWrapper&&mediaWrapper!==mainContent?mediaWrapper:narrative;
    statementAnchor.insertAdjacentElement('afterend',snapshot);

    var expenseQuestion=configureExistingQuestion('department-expense-table','What does this department cost?','cost');
    var revenueQuestion=configureExistingQuestion('department-revenue-table','How is this department funded?','funding');
    var performanceQuestion=configureExistingQuestion('department-performance-table','How is this department held accountable?','accountable');
    var staffingQuestion=configureExistingQuestion('department-staffing-table','Who does the work?','staffing');
    var group=expenseQuestion&&expenseQuestion.closest('.wc-department-questions');
    if(!group){group=document.createElement('section');group.className='wc-department-questions';snapshot.insertAdjacentElement('afterend',group);}
    group.classList.add('wc-profile-questions');
    group.setAttribute('aria-label','Citizen questions');
    if(!group.querySelector(':scope>.wc-profile-section-title')) group.insertAdjacentHTML('afterbegin','<h2 class="wc-profile-section-title">Citizen questions</h2>');
    [expenseQuestion,revenueQuestion].forEach(function(item){if(item) group.appendChild(item);});

    var isBuildingConstruction=key==='building construction and maintenance';
    var recurringSpecs=[
      {label:'Personnel',predicate:function(row){return row.Object_Type==='Personnel Services';}},
      {label:'Operating',predicate:function(row){return row.Object_Type==='Operating Expenditures'&&(!isBuildingConstruction||String(row.Object_Code||'').trim()!=='543000');}}
    ];
    if(isBuildingConstruction) recurringSpecs.push({label:'Utilities',predicate:function(row){return String(row.Object_Code||'').trim()==='543000';}});
    var recurringGroups=recurringSpecs.map(function(spec){var rows=expenses.filter(spec.predicate);return {label:spec.label,amount:sum(rows,'FY2027_Proposed'),prior:sum(rows,'FY2026_Original_Budget')};});
    var recurringTotal=recurringGroups.reduce(function(total,item){return total+item.amount;},0);
    var expenseBody=expenseQuestion&&expenseQuestion.querySelector('.wc-simple-disclosure-body');
    if(expenseBody){
      var householdCount=34362;
      var monthlyOperating=recurringTotal/12;
      var annualHousehold=householdCount?recurringTotal/householdCount:0;
      var monthlyHousehold=annualHousehold/12;
      function preciseMoney(value){return Number(value||0).toLocaleString('en-US',{style:'currency',currency:'USD',minimumFractionDigits:2,maximumFractionDigits:2});}
      var contextHtml;
      if(key==='code compliance'){
        var feeRevenue=sum(revenues.filter(function(row){return /permits fees|charges for services|fines and forfeits/i.test(String(row.Revenue_Type||''));}),'FY2027_Proposed');
        var visitorRevenue=sum(revenues.filter(function(row){return /tdc public safety reimbursements/i.test(String(row.Revenue_Name||''));}),'FY2027_Proposed');
        var propertyTaxRevenue=sum(revenues.filter(function(row){return /ad valorem taxes/i.test(String(row.Revenue_Name||''));}),'FY2027_Proposed');
        var propertyTaxHousehold=householdCount?propertyTaxRevenue/householdCount:0;
        contextHtml='<section class="wc-profile-cost-context"><h3>Putting the cost in context</h3><div class="wc-profile-context-grid">'+
          costContextValue('Annual operating cost',money(recurringTotal),'wcAnnualOperatingTip','Personnel and operating expenditures are added together. One-time capital outlay is excluded.')+
          costContextValue('Fees and fines',money(feeRevenue),'wcCodeFeesTip','Proposed permit fees, service charges, code-enforcement fees, and ordinance fines assigned to Code Compliance are added together. These revenues are paid by the people or businesses using a regulated activity or receiving the related service—not evenly by every household.')+
          costContextValue('Visitor-funded reimbursement',money(visitorRevenue),'wcCodeVisitorTip','Tourist Development Tax public-safety reimbursement budgeted for Code Compliance. Tourist Development Tax is collected from short-term lodging stays and is therefore visitor-funded.')+
          costContextValue('Property-tax support per household',preciseMoney(propertyTaxHousehold),'wcCodeHouseholdTip','The '+money(propertyTaxRevenue)+' in proposed ad valorem revenue assigned to Code Compliance is divided by 34,362 Walton County households. This is a cost equivalent, not an individual household tax bill.')+
          '</div><p>Code Compliance is funded primarily through permits, service charges, fines, and visitor-funded Tourist Development Tax reimbursement. The household figure therefore uses only the department’s proposed property-tax support—not its entire operating budget.</p></section>';
      }else{
        var assignedPropertyTax=sum(revenues.filter(function(row){return /ad valorem taxes/i.test(String(row.Revenue_Name||''));}),'FY2027_Proposed');
        var fundingBuckets=departmentFundingBuckets(revenues);
        var nonPropertySupport=fundingBuckets.reduce(function(total,item){return total+item.amount;},0);
        var listedRevenue=assignedPropertyTax+nonPropertySupport;
        var mixedFunding=nonPropertySupport>0&&(!listedRevenue||nonPropertySupport/listedRevenue>=.05);
        if(mixedFunding){
          var primaryFunding=fundingBuckets[0];
          var propertyTaxHousehold=householdCount?assignedPropertyTax/householdCount:0;
          contextHtml='<section class="wc-profile-cost-context"><h3>Putting the cost in context</h3><div class="wc-profile-context-grid">'+
            costContextValue('Annual operating cost',money(recurringTotal),'wcAnnualOperatingTip','Personnel, operating, and any separately displayed recurring utility costs are added together. One-time capital outlay is excluded.')+
            costContextValue(primaryFunding.label,money(primaryFunding.amount),'wcPrimaryFundingTip',primaryFunding.explanation)+
            costContextValue('Assigned property-tax support',money(assignedPropertyTax),'wcPropertyTaxSupportTip',assignedPropertyTax?'Ad valorem property-tax revenue assigned to this department in the proposed budget. Other funding sources are not included in this amount.':'No ad valorem property-tax revenue is assigned directly to this department in the proposed budget.')+
            costContextValue('Property-tax support per household',preciseMoney(propertyTaxHousehold),'wcPropertyHouseholdTip','Assigned property-tax support is divided by 34,362 Walton County households. This is a cost equivalent, not an estimate of an individual household tax bill.')+
            '</div></section>';
        }else{
          contextHtml='<section class="wc-profile-cost-context"><h3>Putting the cost in context</h3><div class="wc-profile-context-grid">'+
            costContextValue('Annual operating cost',money(recurringTotal),'wcAnnualOperatingTip','Personnel, operating, and any separately displayed recurring utility costs are added together. One-time capital outlay is excluded.')+
            costContextValue('Monthly countywide cost',money(monthlyOperating),'wcMonthlyOperatingTip','The annual operating cost of '+money(recurringTotal)+' is divided by 12 months.')+
            costContextValue('Annual per household',preciseMoney(annualHousehold),'wcAnnualHouseholdTip','The annual operating cost is divided by 34,362 Walton County households. This is a cost equivalent, not an estimate of an individual household tax bill.')+
            costContextValue('Monthly per household',preciseMoney(monthlyHousehold),'wcMonthlyHouseholdTip','The annual household cost equivalent of '+preciseMoney(annualHousehold)+' is divided by 12 months.')+
            '</div><p>Household equivalents use 34,362 Walton County households from U.S. Census Bureau statistics. They describe the scale of the department budget and do not represent a bill sent to each household.</p></section>';
        }
      }
      expenseBody.insertAdjacentHTML('afterbegin','<div class="wc-profile-finance-overview">'+recurringGroups.map(function(item){return financeStat(item.label,item.amount,item.prior,recurringTotal);}).join('')+'</div>'+contextHtml);
      if(isBuildingConstruction){
        var utilityMount=document.getElementById('department-building-construction-tables');
        if(utilityMount){utilityMount.classList.add('wc-profile-utility-sheet');expenseBody.appendChild(utilityMount);}
      }
    }

    var capital=sum(expenses.filter(function(row){return row.Object_Type==='Capital Outlay';}),'FY2027_Proposed');
    var capitalPrior=sum(expenses.filter(function(row){return row.Object_Type==='Capital Outlay';}),'FY2026_Original_Budget');
    var capitalQuestion=question('What capital investments are planned for this department?','<div class="wc-profile-finance-overview wc-profile-capital-overview">'+financeStat('Capital Outlay',capital,capitalPrior,capital)+'</div><p class="wc-profile-finance-note">'+(capital?'Capital funding is reserved for one-time equipment, facilities, or other long-lived assets.':'No capital outlay is proposed for this department.')+'</p>','capital');
    group.appendChild(capitalQuestion);
    var contracts=expenses.filter(function(row){return String(row.Contract_Status||'').trim()&&(Number(row.FY2027_Proposed)||0)!==0;});
    var contractTotal=sum(contracts,'FY2027_Proposed');
    var contractRows=contracts.length?'<div class="wc-profile-contract-list">'+contracts.map(function(row){
      var description=row.Note||row.Project_Name||row.Object_Name||'Contractual service';
      var reference=[row.Vendor?'<span><b>Provider:</b> '+escapeHtml(row.Vendor)+'</span>':'',row.Contract_No?'<span><b>Contract:</b> '+escapeHtml(row.Contract_No)+'</span>':'',row.Contract_Status?'<span><b>Status:</b> '+escapeHtml(row.Contract_Status)+'</span>':''].filter(Boolean).join('');
      var document=row.Contract_Link?'<a href="'+escapeHtml(row.Contract_Link)+'" target="_blank" rel="noopener noreferrer">View contract or agreement <span aria-hidden="true">&nearr;</span></a>':'<small>Contract or agreement link not provided in the published source data.</small>';
      return '<article><div class="wc-profile-contract-head"><strong>'+escapeHtml(description)+'</strong><em>'+money(row.FY2027_Proposed)+'</em></div>'+(reference?'<div class="wc-profile-contract-meta">'+reference+'</div>':'')+document+'</article>';
    }).join('')+'</div>':'';
    group.appendChild(question('What contractual services does this department use?','<div class="wc-profile-contract-summary"><div class="wc-profile-contract-total"><span>Proposed contractual services</span><strong>'+money(contractTotal)+'</strong></div><div class="wc-profile-contract-copy"><p>'+(contracts.length?contracts.length+' contractual service'+(contracts.length===1?' is':'s are')+' identified in the department budget.':'No contractual services are identified for this department.')+'</p>'+contractRows+'<a href="summary-of-contractual-services.html">View countywide contractual services</a></div></div>','contracts'));
    if(revenueQuestion){
      var revenueGroups=[];
      revenues.forEach(function(row){var label=row.Revenue_Name||row.Revenue_Type||'Other funding';var item=revenueGroups.find(function(groupItem){return groupItem.label===label;});if(!item){item={label:label,amount:0,prior:0};revenueGroups.push(item);}item.amount+=Math.abs(Number(row.FY2027_Proposed)||0);item.prior+=Math.abs(Number(row.FY2026_Original_Budget)||0);});
      revenueGroups=revenueGroups.filter(function(item){return item.amount>0;});
      var revenueTotal=revenueGroups.reduce(function(total,item){return total+item.amount;},0);
      var revenueBody=revenueQuestion.querySelector('.wc-simple-disclosure-body');
      if(revenueBody&&revenueGroups.length) revenueBody.insertAdjacentHTML('afterbegin','<div class="wc-profile-finance-overview wc-profile-revenue-overview">'+revenueGroups.map(function(item){return financeStat(item.label,item.amount,item.prior,revenueTotal);}).join('')+'</div>');
      group.appendChild(revenueQuestion);
    }
    group.appendChild(question('What county services does this department provide?','<div class="wc-profile-answer"><ul>'+services.map(function(service){return '<li><strong>'+escapeHtml(service[0])+'.</strong> '+escapeHtml(service[1])+'</li>';}).join('')+'</ul></div>','services'));
    group.appendChild(question('Are services being added to this department?','<div class="wc-profile-answer"><strong>No new services are being added.</strong><p>The budget continues the department&rsquo;s existing responsibilities. Changes in funding, staffing, workload, or delivery do not by themselves create a new service.</p></div>','added'));
    group.appendChild(question('Does this department collaborate with other departments?','<div class="wc-profile-answer"><strong>Yes. This department works within the County organization.</strong><p>Board departments coordinate through shared budget, purchasing, human-resources, legal, technology, capital-planning, and administrative processes. Operational partnerships vary with the work being performed.</p></div>','collaborate'));
    if(performanceQuestion){
      var performanceBody=performanceQuestion.querySelector('.wc-simple-disclosure-body');
      if(performanceBody) performanceBody.insertAdjacentHTML('afterbegin','<dl class="wc-profile-accountability"><div><dt>Oversight and review</dt><dd>Work is reviewed through Board oversight, budget monitoring, adopted policies, public meetings, and financial reporting.</dd></div><div><dt>Countywide coordination</dt><dd>The department coordinates with other County functions when its work requires shared staff, systems, purchasing, legal, technology, or capital support.</dd></div><div><dt>Measurable results</dt><dd>'+(performanceRows.length?'Published measures include prior results and proposed targets so progress can be evaluated over time.':'No department performance measures were supplied in the published budget data.')+'</dd></div></dl>');
      group.appendChild(performanceQuestion);
    }
    if(staffingQuestion) group.appendChild(staffingQuestion);
    var changes=expenses.map(function(row){var current=Number(row.FY2027_Proposed)||0,prior=Number(row.FY2026_Original_Budget)||0;return {code:String(row.Object_Code||''),name:row.Object_Name||'Budget line',type:row.Object_Type||'',diff:current-prior,prior:prior,current:current};}).filter(function(item){return item.diff!==0&&!/salar(?:y|ies)/i.test(item.name);}).sort(function(a,b){return Math.abs(b.diff)-Math.abs(a.diff);}).slice(0,3);
    group.appendChild(question('What is changing?','<div class="wc-profile-answer wc-profile-change-answer"><p>The department budget is '+(budgetChange>0?'increasing':budgetChange<0?'decreasing':'unchanged')+' by '+money(Math.abs(budgetChange))+(priorBudget?' ('+Math.abs(budgetChange/priorBudget*100).toFixed(1)+'%)':'')+'.</p><h3 class="wc-profile-change-title">Largest object-code changes</h3><div class="wc-profile-object-change-list">'+changes.map(function(item){return '<div class="wc-profile-object-change"><div><span>Object '+escapeHtml(item.code)+' &middot; '+escapeHtml(item.type)+'</span><strong>'+escapeHtml(item.name)+'</strong></div><div class="wc-profile-object-change-value '+(item.diff>0?'is-up':'is-down')+'">'+(item.diff>0?'+':'−')+money(Math.abs(item.diff))+'<small>'+money(item.prior)+' &rarr; '+money(item.current)+'</small></div></div>';}).join('')+'</div><div class="wc-profile-change-sheet-links" data-profile-change-sheet-links></div></div>','changing'));
    group.appendChild(question('What challenges does this department face?','<div class="wc-profile-answer"><p>'+escapeHtml(challenge)+'</p></div>','challenges'));
    enhanceFinanceSheets(expenseQuestion,revenueQuestion,capitalQuestion);
    renderStaffingProfile(staffing);
    renderPerformanceProfile(performanceRows);
    document.body.classList.remove('wc-board-department-loading');
    var profileMain=document.querySelector('main#content');
    if(profileMain) profileMain.removeAttribute('aria-busy');
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',function(){setTimeout(render,0);},{once:true});
  else setTimeout(render,0);
})();
