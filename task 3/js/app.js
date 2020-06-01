'use strict';

window.onload = function () {

  var listingElements = ['apple', 'orange'];
  var storeElements = [];

  var container = document.getElementById('container');

  var tmpl = _.template(document.getElementById('app-template').innerHTML);

  var result = tmpl({ listingElements, storeElements });
  container.innerHTML = result;
 
	function addToStoreElements(element) {
  	var elementPosition = listingElements.indexOf(element);
	  if (elementPosition > -1) {
  	  storeElements.push(element);
    	listingElements.splice(elementPosition, 1);
	  }
  }
  
  function removeElements() {
    var selectedListing = document.querySelector('.listing-select'),
    selectedStore = document.querySelector('.store-select');

    if(selectedListing.selectedIndex > -1){
      var elementPosition = selectedListing.selectedIndex;
      listingElements.splice(elementPosition, 1);
      console.log(elementPosition);
    }
    if(selectedStore.selectedIndex > -1){
      var elementPosition = selectedStore.selectedIndex;
      storeElements.splice(elementPosition, 1);
    }
  }

  function clearAll() {
    listingElements = [];
    storeElements = [];
  }

  function addNewElement() {
    var name = prompt('Что хотите добавить', '');
    if(name && !parseFloat(name)){
      listingElements.push(name);
    }else{
      alert('Было введено не корректное значение')
    }
  }

  function sortItems(arr) {
    arr.sort(function(a, b) {
      if(a < b){
        return -1;
      }
      return 1;
    });
  };
 
	function updateUI() {
	 	// var storeSelect = document.querySelector('.store-select');
    // var listingSelect = document.querySelector('.listing-select');
		// storeSelect.innerHTML = '';
		// listingSelect.innerHTML = '';
    
    // for (var i = 0; i < listingElements.length; i++) {
    //   var newOption = document.createElement('option');
    //   newOption.innerText = listingElements[i];
    //   listingSelect.append(newOption);
    // }
    
    // for (var i = 0; i < storeElements.length; i++) {
    //   var newOption = document.createElement('option');
    //   newOption.innerText = storeElements[i];
    //   storeSelect.append(newOption);
    // }
    var result = tmpl({ listingElements, storeElements });
    container.innerHTML = result;
	}

  var addButton = document.querySelector('#add-button');
  
  addButton.onclick = function () {
    var selectedOption = document.querySelector('.listing-select option:checked');
    addToStoreElements(selectedOption.innerText);
    updateUI();
  };
  
  var removeButton = document.getElementById('remove-button');

  removeButton.onclick = function () {
    removeElements();
    updateUI();
  };

  var clearButton = document.getElementById('clear-button');

  clearButton.onclick = function () {
    clearAll();
    updateUI();
  };

  var newButton = document.getElementById('new-button');

  newButton.onclick = function () {
    addNewElement();
    updateUI();
  };

  var sortButton = document.getElementById('sort-button');

  sortButton.onclick = function () {
    sortItems(storeElements);
    updateUI();
  };
};