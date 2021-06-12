(()=>{"use strict";const t=document.getElementById("new-todo-title"),e=document.getElementById("todo-list"),o=document.querySelector(".todo-count"),n=document.querySelector(".filters"),i=[{type:"all",value:"전체보기"},{type:"active",value:"해야할 일"},{type:"completed",value:"완료한 일"}],l=({todoItem:t,option:l})=>{e.innerHTML=t?.map(((t,e)=>((t,e,o,n)=>`<li class="view ${o?"completed":n&&"editing"}"\n  data-index=${e}>\n    ${n?(t=>`\n        <input class="edit" value="${t}" />\n    `)(t):((t,e)=>`\n    <div class="view">\n        <input class="toggle" type="checkbox" ${e&&"checked"}/>\n        <label class="label">${t}</label>\n        <button class="destroy"></button>\n    </div>\n    `)(t,o)}\n    </li>`)(t.contents,e,t.completed,t.editing))).join(""),o.innerHTML=`<span class="todo-count">\n  총 <strong>${(t=>t.length)(t)}</strong>개 </span>`,n.innerHTML=(t=>i.map((({type:e,value:o})=>`<li>\n      <a\n        class="${e} ${t===e&&"selected"}"\n        href="#"\n        data-type="${e}"\n      >\n        ${o}\n      </a>\n    </li>`)).join(""))(l)},d=JSON.parse(localStorage.getItem("item"))||{todoItem:[],option:"all"},a=()=>d.option,c=()=>{const{todoItem:t,option:e}=d;return t.filter((t=>"all"===e||("active"===e?!t.completed:"completed"===e?t.completed:void 0)))},s=t=>t.target.closest("li").getAttribute("data-index"),r=t=>{for(let e in t)d[e]=t[e];localStorage.setItem("item",JSON.stringify(d)),l({todoItem:c(),option:a()})};t.addEventListener("keypress",(t=>{let e=t.target.value;""!==e&&"Enter"===t.key&&((t=>{const{todoItem:e,option:o}=d,n=[...e,{contents:t,completed:!1,editing:!1}];r({todoItem:n})})(e),t.target.value="")})),e.addEventListener("click",(t=>{const{todoItem:e,option:o}=d,n=[...e],i=s(t);"BUTTON"===t.target.tagName&&(n.splice(i,1),r({todoItem:n}))})),e.addEventListener("click",(t=>{const{todoItem:e,option:o}=d;if("toggle"===t.target.className){const o=[...e],n=s(t);o[n]={...o[n],completed:!o[n].completed},r({todoItem:o})}})),e.addEventListener("dblclick",(t=>{const{todoItem:e,option:o}=d;if("label"===t.target.className){const o=[...e],n=s(t);o[n]={...o[n],editing:!o[n].editing},r({todoItem:o})}})),n.addEventListener("click",(t=>{t.preventDefault();const e=t.target.dataset.type;r({option:e})})),e.addEventListener("keydown",(t=>{const{todoItem:e,option:o}=d,n=[...e],i=s(t);"Escape"!==t.key&&"Enter"!==t.key||(n[i]={...n[i],editing:!n[i].editing,contents:t.target.value},r({todoItem:n}))})),l({todoItem:c(),option:a()})})();