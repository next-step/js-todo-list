//document query selectors
const input = document.querySelector(".new-todo");
const ul = document.querySelector(".todo-list");
const total = document.querySelector(".todo-count");
const totalNum = total.querySelector("strong");

//count id setting
let i = 1;

//get info from input
input.addEventListener("keypress", (e) => {
  if (input.value && e.key === "Enter") {
    addItemList(input.value);
    input.value = "";
  }
});

//handling add
function addItemList(item) {
  totalNum.innerText = ul.childElementCount;
  const newitem = addHtml(i, item);
  i++;
  ul.insertAdjacentHTML("beforeend", newitem);
}

function addHtml(i, item) {
  return `<li id=${i}>
 <input class="toggle" type="checkbox"  />
 <label>${item}</label>
 <div class="destroy"></div></li>`;
}

//handling destroy and toggle checkbox
ul.addEventListener("click", (e) => {
  if (e.target.className === "destroy") {
    e.target.parentNode.remove();
    totalNum.innerText = ul.childElementCount - 1;
  }
  if (e.target.className === "toggle") {
    e.target.parentNode.classList.toggle("completed");
  }
});

//handle Editing
ul.addEventListener("dblclick", (e) => {
  handleEditing(e);
});

function handleEditing(e) {
  const currentValue = e.target.textContent;
  const switchBox = document.createElement("input");
  switchBox.setAttribute("value", currentValue);
  e.target.textContent = "";
  e.target.append(switchBox);
  switchBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.target.parentNode.textContent = switchBox.value;
    }
    if (e.key === "Escape") {
      e.target.parentNode.textContent = currentValue;
    }
  });
}
/*
function showList(i, item) {
  const newlist = document.createElement("li");
  newlist.setAttribute("id", i);
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("class", "toggle");
  const newcontent = document.createElement("label");
  newcontent.innerText = item;
  const deletebtn = document.createElement("div");
  deletebtn.setAttribute("class", "destroy");
  checkbox.addEventListener("click", handleCheck);
  deletebtn.addEventListener("click", handleRemove);
  newlist.appendChild(checkbox);
  newlist.appendChild(newcontent);
  newlist.appendChild(deletebtn);
  ul.append(newlist);
}*/
