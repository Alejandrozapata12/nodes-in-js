document.addEventListener("DOMContentLoaded", function(){

const box = document.getElementById("container");
const MomList = document.createElement("ul");

const items = ["","","","",""];

items.forEach(function(itemText){
 const childItem = document.createElement("li");
 const textChild = document.createTextNode(items);
 childItem.appendChild(textChild);
 MomList.appendChild(childItem);
});

box.appendChild(MomList);

});