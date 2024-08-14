
let color = document.getElementById('color');
let form = document.getElementById('form');
let text = document.getElementById('text');
let submit = document.getElementById('submit');
let container = document.getElementById('container');
let innerInput = container.getElementsByTagName('input');
let initial = -1;
let completed;
let arr = [];
let cap = function(string){
  let result = string.replace(string.charAt(0), string.charAt(0).toUpperCase())
  return result;
}
if(localStorage.getItem('number') === null){
  localStorage.setItem('number',0);
}
let n = localStorage.getItem('number');
theNumberOfDivs = parseInt(n);
console.log(theNumberOfDivs)
let arrtasks = [];
// work starts here
submit.addEventListener('click', () => {
  if(text.value !==""){
  event.preventDefault();

  //creation of div
   let div = document.createElement('div');
 //creation of second div
   let secondDiv = document.createElement('div');
//creation of h1
   let h1 = document.createElement('h1');
//creation of doo
   let doo = document.createTextNode(cap(text.value));
//creation of select
   let select = document.createElement('input');
      select.type = 'checkbox';
//creation of close
   let close = document.createElement('button');
   close.classList.add("fa-solid", "fa-xmark");
//creation of x
   arr.push(select.checked);
   select.addEventListener('change',() => {
   //creation of parent
     let parent = select.parentElement;
  //creation of grandparent
     let grandparent = parent.parentElement;
   if(select.checked){
     grandparent.style.opacity = '0.4';
   }
     else{
       grandparent.style.opacity = '1';
     }
     //get
     let get =JSON.parse(window.localStorage.getItem('task'+ obj.num.toString()));
     //delete
     window.localStorage.removeItem('task'+ obj.num.toString());
     //modify
     get[0].check = select.checked;
     console.log(get);

     //upload
     let thestore = JSON.stringify(get);
     window.localStorage.setItem('task'+ obj.num.toString(),thestore);
   });
   close.addEventListener('click',() => {
    //creation of parent
       let parent = close.parentElement;
       parent.style.display = 'none';
       window.localStorage.removeItem("task" +obj.num.toString());
     });
   if(color.value === '#000000'){
     div.style.color = 'white';
     div.style.border = '3px solid white';   // doesn't run fix it
     }
   else{
       div.style.border = '3px solid #000';
     };
   div.style.backgroundColor = color.value;
   let testarr = []
   let obj = {'text' : text.value, 'color': color.value,'check' :select.checked, 'num' : theNumberOfDivs};
   testarr.push(obj);
   console.log(testarr)
   h1.appendChild(doo);
   // close.appendChild(x);
   secondDiv.appendChild(select);
   secondDiv.appendChild(h1);
   div.appendChild(secondDiv);
   div.appendChild(close);
   container.appendChild(div);
   text.value = "";
   color.value = 'black';
   storing(testarr);
 }else {
    alert("you have to fill the text input")
  }
  theNumberOfDivs++;
  localStorage.setItem('number',theNumberOfDivs);
})
function storing(testarr){
  let thestore = JSON.stringify(testarr);
  window.localStorage.setItem('task'+theNumberOfDivs.toString(),thestore);
}
function returning(){
  let obj = localStorage;
for(item in obj){
  let theArray = JSON.parse(obj[item]);
  for(item in theArray){
    let sitem = theArray[item];
    /////////////////////////////////////////////////////////
    let div = document.createElement('div');
  //creation of second div
    let secondDiv = document.createElement('div');
  //creation of h1
    let h1 = document.createElement('h1');
  //creation of doo
    let doo = document.createTextNode(cap(sitem.text));
  //creation of select
    let select = document.createElement('input');
  //creation of close
    let close = document.createElement('button');
    close.classList.add("fa-solid", "fa-xmark");
  //creation of x
    // let x = document.createTextNode('x')
    select.type = 'checkbox';
    arr.push(select.checked);
    if(sitem.check === true){
      div.style.opacity = '0.4';
      select.checked = true
    } // doesn't work
    select.addEventListener('change',() => {
    //creation of parent
      let parent = select.parentElement;
   //creation of grandparent
      let grandparent = parent.parentElement;
    if(select.checked){
      grandparent.style.opacity = '0.4';
    }
      else{
        grandparent.style.opacity = '1';
      }
      //get
      let get =JSON.parse(window.localStorage.getItem('task'+sitem.num.toString()));
      //delete
      window.localStorage.removeItem('task'+ sitem.num.toString());
      //modify
      get[0].check = select.checked;
      console.log(get);

      //upload
      let thestore = JSON.stringify(get);
      window.localStorage.setItem('task'+ sitem.num.toString(),thestore);
    });
    close.addEventListener('click',() => {
     //creation of parent
        let parent = close.parentElement;
        parent.style.display = 'none';
           window.localStorage.removeItem("task" +sitem.num.toString());
      });
    if(sitem.color === '#000000'){
      div.style.color = 'white';
      div.style.border = '3px solid white';   // doesn't run fix it
      }
    else{
        div.style.border = '3px solid #000';
      };
    div.style.backgroundColor = sitem.color;
    h1.appendChild(doo);
    secondDiv.appendChild(select);
    secondDiv.appendChild(h1);
    div.appendChild(secondDiv);
    div.appendChild(close);
    container.appendChild(div);
  }
}
  /////////////////////////////////////////////////////////////////////////////////////////////////
}
returning()
///////////
/*
  your mission
  make the check key update every check;
  arrange the items;
*/
