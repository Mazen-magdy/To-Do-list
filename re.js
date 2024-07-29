let container = document.getElementById('tasks');
let submit = document.getElementById('submit');
let text = document.getElementById('text');
let color = document.getElementById('color');
let arrayofTasks = [];
let length = 0
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
submit.addEventListener('click',()=>{
  event.preventDefault()
  console.log(text.value)
  let obj = {
    'backgroundColor' : color.value,
    'text' : text.value,
    'close' : "x"
  }
  arrayofTasks.push(obj);
  length += 1;
  console.log(arrayofTasks)
  // creatingone(arrayofTasks)// creation
  creating(arrayofTasks)
  local(arrayofTasks) // storing
})
// function creatingone(){
//   let div = document.createElement('div');
//   let h = document.createElement('h1');
//   let secondDiv = document.createElement('div');
//   let input = document.createElement('input');
//   let close = document.createElement('span');
//   input.type = 'checkbox';
//   h.appendChild(document.createTextNode(text.value));
//   close.appendChild(document.createTextNode("x"));
//   secondDiv.appendChild(input);
//   secondDiv.appendChild(h);
//   div.appendChild(secondDiv);
//   div.appendChild(close);
//   container.appendChild(div);
//   console.log(div)
// }
 function creating(values){
   let num = window.localStorage.length;
        for(let x = 0;x < num;x++){
       let varr = values[x];
       let div = document.createElement('div');
       let h = document.createElement('h1');
       let secondDiv = document.createElement('div');
       let input = document.createElement('input');
       let close = document.createElement('p');
       input.type = 'checkbox';
       h.appendChild(document.createTextNode(varr.text));
       close.appendChild(document.createTextNode("×"));
       secondDiv.appendChild(input);
       secondDiv.appendChild(h);
       div.appendChild(secondDiv);
       div.appendChild(close);
       container.appendChild(div);
     }
 }
function local(stored){
  stored = JSON.stringify(stored);
  window.localStorage.clear();
  window.localStorage.stored = stored;
  window.localStorage.setItem('length', length);
  stored = JSON.parse(stored);
};
let geted = window.localStorage.getItem('stored');
creating(geted);
console.log(length);
let arrrr = [{name:1},[1]]
