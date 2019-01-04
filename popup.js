'use strict';

let changeColor = document.getElementById('changeColor');

let fontColor = document.getElementById('changeFont')

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

chrome.storage.sync.get('fontColor', function(data) {
  fontColor.style.backgroundColor = '"' + data.fontColor + '"';
  fontColor.setAttribute('value', data.fontColor);
});

changeColor.onclick = function(element) {
let color = element.target.value;
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.executeScript(
	  tabs[0].id,
	  {code: 'var elems = document.querySelectorAll("div,table, ul, li, a"); for(let p = 0; p <  elems.length; p++){elems[p].style.backgroundColor = "' + color + '";}'});
});
};

fontColor.onclick = function(element){
 let color = element.target.value;
 
 chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.executeScript(
	  tabs[0].id,
	  {code: "var elems = document.querySelectorAll('h1,h2,h3,h4,legend,p,div,label,table, ul, li, a'); for(let p = 0; p <  elems.length; p++){ elems[p].style.setProperty('color', '" + color + "', 'important')}"});
}); 

 
};

