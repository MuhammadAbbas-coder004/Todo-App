const input = document.querySelector("#inputtodo");
const ul = document.querySelector("ul");
const allTodo = [];

function rendertodo(){
ul.innerHTML = "" 
for(let i = 0; i < allTodo.length; i++){
ul.innerHTML += `<li>${allTodo[i]} 
<button onclick="deleteTodo(${i})">delete</button>
<button onclick="editTodo(${i})">edit</button>
</li> `
}
}


function addTodo(){
allTodo.push(input.value)
rendertodo()
ul.style.listStyleType = "none";
console.log("add todo")
input.value = ""
}

function deleteTodo(index){
allTodo.splice(index , 1)
rendertodo()

}
function editTodo(index){
let edit = prompt("edit todo")
allTodo.splice(index , 1 ,  edit)
rendertodo()

}

