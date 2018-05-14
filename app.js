
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

function Item (category, name, price) {
  this.category = category;
  this.name = name;
  this.price = price;
  this.describe = function() {
    console.log("This " + category + " product is " + name + " and costs $" + price + ".");
  }
}

var cartItemsEl = document.getElementById('cartItems');

meatItem1.addEventListener('click', updateCart);
meatItem2.addEventListener('click', updateCart);
meatItem3.addEventListener('click', updateCart);
meatItem4.addEventListener('click', updateCart);
meatItem5.addEventListener('click', updateCart);
meatItem6.addEventListener('click', updateCart);
veggieItem7.addEventListener('click', updateCart);
veggieItem8.addEventListener('click', updateCart);
veggieItem9.addEventListener('click', updateCart);
veggieItem10.addEventListener('click', updateCart);
veggieItem11.addEventListener('click', updateCart);
veggieItem12.addEventListener('click', updateCart);
beverageItem13.addEventListener('click', updateCart);
beverageItem14.addEventListener('click', updateCart);
beverageItem15.addEventListener('click', updateCart);
beverageItem16.addEventListener('click', updateCart);
beverageItem17.addEventListener('click', updateCart);
beverageItem18.addEventListener('click', updateCart);

var meatItem1 = new Item("meat", "T-Bone Steak", 20);
var meatItem2 = new Item("meat", "Chicken Wings", 10);
var meatItem3 = new Item("meat", "Bacon", 5);
var meatItem4 = new Item("meat", "Ham", 13);
var meatItem5 = new Item("meat", "Turkey", 30);
var meatItem6 = new Item("meat", "Spam", 3);
var veggieItem7 = new Item("vegetable", "Carrots", 2);
var veggieItem8 = new Item("vegetable", "Onions", 1.50);
var veggieItem9 = new Item("vegetable", "Potatoes", 2);
var veggieItem10 = new Item("vegetable", "Corn", 2.50);
var veggieItem11 = new Item("vegetable", "Broccoli", 1.50);
var veggieItem12 = new Item("vegetable", "Bell Peppers", 1.50);
var beverageItem13 = new Item("beverage", "Milk", 3);
var beverageItem14 = new Item("beverage", "Orange Juice", 3.50);
var beverageItem15 = new Item("beverage", "Bottled Water", 4);
var beverageItem16 = new Item("beverage", "Sweet Tea", 2);
var beverageItem17 = new Item("beverage", "Beer", 10);
var beverageItem18 = new Item("beverage", "Whiskey", 25);


function updateCart () {
  cartItemsEl.innerHTML = (this.getElementsByTagName('p')[0].innerText);
};
