'use strict';

chrome.runtime.onInstalled.addListener(function() {

  chrome.storage.sync.set({color: "#000000", fontColor: "#808080"}, function() {
    console.log("Dark background & font color is set to defaults.");
  });
  
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
  
});

// chrome.browserAction.onClicked.addListener(function(tab) {
	
	// var bkColor = document.getElementById('changeColor').value
	// var ftColor = document.getElementById('changeFont').value
	
  // chrome.storage.sync.set({color: bkColor, fontColor: ftColor}, function() {
    // console.log("Dark background & font color is set to defaults.");
  // });
// });