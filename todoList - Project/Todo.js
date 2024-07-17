const arrTodo = JSON.parse(localStorage.getItem('todo')); // get the object data out of the local storage

reloadTodo();

function reloadTodo(){
  localStorage.setItem('todo',JSON.stringify(arrTodo)); //store the object data in the local storage

  let htmlIncrementor = '';
  for(let i = 0; i < arrTodo.length; i++){
    let getArray = arrTodo[i];
    const{name,date,time} = getArray;
    html = `<div class = 'todoList'>
    <div> ${name} </div>
    <div> ${date} </div>
    <div> ${time} </div>

    <button class = "btnDelete"
    onclick = "
    arrTodo.splice(${i},1);
    localStorage.removeItem('todo');
    reloadTodo();
    "
    >Delete</button>
    </div>
    `
    htmlIncrementor += html;
    //localStorage.removeItem('todo');
    //localStorage.setItem('todo',object);
    //localStorage.getItem('todo');
    //JSON.stringify(objectName);
    //JSON.parse(objectName);
  }
  document.querySelector('.todoOutput').innerHTML = htmlIncrementor;
  //console.log(htmlIncrementor);
}

function addTodo(){
  const nameElement = document.querySelector('.name');
  const name = nameElement.value;

  const dateElement = document.querySelector('.date');
  const date = dateElement.value;

  const timeElement = document.querySelector('.time');
  const time = timeElement.value;
  arrTodo.push
  ({
    name,
    date,
    time
  });

  nameElement.value = '';
  dateElement.value = '';
  timeElement.value = '';
  reloadTodo();

  //console.log(JSON.stringify(arrTodo));
  //console.log(arrTodo);
}

//code function when key down press
function kdSaveTodo(event){
  let key = 'Enter';
if(event.key === key){
  addTodo();
}else{
  console.log("hi");
}
}