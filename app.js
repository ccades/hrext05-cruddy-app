/*
listen for click event (edit)
update text in local storage (with key)
update display with new text value


 */

$(document).ready(function(){

  var list = document.querySelector('#list');
  var addBtn = document.querySelector('.addBtn');
  var clearBtn = document.querySelector('.clearBtn');
  var item = document.querySelector('#item');

  addBtn.addEventListener('click',function(e){
    if (item.value.length > 0){
      e.preventDefault();
      list.innerHTML += '<li>' + item.value + '</li>';
      store();
      item.value = "";
    } else {
      alert('Please enter text')
    }
  },false)

  clearBtn.addEventListener('click',function(e){
    e.preventDefault();
    list.innerHTML = ''
    clearAll();
  },false)

  list.addEventListener('click',function(e){
    var t = e.target;
    console.log(e)
    if(t.classList.contains('checked')){
      t.parentNode.removeChild(t);
    } else {
      t.classList.add('checked');
    }
    store();
  },false)

  function store() {
    window.localStorage.myitems = list.innerHTML;
  }

  function clearAll() {
    window.localStorage.clear();
  }

  function getValues() {
    var storedValues = window.localStorage.myitems;
    if(!storedValues) {
      list.innerHTML =
      '<li>Step 1: Learn Javascript</li>'+
      '<li>Step 2: ?</li>'+
      '<li>Step 3: Profit!</li>';
    }
    else {
      list.innerHTML = storedValues;
    }
  }
  getValues();
});