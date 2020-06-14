'use strict;'

// var openingHours = [6,7,8,9,10,11,12,1,2,3,4,5,6,7];
var openingHours = ["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"];

var shops = {
  Seattle : {
    location: 'Seattle',
    minHourlyCustomers: 23,
    maxHourlyCustomers: 65,
    avgCookiePerCustomer: 6.3,
    numCustomersPerHour: [],
    CookiesSoldPerHours: []
  },
    Tokyo : {
      location: 'Tokyo',
      minHourlyCustomers: 3,
      maxHourlyCustomers: 24,
      avgCookiePerCustomer: 1.2,
      numCustomersPerHour: [],
      CookiesSoldPerHours: []
  },
    Dubai : {
      location: 'Dubai',
      minHourlyCustomers: 11,
      maxHourlyCustomers: 38,
      avgCookiePerCustomer: 3.7,
      numCustomersPerHour: [],
      CookiesSoldPerHours: []
  },
    Paris : {
      location: 'Paris',
      minHourlyCustomers: 20,
      maxHourlyCustomers: 38,
      avgCookiePerCustomer: 2.3,
      numCustomersPerHour: [],
      CookiesSoldPerHours: []
  },
    Lima : {
      location: 'Lima',
      minHourlyCustomers: 2,
      maxHourlyCustomers: 16,
      avgCookiePerCustomer: 4.6,
      numCustomersPerHour: [],
      CookiesSoldPerHours: []

  }
}


function getRandomInt(max,min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// window.onload = function(){
//   // your JS here
// }
for (var key in shops){
  var totalCookies = 0;

  var obj = shops[key];
  var citiesEl = document.createElement("section"); // Section creation for city names
  citiesEl.innerHTML = shops[key].location;
  document.getElementById("cities").appendChild(citiesEl);

  var citySalesEl = document.createElement("ul"); // Unordered List initiation
  citiesEl.appendChild(citySalesEl);

  for (i = 0; i < openingHours.length; i++) {
    shops[key].numCustomersPerHour[i] = getRandomInt(shops[key].minHourlyCustomers,shops[key].maxHourlyCustomers);
    shops[key].CookiesSoldPerHours[i] = Math.round(shops[key].numCustomersPerHour[i] * shops[key].avgCookiePerCustomer);
    
    var salesPerHourEl = document.createElement("li"); // list every hour per city
    salesPerHourEl.innerHTML = openingHours[i] + ': ' + shops[key].CookiesSoldPerHours[i] + ' cookies.';
    citySalesEl.appendChild(salesPerHourEl);

    totalCookies += shops[key].CookiesSoldPerHours[i];
    if (i == openingHours.length - 1) {
      var totalCookiesEl = document.createElement("li"); // list total at the end
      totalCookiesEl.innerHTML = 'Total: ' + totalCookies + ' cookies';
      salesPerHourEl.appendChild(totalCookiesEl);
      console.log(obj)

    }
  }
  
  
  console.log(obj);
}