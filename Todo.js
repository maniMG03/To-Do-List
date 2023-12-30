let Myform=document.getElementById("form");
let MyInput=document.getElementById("MyInput");
let MyList=document.getElementById("MyList");
Myform.addEventListener("submit",additeam);
function additeam(event){
  event.preventDefault();
createIteam(MyInput.value);
}
createIteam=(d)=>{
  let MyTemplate=`<li>${d}<button onclick="deleteIteam(this)">Delete</button></li>`
  MyList.insertAdjacentHTML("beforeend",MyTemplate);
  MyInput.value="";
  MyInput.focus();
}
function deleteIteam(x){
  x.parentElement.remove();
}