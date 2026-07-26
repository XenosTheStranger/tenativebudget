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

  function answerRow(question,answer,status){
    return '<div class="wc-dept-gfoa-row"><dt>'+question+'</dt><dd><span class="wc-dept-gfoa-status '+status+'">'+(status==='is-complete'?'Answered':'Disclosed')+'</span>'+answer+'</dd></div>';
  }

  function render(){
    var eyebrow=document.querySelector('.page-eyebrow');
    var title=document.querySelector('.page-title');
    if(!eyebrow||!title||normalize(eyebrow.textContent)!=='departments') return;
    if(!window.__wcDepartmentServiceDataReady&&window.WCBudgetData&&typeof window.WCBudgetData.loadBudgetData==='function'){
      if(window.__wcDepartmentServiceDataPending) return;
      window.__wcDepartmentServiceDataPending=true;
      window.WCBudgetData.loadBudgetData().then(function(){
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
    if(document.querySelector('.wc-dept-services')) return;

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
      functionHeading.textContent='Function and Services';
      functionHeading.id='wc-dept-function-services-title';
    }
    var mediaWrapper=narrative&&narrative.parentElement;
    var directVideo=null;
    if(mediaWrapper){
      directVideo=Array.prototype.find.call(mediaWrapper.children,function(child){
        return child.classList&&(child.classList.contains('wc-video-frame')||child.classList.contains('extension-video-frame')||child.classList.contains('mosquito-video-frame'));
      });
    }
    var videoFrame=directVideo||functionSection.querySelector('.libraries-video-frame');
    if(videoFrame&&functionHeading){
      var videoWasFirst=directVideo&&Array.prototype.indexOf.call(mediaWrapper.children,directVideo)<Array.prototype.indexOf.call(mediaWrapper.children,narrative);
      functionSection.classList.add('wc-dept-function-services--with-video',videoWasFirst?'wc-dept-video-left':'wc-dept-video-right');
      if(mediaWrapper) mediaWrapper.classList.add('wc-dept-statement-flow');
      functionHeading.insertAdjacentElement('afterend',videoFrame);
    }
    var serviceSection=document.createElement('div');
    serviceSection.className='wc-dept-services';
    serviceSection.innerHTML='<div class="wc-dept-services-grid">'+services.map(function(service){return '<article><h3>'+service[0]+'</h3><p>'+service[1]+'</p></article>';}).join('')+'</div><p class="wc-dept-service-note"><strong>Service:</strong> an ongoing function that produces a recognizable result; these explanatory groupings are not separate accounting cost centers. <strong>FY 2027:</strong> No new service is being added. <strong>Common challenge:</strong> '+challenge+'</p>';
    functionSection.appendChild(serviceSection);

    var performance=document.getElementById('department-performance-table');
    var hasMetrics=performance&&performance.textContent.trim()&&!/not available|no performance/i.test(performance.textContent);
    var review=document.createElement('details');
    review.className='wc-simple-disclosure wc-dept-gfoa';
    review.innerHTML='<summary><span class="wc-simple-disclosure-summary">GFOA department-budget answers<small>All 13 reviewer questions, answered for '+title.textContent.trim()+'</small></span></summary><div class="wc-simple-disclosure-body"><p class="wc-dept-gfoa-intro">This checklist points to the evidence on this page and states where department-specific source information is not available. It does not convert the three explanatory services into audited program cost centers.</p><dl class="wc-dept-gfoa-list">'+
      answerRow('What services does the department provide?','The three continuing services are listed above.','is-complete')+
      answerRow('How are programs and services defined?','A service is defined above. The budget does not maintain a separate program-cost allocation for these three explanatory groupings.','is-complete')+
      answerRow('Are goals set for each service area?',hasMetrics?'Department goals and measures are published under “How will we know the service is working?” They are department measures and are not allocated independently to all three services.':'No service-level goals were supplied in the published performance-measure data.','is-disclosed')+
      answerRow('Are services being added?','No. The FY 2027 tentative budget continues the department’s existing service responsibilities.','is-complete')+
      answerRow('What challenges is the department facing in providing service?',challenge+' This is general FY 2027 planning context, not a department-submitted challenge statement.','is-disclosed')+
      answerRow('What are the costs for the department?','Open “What does this service cost?” for the complete FY 2027 department total and category breakdown. Historical comparisons and individual account lines are available there on request. Costs are not allocated among the three explanatory services.','is-complete')+
      answerRow('How are costs measured?','Costs are recorded by fund, department, account, object code, and object type in the County budget data.','is-complete')+
      answerRow('What are the costs for personnel?','Personnel Services appears as a department expenditure category; position and staffing detail is available under “Who does the work?”','is-complete')+
      answerRow('What are the costs for contracted purchases?','Contractual Services appears as an expenditure category and can be opened to review its budget lines. Countywide contract detail is available in the Summary of Contractual Services.','is-complete')+
      answerRow('What are internal costs?','Interfund transfers are identified in the financial schedules. Internal service charges are not separately allocated to the three explanatory services.','is-disclosed')+
      answerRow('How is the department held accountable for results?',hasMetrics?'Published goals, measures, actual results, and FY 2027 targets provide the available accountability record; budget results are monitored during the year.':'The budget and staffing plan are monitored during the year, but department performance measures were not supplied in the published data.','is-disclosed')+
      answerRow('Does the department work with other departments?','Yes. Board departments operate within shared county budget, purchasing, human-resources, legal, technology, and administrative processes. Department-specific operational partnerships were not separately documented in the source material.','is-disclosed')+
      answerRow('Are metrics defined to determine success?',hasMetrics?'Yes. Open “How will we know the service is working?” for the metrics and targets supplied by the department.':'No department metrics were supplied in the published performance-measure data.','is-disclosed')+
      '</dl></div>';
    var questions=document.querySelectorAll('.wc-department-question');
    var anchor=questions.length?questions[questions.length-1]:functionSection;
    anchor.parentNode.insertBefore(review,anchor.nextSibling);
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',function(){setTimeout(render,0);},{once:true});
  else setTimeout(render,0);
})();
