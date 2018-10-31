/*
listen for click event (edit)
update text in local storage (with key)
update display with new text value


 */

$(document).ready(function(){

  var list = document.querySelector('#list');
  var addBtn = document.querySelector('.addBtn');
  var clearBtn = document.querySelector('.clearBtn');
  var clearAll = document.querySelector('.clearAll');
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
    var listItems = list.childNodes;
    clearChecked()
    listItems.forEach(function(i){
      if (i.classList.contains('checked')){
        list.removeChild(i);
      }
    })
  },false)

  clearAll.addEventListener('click',function(e){
    e.preventDefault();
    window.localStorage.clear()
    list.innerHTML = "";
  },false)

  list.addEventListener('click',function(e){
    var t = e.target;
    if(t.classList.contains('checked')){
      t.classList.remove('checked');
    } else {
      t.classList.add('checked');
    }
    store();
  },false)

  function store() {
    window.localStorage.myitems = list.innerHTML;
  }

  function clearChecked() {
    var myItems = window.localStorage.myitems;
    if (myItems.includes("checked")){
      console.log('includes')
      arr = myItems.split('<li');
      for (var i=0;i<arr.length;i++){
        if (arr[i] === ''){
          arr.splice(i, 1);
        }
        arr[i] = '<li' + arr[i];
      }
      for (var i=0;i<arr.length;i++){
        var substring = "checked";
        if (arr[i].indexOf(substring) !== -1){
          arr.splice(i,1);
        }
      }
      var str = arr.join('')
      list.innerHTML = str
      store()
    }
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