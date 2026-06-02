const input = document.querySelector ('#input');
const button = document.querySelector ('#button');

var data= (localStorage.getItem("todoList")) ? JSON.parse(localStorage.getItem("todoList")) : 
{
  todo : [],
  completed : []
}

renderlist();

button.addEventListener ('click' , function() {
    var task = input.value.trim();
    if (task)
      addItem(task);
});

input.addEventListener ('keydown' , function (e){
    var task = input.value.trim();
    if ((e.code === 'Enter' || e.code === 'NumpadEnter') && task)
      addItem(task);
});

function addItem (value){
    addToDom(value);
    input.value = ' ';
    data.todo.push(value);
    dataUpdated();
}

function renderlist (){
  if (!data.todo.length && !data.completed.length)
     return;
  for (var i = 0 ; i<data.todo.length ; i++){
    var value = data.todo[i];
    addToDom(value);
  }
  for (var i = 0 ; i<data.completed.length ; i++){
    var value = data.completed[i];
    addToDom(value,true);
  }
}

function dataUpdated() {
  localStorage.setItem("todoList", JSON.stringify(data));
}

function removeItem(){
  var item = this.parentNode.parentNode;
  var pos = item.parentNode;
  var value = item.querySelector("span").innerText;
  var id = pos.id;

  if (id === 'todo'){
     data.todo.splice(data.todo.indexOf(value),1);
  }
  else {
     data.completed.splice(data.completed.indexOf(value),1);
  }
  dataUpdated();
  pos.removeChild(item);
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

function addToDom (value, completed){
  var item = document.createElement ('li');
  var list = completed ? document.querySelector ('#completed') : document.querySelector ('#todo');
  var text = document.createElement ('span');
  text.innerText = value;
  item.appendChild(text);

  var buttons = document.createElement ('div');
  buttons.classList.add('buttons');

  var remove = document.createElement ('button');
  remove.classList.add('remove');
  remove.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  remove.addEventListener('click', removeItem);

  var complete = document.createElement ('button');
  complete.classList.add('complete');
  complete.innerHTML = '<i class="fa-regular fa-calendar-check"></i>';
  complete.addEventListener('click', completeItem);
  
  buttons.appendChild(complete);
  buttons.appendChild(remove);
 
  item.appendChild(buttons);
  list.appendChild(item);
}