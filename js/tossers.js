// adds Second table to the HTML file
var TossersHourly = [];
function getHourlyTossers(){
  for(var i = 0; i < openingHours.length; i++) {						
    sum = 0;
    for(var j = 0; j < cities.length; j++) {		
      var tossers = Math.round(cityObjects[j].CookiesSoldPerHours[i]/20);
      if (tossers < 2){
        tossers = 2
      }
        sum += tossers;
    }
    TossersHourly.push(sum);
  }
}

function renderToss() {
  getHourlyTossers();
  var totalTotal = 0;
  var totalTossers = 0;

  var table = document.createElement("table"); //table initialization
  document.getElementById("tossers").appendChild(table);
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
    totalTotal += totalTossers; 
    totalTossers = 0;

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
        var tossers = Math.round(cityObjects[i].CookiesSoldPerHours[j]/20);
        if (tossers < 2){
          tossers = 2
        }
        totalTossers += tossers;

        tdb.innerHTML = tossers;
        trb.appendChild(tdb);
      } else if (i < cityObjects.length && j == openingHours.length ) { // appends total per city data
        
        var tdb = document.createElement("td");
        tdb.innerHTML = totalTossers;
        trb.appendChild(tdb);
      } else if (i == cityObjects.length && j < openingHours.length) { // appends total per hour data
        
        var tdb = document.createElement("td");
        tdb.innerHTML = TossersHourly[j];
        trb.appendChild(tdb);
      } else if (i == cityObjects.length && j == openingHours.length) { // appends total total
        var tdb = document.createElement("td");
        tdb.innerHTML = totalTotal;
        trb.appendChild(tdb);
      }
    }
  }
} 

renderToss();