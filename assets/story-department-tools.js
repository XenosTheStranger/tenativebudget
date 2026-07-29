(function(){
  "use strict";
  var dialog=document.getElementById("serviceBudgetDialog");
  var departmentList=document.querySelector("[data-service-departments]");
  if(!dialog||!departmentList||!window.WCBudgetData)return;
  function normalize(value){return String(value||"").toLowerCase().replace(/&/g,"and").replace(/[^a-z0-9]+/g," ").trim();}
  function escape(value){return String(value==null?"":value).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;").replace(/'/g,"&#039;");}
  function safeUrl(value){var url=String(value||"").trim();return /^(https?:|mailto:)/i.test(url)?url:"";}
  function narrativeHtml(value){var text=String(value||"");var pattern=/\[([^\[\]]+)\]\((https?:\/\/[^\s)]+|mailto:[^\s)]+)\)|(https?:\/\/[^\s<]+)/gi;var html="",last=0,match;while((match=pattern.exec(text))){html+=escape(text.slice(last,match.index));var label=match[1]||match[3];var url=safeUrl(match[2]||match[3]);html+=url?'<a href="'+escape(url)+'" target="_blank" rel="noopener noreferrer">'+escape(label)+'</a>':escape(label);last=pattern.lastIndex;}html+=escape(text.slice(last));return html.replace(/\r?\n/g,"<br>");}
  function money(value){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(Number(value)||0);}
  function amount(row){return Number(row.FY2027_Proposed)||0;}
  var VIDEOS={
    "planning":[["lKTWu2Q-6ug","Planning"]],
    "code compliance":[["Z78NL7Z-urs","Code Compliance"]],
    "emergency management":[["7arI_NS6Q2U","Emergency Management"]],
    "libraries":[["gJ7QNzqj8ks","Walton County Libraries"]],"county libraries":[["gJ7QNzqj8ks","Walton County Libraries"]],
    "eagle springs grill":[["a4VPeQNr1M8","Eagle Springs Grill"]],
    "eagle springs golf and recreation center":[["d4o7JNx6o4s","Eagle Springs Golf and Recreation Center"]],
    "veteran services":[["v4tpooBZoPs","Veteran Services"]],
    "extension office":[["ZNGKeoZlogc","Extension Office"]],
    "building department":[["3n4ns8jANzQ","Building Department"]],
    "public works":[["USzOdbzw-VI","Public Works"]],
    "solid waste":[["iz8DOXLQ8yU","Solid Waste"]],
    "building construction and maintenance":[["WJxzKl9sRNk","Building Construction and Maintenance"]],
    "recreation":[["ODzfUR4KX2o","Parks and Recreation"],["a0EncYxEueE","Parks and Recreation"],["hM4qZLBHpPc","Parks and Recreation"]],
    "mosquito control":[["U5q2lymuFys","Mosquito Control"]]
  };
  function videoFrame(video){return '<iframe src="https://www.youtube-nocookie.com/embed/'+encodeURIComponent(video[0])+'?autoplay=1&amp;mute=1&amp;controls=1&amp;modestbranding=1&amp;rel=0&amp;playsinline=1" title="'+escape(video[1])+' video" allow="autoplay; encrypted-media; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';}
  function renderMedia(key){var old=dialog.querySelector(".story-department-media");if(old)old.remove();var videos=VIDEOS[key];if(!videos||!videos.length)return;var media=document.createElement("section");media.className="story-department-media";media.innerHTML='<div class="story-department-video">'+videoFrame(videos[0])+'</div><div class="story-department-video-copy"><span>See the work</span><h3>Inside this department</h3><p>Watch how this department serves Walton County, then explore the budget and staffing details below.</p>'+(videos.length>1?'<div class="story-department-video-picker" aria-label="Choose a department video">'+videos.map(function(video,index){return '<button type="button" data-department-video="'+escape(video[0])+'" data-video-title="'+escape(video[1])+'" aria-pressed="'+(index===0)+'">Video '+(index+1)+'</button>';}).join("")+'</div>':"")+'</div>';var heading=dialog.querySelector(".story-data-dialog-heading");heading.insertAdjacentElement("afterend",media);}
  function table(headers,rows){return '<div class="wc-data-table-scroll"><table class="wc-data-table"><thead><tr>'+headers.map(function(h,index){return '<th'+(index===headers.length-1?' class="wc-num"':'')+'>'+escape(h)+"</th>";}).join("")+'</tr></thead><tbody>'+rows.join("")+'</tbody></table></div>';}
  function panel(id,label,html,active){return '<section class="story-department-tool-panel" data-department-tool-panel="'+id+'"'+(active?"":" hidden")+' aria-label="'+escape(label)+'">'+html+'</section>';}
  function buildTools(data,key){
    var expenses=(data.expenditures||[]).filter(function(row){return normalize(row.Dept_Name)===key&&amount(row)!==0;});
    if(!expenses.length)return;
    var staffing=(data.staffing||[]).filter(function(row){return normalize(row.Dept_Name)===key&&Number(row["2027"])!==0;});
    var performance=(data.performanceMeasures||[]).filter(function(row){return normalize(row.Dept_Name)===key&&(row.Measure||row.Objective);});
    var departmentName=dialog.querySelector("[data-service-dialog-title]").textContent.trim();
    var narrative=(data.departmentNarratives||[]).find(function(row){return normalize(row.Dept_Name)===key;});
    if(narrative&&narrative.Narrative)dialog.querySelector("[data-department-narrative]").innerHTML=narrativeHtml(narrative.Narrative);
    var personnelHtml=window.WCBudgetData.getDepartmentPersonnelCostDetail?window.WCBudgetData.getDepartmentPersonnelCostDetail(departmentName):"";
    var equipment=expenses.filter(function(row){return String(row.Object_Code||"").trim()==="564000";});
    var revenue=(data.revenues||[]).filter(function(row){return normalize(row.Dept_Name)===key&&(Number(row.FY2027_Proposed)||0)!==0;});
    var tools=[{id:"overview",label:"Overview",show:true}];
    tools.push({id:"budget",label:"Budget sheet",show:expenses.length>0});
    tools.push({id:"staffing",label:"Staffing sheet",show:staffing.length>0});
    tools.push({id:"personnel",label:"Personnel costs",show:Boolean(personnelHtml)});
    tools.push({id:"revenue",label:"Revenue sheet",show:revenue.length>0});
    tools.push({id:"performance",label:"Performance",show:performance.length>0});
    tools.push({id:"equipment",label:"Equipment",show:equipment.length>0});
    tools=tools.filter(function(tool){return tool.show;});
    var existing=dialog.querySelector(".story-department-tools");if(existing)existing.remove();
    var mount=document.createElement("div");mount.className="story-department-tools";
    mount.innerHTML='<div class="story-department-tool-tabs" role="tablist" aria-label="Department details">'+tools.map(function(tool,index){return '<button type="button" role="tab" data-department-tool="'+tool.id+'" aria-selected="'+(index===0)+'">'+escape(tool.label)+'</button>';}).join("")+'</div><div class="story-department-tool-panels">'+
      panel("overview","Overview",'<p class="story-tool-intro">Choose a detail above to examine the published schedules available for this department.</p>',true)+
      panel("budget","Budget sheet",table(["Spending area","Budget line","FY 2027"],expenses.slice().sort(function(a,b){return amount(b)-amount(a);}).map(function(row){return '<tr><td>'+escape(row.Object_Type||"Other")+'</td><td>'+escape(row.Note||row.Project_Name||row.Object_Name||row.Object_Code||"Budget item")+'</td><td>'+money(amount(row))+'</td></tr>';})),false)+
      panel("staffing","Staffing sheet",table(["Position","FY 2026","FY 2027"],staffing.map(function(row){return '<tr><td>'+escape(row.Position_Name||"Position")+'</td><td>'+escape(row["2026"]||0)+'</td><td>'+escape(row["2027"]||0)+'</td></tr>';})),false)+
      panel("personnel","Personnel costs",personnelHtml,false)+
      panel("revenue","Revenue sheet",table(["Revenue source","FY 2027"],revenue.slice().sort(function(a,b){return (Number(b.FY2027_Proposed)||0)-(Number(a.FY2027_Proposed)||0);}).map(function(row){return '<tr><td>'+escape(row.Revenue_Name||row.Revenue_Type||row.Revenue_Code||"Revenue")+'</td><td>'+money(row.FY2027_Proposed)+'</td></tr>';})),false)+
      panel("performance","Performance",performance.map(function(row){return '<article class="story-tool-performance"><span>FY 2027 target: <strong>'+escape(row.Projected_2027||"Not provided")+'</strong></span><h4>'+escape(row.Measure||"Performance measure")+'</h4>'+(row.Objective?'<p>'+escape(row.Objective)+'</p>':"")+'</article>';}).join(""),false)+
      panel("equipment","Equipment",table(["Item","FY 2027"],equipment.map(function(row){return '<tr><td>'+escape(row.Note||row.Project_Name||row.Object_Name||"Machinery and equipment")+'</td><td>'+money(amount(row))+'</td></tr>';})),false)+
      '</div>';
    dialog.querySelector(".story-data-dialog-inner").appendChild(mount);
  }
  departmentList.addEventListener("click",function(event){var button=event.target.closest("[data-department-key]");if(!button)return;var oldTools=dialog.querySelector(".story-department-tools");if(oldTools)oldTools.remove();var key=button.dataset.departmentKey;renderMedia(key);window.WCBudgetData.loadBudgetData().then(function(data){buildTools(data,key);});});
  dialog.addEventListener("click",function(event){var button=event.target.closest("[data-department-tool]");if(!button)return;dialog.querySelectorAll("[data-department-tool]").forEach(function(item){item.setAttribute("aria-selected",String(item===button));});dialog.querySelectorAll("[data-department-tool-panel]").forEach(function(panelEl){panelEl.hidden=panelEl.dataset.departmentToolPanel!==button.dataset.departmentTool;});});
  dialog.addEventListener("click",function(event){var button=event.target.closest("[data-department-video]");if(!button)return;var frame=dialog.querySelector(".story-department-video");frame.innerHTML=videoFrame([button.dataset.departmentVideo,button.dataset.videoTitle]);dialog.querySelectorAll("[data-department-video]").forEach(function(item){item.setAttribute("aria-pressed",String(item===button));});});
  dialog.addEventListener("close",function(){var media=dialog.querySelector(".story-department-media");if(media)media.remove();});
})();
