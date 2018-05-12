console.log("success!")
var meatEl = document.getElementById('meatButton');
var veggieEl = document.getElementById('veggieButton');
var drinkEl = document.getElementById('beverageButton');

meatEl.addEventListener('click', showMeat);
veggieEl.addEventListener('click', showVeggies);
drinkEl.addEventListener('click', showBeverages);

function showMeat(){
  document.getElementById("meatShop").classList.remove('hidden');
  document.getElementById("veggieShop").classList.add('hidden');
  document.getElementById("beverageShop").classList.add('hidden');
  document.getElementById("homeStore").classList.add('hidden');
}

function showVeggies(){
  document.getElementById("meatShop").classList.add('hidden');
  document.getElementById("veggieShop").classList.remove('hidden');
  document.getElementById("beverageShop").classList.add('hidden');
  document.getElementById("homeStore").classList.add('hidden');
}

function showBeverages(){
  document.getElementById("meatShop").classList.add('hidden');
  document.getElementById("veggieShop").classList.add('hidden');
  document.getElementById("beverageShop").classList.remove('hidden');
  document.getElementById("homeStore").classList.add('hidden');
}


// When an item is clicked
// I want to add a line item to the shopping Cart
// I want the shopping cart to keep a running sum total of all prices
// I want the option to remove each item from the shopping Cart
// Whenever an item is added or removed, the sum total should be updated accordingly
// Option to update quantity if possible

// Turn each HTML item into a JS variable
// Add event listener for a click


var meatItem1 = document.getElementById('item1');
var meatItem2 = document.getElementById('item2');
var meatItem3 = document.getElementById('item3');
var meatItem4 = document.getElementById('item4');
var meatItem5 = document.getElementById('item5');
var meatItem6 = document.getElementById('item6');
var veggieItem7 = document.getElementById('item7');
var veggieItem8 = document.getElementById('item8');
var veggieItem9 = document.getElementById('item9');
var veggieItem10 = document.getElementById('item10');
var veggieItem11 = document.getElementById('item11');
var veggieItem12 = document.getElementById('item12');
var beverageItem13 = document.getElementById('item13');
var beverageItem14 = document.getElementById('item14');
var beverageItem15 = document.getElementById('item15');
var beverageItem16 = document.getElementById('item16');
var beverageItem17 = document.getElementById('item17');
var beverageItem18 = document.getElementById('item18');
