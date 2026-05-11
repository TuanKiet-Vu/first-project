let input = document.querySelector ("#taskinput");
let button = document.querySelector ("button");
let list = document.querySelector ("tasklist");

// edit button
button.addEventListener("click", function() {
  let task = input.value;

  if (task === "") {
    alert("Please enter a task");
    return;
  }
  let li = document.createElement("li");
  li.textContent = task;
  list.appendChild(li);
  input.value = "";
});
