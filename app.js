
// when document has loaded
$(document).ready(function(){

  // variables
  var list = document.querySelector('#list');
  var addBtn = document.querySelector('.addBtn');
  var clearBtn = document.querySelector('.clearBtn');
  var clearAll = document.querySelector('.clearAll');
  var item = document.querySelector('#item');

  // add item button click
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

  // clear checked off items click
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

  // clear entire list click
  clearAll.addEventListener('click',function(e){
    e.preventDefault();
    window.localStorage.clear()
    list.innerHTML = "";
  },false)

  // check off an item click
  list.addEventListener('click',function(e){
    var t = e.target;
    if(t.classList.contains('checked')){
      t.classList.remove('checked');
    } else {
      t.classList.add('checked');
    }
    store();
  },false)

  // function to store item in localStorage
  function store() {
    window.localStorage.myitems = list.innerHTML;
  }

  // function to clear checked items from localStorage
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

  // function to load localStorage items
  function getValues() {
    var storedValues = window.localStorage.myitems;
    if(!storedValues) {
      list.innerHTML =
      '<li>Step 1: Learn Javascript</li>'+
      '<li>Step 2: ?</li>'+
      '<li>Step 3: Profit!</li>';
      store()
    }
    else {
      list.innerHTML = storedValues;
    }
  }

  // calling getValues funtion
  getValues();
});