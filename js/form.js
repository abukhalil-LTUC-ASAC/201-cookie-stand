'use strict;'

// -------------------------------- Object manipulation -------------------------------- //
function addNewLocation (event) {
  event.preventDefault();

  var newCityName = event.target[0].value;
  newCityName = capitalizeFirstLetter(newCityName) // hack the problem by capitalizing first letter of one letter words
  var indexCity;              // saves object if exists
  var indexValue;
  var inputCity = [           // parsing form into useable data
    newCityName,
    parseInt(event.target[1].value),
    parseInt(event.target[2].value),
    parseInt(event.target[3].value)
  ];

  var delNode = document.getElementById("cities"); // deletes cities tables
  delNode.innerHTML = '';
  var delNode = document.getElementById("tossers"); // deletes tosser tables
  delNode.innerHTML = '';
  
  for (i = 0; i < cityObjects.length; i++){     // checks if it exists and stores existing object
    if (cityObjects[i].location == newCityName) {
      indexCity = cityObjects[i];
      indexValue = i;
    } 
  }
  
  if (indexCity) {                         // if it exists, do update, else add object.
    Object.assign(indexCity, {
      location: inputCity[0], 
      minHourlyCustomers: inputCity[1], 
      maxHourlyCustomers: inputCity[2], 
      avgCookiePerCustomer: inputCity[3],
      numCustomersPerHour: [],
      CookiesSoldPerHours: []
    });
    indexCity.fillCookieData();
    cityObjects[indexValue] = indexCity;
  }
  else {
    cities.push(inputCity);
    var city = new Shop(inputCity[0], inputCity[1], inputCity[2], inputCity[3]); // constructs new city
    city.fillCookieData();
    cityObjects.push(city) // pushes city before rendering
  }

  renderTable();
  renderToss();
}
// -------------------------------- Listener Submit -------------------------------- //

var submitBtn = document.getElementById('locationForm');
submitBtn.addEventListener('submit', addNewLocation); // click listener for input

// -------------------------------- sidebar -------------------------------- //
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');
document.querySelector('button').onclick = function () {
  sidebar.classList.toggle('sidebar_small');
  mainContent.classList.toggle('main-content_large')
}

// -------------------------------- Checkers --------------------------------//

// function exists(arr, search) {            // deprecated
//   return arr.some(row => row.includes(search))
// }

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}