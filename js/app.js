'use strict;'

var openingHours = ["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"];
var controlScaling = [0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4];
var cities = [['Seattle', 23, 65, 6.3],['Tokyo', 3, 24, 1.2],['Dubai', 11, 38, 3.7],['Paris', 20, 38, 2.3],['Lima', 2, 16, 4.6]];
var cityObjects = [];
// var cityNames = [];
var totalHourly = [];    
var TossersHourly = [];

// Interactive Navigation Button
var thisTab = 1;
var nextTab = document.getElementById("nextNav");
var prevTab = document.getElementById("prevNav");

nextTab.addEventListener("click", changeTabNext);
prevTab.addEventListener("click", changeTabPrev);

function changeTabNext() {
  thisTab += 1;
  console.log(thisTab)
  if (thisTab > 3) {
    thisTab = 1;
  }
  var tab = document.getElementById("tab"+thisTab)
  openPage(thisTab, tab, 'rgba(11,22,33,0.9)');

}
function changeTabPrev() {
  thisTab -= 1;
  console.log(thisTab)
  if (thisTab < 1) {
    thisTab = 3;
  }
  var tab = document.getElementById("tab"+thisTab)
  openPage(thisTab, tab, 'rgba(11,22,33,0.9)');

}