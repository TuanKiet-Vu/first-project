const input = document.querySelector ('#input');
const button = document.querySelector ('#button');

var data= (localStorage.getItem("todoList")) ? JSON.parse(localStorage.getItem("todolist")) : 
{
  todo : [],
  completed : []
}

renderlist();

button.addEventListener ('click' , function() {
    var task = input.value.trim();
    if (!task)
      addItem(task);
});

input.addEventListener ('Keydown' , function (e){
    var task = input.value.trim();
    if ((e.code === 'Enter' || e.code === 'NumpadEnter') && task)
      addItem(task);
});

function addItem (value){
    addToDOM(value);
    input.value = ' ';
    dataUpdated();
    data.todo.push(value);
}

function renderlist (){
  if (data.todo.length === 0 && data.todo.completed === 0)
     return;
  for (var i = 0 ; i<data.todo.length ; i++){
    var value = data.todo[i];
    addToDom(value);
  }
  for (var i = 0 ; i<data.completed.length ; i++){
    var value = data.todo[i];
    addToDom(value);
  }
}

function dataUpdated() {
  localStorage.setItem ('todolist', JSON.stringify (data));
}

function removeItem(){
  var item = this.parentNode.parentNode;
  var pos = item.parentNode;
  var value = item.innerText;
  var id = pos.id;

  if (id === 'todo'){
     data.todo.splice(data.todo.indexOf(value),1);
  }
  else {
     data.completed.splice(data.todo.indexOf(value),1);
  }
  dataUpdated();
  pos.removeChild(value);
}

function completeItem(){
  var item = this.parentNode.parentNode;
  var pos = item.parentNode;
  var value = item.innerText;
  var id = pos.id;

  if (id === 'todo'){
    data.todo.splice (data.todo.indexOf(value),1);
    data.completed.push (value);
  }
  else {
    data.completed.splice (data.completed.indexOf(value),1);
    data.todo.push (value);
  }

  var goal = (id === 'todo') ? document.querySelector("#completed") : document.querySelector("#todo");
  pos.removeChild(item);
  goal.insertBefore (item, goal.childNodes[0]);
  dataUpdated();
}