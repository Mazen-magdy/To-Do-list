let color = document.getElementById('color');
let form = document.getElementById('form');
let text = document.getElementById('text');
let submit = document.getElementById('submit');
let container = document.getElementById('container');
let theNumberOfDivs = container.childElementCount;
let innerInput = container.getElementsByTagName('input');
let initial = -1;
let completed;
let arr = [];
let cap = function(string){
  let result = string.replace(string.charAt(0), string.charAt(0).toUpperCase())
  return result;
}
let arrtasks = [];
// function arrange(obj){
//   let arrayOfName = [];
//   let arrayOfItems = []
//   for(item in obj){
//     if(isNaN(item) === false){
//
//     arrayOfName.push(Number(item))}
//     arrayOfItems.push(items[0])
//   }
//
//   return arrayOfName.sort()
// }
// console.log(arrange(localStorage));
// work starts here
submit.addEventListener('click', () => {
  if(text.value !==""){
  event.preventDefault();
  theNumberOfDivs = container.childElementCount;
  if (theNumberOfDivs === 0) {
    localStorage.clear();
  }
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
     let get =JSON.parse(window.localStorage.getItem(obj.num));
     //delete
     window.localStorage.removeItem(obj.num);
     //modify
     get[0].check = select.checked;
     console.log(get);

     //upload
     let thestore = JSON.stringify(get);
     window.localStorage.setItem(obj.num,thestore);
   });
   close.addEventListener('click',() => {
    //creation of parent
       let parent = close.parentElement;
       parent.style.display = 'none';
       window.localStorage.removeItem(obj.num);
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
   localStorage.setItem("number",theNumberOfDivs);
   let obj = {'text' : text.value, 'color': color.value,'check' :select.checked, 'num' : localStorage.number};
   localStorage.setItem("number", obj.num + 1);
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
})
/////////////////////////////////////////////////////////////////////////
function storing(testarr){
  let date = testarr[0].num;
  let thestore = JSON.stringify(testarr);
  window.localStorage.setItem(date,thestore);
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
      let numb = sitem.num;
      //get
      let get =JSON.parse(window.localStorage.getItem(numb));
      //delete
      window.localStorage.removeItem(numb);
      //modify
      get[0].check = select.checked;

      //upload
      let thestore = JSON.stringify(get);
      window.localStorage.setItem(numb,thestore);
    });
    close.addEventListener('click',() => {
     //creation of parent
        let date = sitem.num;
        console.log(date);
        let parent = close.parentElement;
        parent.style.display = 'none';
           window.localStorage.removeItem(date);
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
  delete the task from localStorage when clicking on x;
*/
