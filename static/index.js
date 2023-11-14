

// Traffic data
function createIncident(des) {

  const item = document.createElement("li");
  item.innerText = des;

  document.getElementById("data").appendChild(item);

}

function mileMarkerIsInRange(mm) {
  return (mm <= 1000 && mm >= 0);
}

fetch("./trafficdata")
  .then((res) => res.json())
  .then((highImpactIncidents) => {
    
    for (incident of highImpactIncidents.features) {

      if (mileMarkerIsInRange(incident.properties.mrm)) {
        createIncident(`Crash on ${incident.properties.route} at mile marker ${incident.properties.mrm}`)
      }
    
    }
  });

  // Filters

  function updateDropdown() {
    
  }