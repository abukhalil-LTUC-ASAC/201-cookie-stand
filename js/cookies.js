'use strict;'

// Shop constructor
function Shop(location, minHourlyCustomers, maxHourlyCustomers, avgCookiePerCustomer) {
  this.location = location;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.avgCookiePerCustomer = avgCookiePerCustomer;
  this.numCustomersPerHour = [];
  this.CookiesSoldPerHours = [];
}

// randomizes between (max, min) input values.
function getRandomInt(max,min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// fills cookie array with randomized #
Shop.prototype.fillCookieData =  function() {
  for (var i = 0; i < openingHours.length; i++) {
    numCustomers = getRandomInt(this.minHourlyCustomers,this.maxHourlyCustomers);
    CookiesSold = Math.round(numCustomers * this.avgCookiePerCustomer*controlScaling[i]);
    this.numCustomersPerHour.push(numCustomers);
    this.CookiesSoldPerHours.push(CookiesSold);
  }
}

// fills objects with cities data array
function fillShopData() {
  cityObjects = [];
  for (var i = 0; i < cities.length; i++){
    var city = new Shop(cities[i][0], cities[i][1], cities[i][2], cities[i][3]);
    city.fillCookieData();
    cityObjects.push(city)
  }
  renderTable();
}

// summing columns

function getHourlyTotal(){
  totalHourly = [];
  for(var i = 0; i < openingHours.length; i++) {						
    sum = 0;
    for(var j = 0; j < cities.length; j++) {				
        sum += cityObjects[j].CookiesSoldPerHours[i];
    }
    totalHourly.push(sum);
  }
}

// adds elements to the HTML file
function renderTable() {
  getHourlyTotal();
  var totalTotal = 0;
  var totalCookies = 0;

  var table = document.createElement("table"); //table initialization
  document.getElementById("cities").appendChild(table);
  var thead = document.createElement("thead"); // table header
  table.appendChild(thead);
  var tbody = document.createElement("tbody"); // table body
  table.appendChild(tbody);
  var tfoot = document.createElement("tfoot"); // table footer
  table.appendChild(tfoot);
  
  var trh = document.createElement("tr"); // row data header
  thead.appendChild(trh);
  var tdh = document.createElement("td"); // first cell of header is empty
  tdh.innerHTML = '&nbsp;';
  trh.appendChild(tdh);

  for (var i = 0; i <= cityObjects.length; i++) {
    totalTotal += totalCookies; 
    totalCookies = 0;

    if (i < cityObjects.length) {
    var trb = document.createElement("tr"); // adds row data body
    tbody.appendChild(trb);

    var tdh = document.createElement("td");
    tdh.innerHTML = cityObjects[i].location;
    trb.appendChild(tdh);
    } else if (i >= cityObjects.length) {
      var trb = document.createElement("tr"); // adds last row data
      tfoot.appendChild(trb);
      var tdh = document.createElement("td");
      tdh.innerHTML = 'Totals';
      trb.appendChild(tdh);
    }

    for (var j = 0; j <= openingHours.length; j++) {    
      if (i == 0 && j < openingHours.length) { // creates header data
        var tdh = document.createElement("td");
        tdh.innerHTML = openingHours[j];
        trh.appendChild(tdh);
      }
      if (i == 0 && j == openingHours.length) { // adds last header
        var tdh = document.createElement("td");
        tdh.innerHTML = 'Daily Location Total';
        trh.appendChild(tdh);
      }
      if (i < cityObjects.length && j < openingHours.length ) { // appends cookies data
        var tdb = document.createElement("td");
        tdb.innerHTML = cityObjects[i].CookiesSoldPerHours[j];
        trb.appendChild(tdb);

        totalCookies += cityObjects[i].CookiesSoldPerHours[j];
      } else if (i < cityObjects.length && j == openingHours.length ) { // appends total per city data
        
        var tdb = document.createElement("td");
        tdb.innerHTML = totalCookies;
        trb.appendChild(tdb);
      } else if (i == cityObjects.length && j < openingHours.length) { // appends total per hour data
        
        var tdb = document.createElement("td");
        tdb.innerHTML = totalHourly[j];
        trb.appendChild(tdb);
      } else if (i == cityObjects.length && j == openingHours.length) { // appends total total
        var tdb = document.createElement("td");
        tdb.innerHTML = totalTotal;
        trb.appendChild(tdb);
      }
    }
  }
} 

// function calls
fillShopData();


