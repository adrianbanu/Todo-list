(()=>{"use strict";const e=function(e,t){this.titleProject=e,this.selected=t},t=function(){let t=[];function s(e){t.push(e),a.saveToLocalStorage()}return{addProject:function(){let a=document.getElementById("plus-project-title").value;""!==a?!function(e){for(let s=0;s<t.length;s++)if(t[s].titleProject==e)return!1;return!0}(a)?alert("Project already exists!"):(s(new e(a,"S")),o.renderProject(),o.addProjectToTaskForm(a),o.resetProjectField()):alert("You must choose a project title!")},deleteProject:function(e){t.splice(e,1),a.saveToLocalStorage()},addToProjectList:s,myProjectsList:t}}(),s=function(e,t,s,a,l,o){this.titleTask=e,this.projectTask=t,this.contentTask=s,this.dateTask=a,this.priorityTask=l,this.selected=o},a={saveToLocalStorage:function(){let e=l.myTasksList.length;localStorage.setItem("tasksNumber",e);let s=t.myProjectsList.length;localStorage.setItem("projectsNumber",s);for(let e=0;e<l.myTasksList.length;e++)localStorage.setItem(`titleTask${e}`,l.myTasksList[e].titleTask),localStorage.setItem(`selectedTask${e}`,l.myTasksList[e].selected),localStorage.setItem(`projectTask${e}`,l.myTasksList[e].projectTask),localStorage.setItem(`priorityTask${e}`,l.myTasksList[e].priorityTask),localStorage.setItem(`dateTask${e}`,l.myTasksList[e].dateTask),localStorage.setItem(`contentTask${e}`,l.myTasksList[e].contentTask);for(let e=0;e<t.myProjectsList.length;e++)localStorage.setItem(`titleProject${e}`,t.myProjectsList[e].titleProject),localStorage.setItem(`selectedProject${e}`,t.myProjectsList[e].selected)},uploadFromLocalStorage:function(){let a=localStorage.getItem("tasksNumber"),n=localStorage.getItem("projectsNumber");for(let e=0;e<a;e++){let t=localStorage.getItem(`titleTask${e}`),a=localStorage.getItem(`projectTask${e}`),o=localStorage.getItem(`contentTask${e}`),n=localStorage.getItem(`dateTask${e}`),d=localStorage.getItem(`priorityTask${e}`),c=localStorage.getItem(`selectedTask${e}`),r=new s(t,a,o,n,d,c);l.addToTasksList(r)}for(let s=0;s<n;s++){let a=localStorage.getItem(`titleProject${s}`),l=localStorage.getItem(`selected${s}`),n=new e(a,l);t.addToProjectList(n),o.addProjectToTaskForm(a)}}},l=function(){let e=[];function l(t){e.push(t),a.saveToLocalStorage()}function n(e,t){return e.priorityTask<t.priorityTask?-1:e.priorityTask>t.priorityTask?1:0}function d(){let e=document.getElementsByClassName("simple-trash"),t=document.getElementsByClassName("active-trash");for(let t=0;t<e.length;t++)e[t].style.display="none";for(let e=0;e<t.length;e++)t[e].style.display="inline"}return{addTask:function(){let e=document.getElementById("form-title").value,a=document.getElementById("form-project").value,n=document.getElementById("form-content").value,c=document.getElementById("form-date").value,r=document.getElementById("form-status").value;if(""!==e&&""!==c){let i=function(e){for(let s=0;s<t.myProjectsList.length;s++)if(t.myProjectsList[s].titleProject==e)return"NS"==t.myProjectsList[s].selected?"NS":"S";return t.myProjectsList.every((function(e,t,s){return 0===t?"NS"!=s[t].selected:e.selected===s[t-1].selected}))?"S":"NS"}(a);l(new s(e,a,n,c,r,i)),o.renderTasks(),o.resetTaskForm(),o.hideTaskForm(),d()}else alert("A task must have a title and a completion date!")},deleteTask:function(t){e.splice(t,1),a.saveToLocalStorage()},addToTasksList:l,sortAscPriority:function(){e.sort(n),o.renderTasks()},sortDescPriority:function(){e.sort(n).reverse(),o.renderTasks()},sortTaskDate:function(t){"desc"==t?e.sort(((e,t)=>new Date(t.dateTask)-new Date(e.dateTask))):e.sort(((e,t)=>new Date(e.dateTask)-new Date(t.dateTask))),o.renderTasks()},disableDelete:function(){let e=document.getElementsByClassName("active-trash"),t=document.getElementsByClassName("simple-trash");for(let t=0;t<e.length;t++)e[t].style.display="none";for(let e=0;e<t.length;e++)t[e].style.display="inline"},enableDelete:d,myTasksList:e}}(),o=function(){function e(){let e=document.getElementById("tasks-items");for(;e.hasChildNodes();)e.removeChild(e.firstChild)}function s(){let e=document.getElementById("project-list-names");for(;e.hasChildNodes();)e.removeChild(e.firstChild)}function o(){document.getElementById("task-form").reset()}function n(){document.getElementById("task-form").style.display="block",l.disableDelete()}function d(){document.getElementById("task-form").style.display="none",l.enableDelete(),o(),document.getElementById("add-Task").style.display="block",document.getElementById("edit-Task").style.display="none"}function c(e){n();let t=document.getElementById("edit-Task"),s=t.cloneNode(!0);t.parentNode.replaceChild(s,t),document.getElementById("form-title").value=l.myTasksList[e].titleTask,document.getElementById("form-project").value=l.myTasksList[e].projectTask,document.getElementById("form-content").value=l.myTasksList[e].contentTask,document.getElementById("form-date").value=l.myTasksList[e].dateTask,document.getElementById("form-status").value=l.myTasksList[e].priorityTask,document.getElementById("add-Task").style.display="none",document.getElementById("edit-Task").style.display="block",l.disableDelete(),document.getElementById("edit-Task").addEventListener("click",(()=>function(e){l.myTasksList[e].titleTask=document.getElementById("form-title").value,l.myTasksList[e].projectTask=document.getElementById("form-project").value,l.myTasksList[e].contentTask=document.getElementById("form-content").value,l.myTasksList[e].dateTask=document.getElementById("form-date").value,l.myTasksList[e].priorityTask=document.getElementById("form-status").value,document.getElementById("add-Task").style.display="block",document.getElementById("edit-Task").style.display="none",l.enableDelete(),d(),k(),o(),a.saveToLocalStorage()}(e)),{once:!0})}function r(e){let t=document.getElementById(`task-${e}`);t.parentNode.removeChild(t),l.deleteTask(e),k()}function i(e){let s=document.getElementById(`project-name-${e}`);s.parentNode.removeChild(s),function(e){let s=document.getElementById("form-project"),a=s.getElementsByTagName("OPTION");for(let l=0;l<a.length;l++)a[l].innerHTML==t.myProjectsList[e].titleProject&&(s.removeChild(a[l]),l--)}(e),function(e){for(let s=0;s<l.myTasksList.length;s++)l.myTasksList.length>s&&l.myTasksList[s].projectTask==t.myProjectsList[e].titleProject&&(l.deleteTask(s),s--)}(e),t.deleteProject(e),0==t.myProjectsList.length&&m(),u(),k()}function m(){for(let e=0;e<l.myTasksList.length;e++)l.myTasksList[e].selected="S";for(let e=0;e<t.myProjectsList.length;e++)t.myProjectsList[e].selected="S";a.saveToLocalStorage(),k()}function y(e){for(let e=0;e<l.myTasksList.length;e++)l.myTasksList[e].selected="S";for(let e=0;e<t.myProjectsList.length;e++)t.myProjectsList[e].selected="S";for(let s=0;s<t.myProjectsList.length;s++)t.myProjectsList[s].titleProject!=t.myProjectsList[e].titleProject&&(t.myProjectsList[s].selected="NS");for(let s=0;s<l.myTasksList.length;s++)t.myProjectsList[e].titleProject!=l.myTasksList[s].projectTask&&(l.myTasksList[s].selected="NS");k()}function k(){e(),function(){for(let e=0;e<l.myTasksList.length;e++)if("S"==l.myTasksList[e].selected){let t=document.getElementById("tasks-items").insertRow(-1);t.id=`task-${e}`;let s=t.insertCell(0),a=t.insertCell(1),o=t.insertCell(2),n=t.insertCell(3),d=t.insertCell(4),i=t.insertCell(5);s.innerHTML=l.myTasksList[e].titleTask,a.innerHTML=l.myTasksList[e].contentTask,o.innerHTML=l.myTasksList[e].dateTask,n.innerHTML=l.myTasksList[e].priorityTask;let m=document.createElement("I");m.classList.add("fas"),m.classList.add("fa-edit"),d.classList.add("edit-task"),d.append(m);let y=document.createElement("I");y.classList.add("fas"),y.classList.add("fa-trash-alt"),y.classList.add("active-trash");let k=document.createElement("I");k.classList.add("fas"),k.classList.add("fa-trash-alt"),k.classList.add("simple-trash"),k.style.display="none",i.classList.add("delete-task"),i.append(y),i.append(k),y.addEventListener("click",(()=>r(e))),m.addEventListener("click",(()=>c(e)))}}()}function u(){s(),function(){for(let e=0;e<t.myProjectsList.length;e++){let s=document.createElement("li");s.id="project-name-"+e,s.classList.add("project-name");let a=document.createElement("div");a.classList.add("project-select"),a.id=e;let l=document.createTextNode(t.myProjectsList[e].titleProject);a.appendChild(l),document.getElementById("project-list-names").appendChild(s),s.appendChild(a);let o=document.createElement("div");o.classList.add("trash-container"),s.appendChild(o);let n=document.createElement("I");n.classList.add("fas"),n.classList.add("fa-trash-alt"),n.classList.add("active-trash");let d=document.createElement("I");d.classList.add("fas"),d.classList.add("fa-trash-alt"),d.classList.add("simple-trash"),d.style.display="none",o.appendChild(n),o.appendChild(d),n.addEventListener("click",(()=>i(e))),a.addEventListener("click",(()=>y(e)))}}()}return{renderTasks:k,renderProject:u,selectAll:m,clearTaskAndProjectArrays:function(){l.myTasksList.splice(0,l.myTasksList.length),t.myProjectsList.splice(0,t.myProjectsList.length),e(),s(),a.saveToLocalStorage(),function(){let e=document.getElementById("form-project"),t=e.getElementsByTagName("OPTION");for(let s=0;s<t.length;s++)"All projects"!=t[s].innerHTML&&(e.removeChild(t[s]),s--)}()},addProjectToTaskForm:function(e){let t=document.getElementById("form-project"),s=document.createElement("option");s.text=e,t.add(s)},resetTaskForm:o,showTaskForm:n,hideTaskForm:d,resetProjectField:function(){document.getElementById("plus-project-title").value=""}}}();document.body.addEventListener("load",a.uploadFromLocalStorage()),document.body.addEventListener("load",o.renderTasks()),document.body.addEventListener("load",o.renderProject()),document.body.addEventListener("load",o.selectAll),document.getElementById("all-projects").addEventListener("click",o.selectAll),document.getElementById("delete-all-projects").addEventListener("click",o.clearTaskAndProjectArrays),document.getElementById("add-Task").addEventListener("click",l.addTask),document.getElementById("cancel-Task").addEventListener("click",o.hideTaskForm),document.getElementById("button-Task").addEventListener("click",o.showTaskForm),document.getElementById("plus-project").addEventListener("click",t.addProject),document.getElementById("priority-sort-asc").addEventListener("click",l.sortAscPriority),document.getElementById("priority-sort-desc").addEventListener("click",l.sortDescPriority),document.getElementById("date-sort-asc").addEventListener("click",(()=>l.sortTaskDate("asc"))),document.getElementById("date-sort-desc").addEventListener("click",(()=>l.sortTaskDate("desc")))})();