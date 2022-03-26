// Write your helper functions here!
require("isomorphic-fetch");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  let missionDestination = document.getElementById("missionTarget");

  missionDestination.innerHTML = `
    <h1>Mission Destination</h1>
    <ol>
        <li>Name:${name}</li>
        <li>Diameter:${diameter} </li>
        <li>Star: ${star}</li>
        <li>Distance from Earth:${distance} </li>
        <li>Number of Moons:${moons} </li>
    </ol>
    <img src=${imageUrl}> 
    `;

  // Here is the HTML formatting for our mission target div.
  /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name:${name}</li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}
function validateInput(testInput) {
  //let value = Number(testInput)
 

  if (testInput === "") {
    return "Empty";
  } else if (isNaN(testInput)) {
    return "Not a Number";
  } else if (!isNaN(testInput)) {
    return "Is a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

  let faultyItems = document.getElementById("faultyItems");
  let launchStatusCheck = document.getElementById("launchStatusCheck");
  //let faultyItems = list;
  /*let list = (launchStatusCheck.innerHTML = `
    <li> Pilot ${pilot} is ready for launch </li>
    <li> Co-Pilot ${copilot} is ready for launch</li> 
    `);*/

  validateInput(pilot);
    pilotStatus.textContent = `Pilot ${pilot} is ready for launch`;
  

  validateInput(copilot);
    copilotStatus.textContent = `Co-Pilot ${copilot} is ready for launch`;
  
  validateInput(fuelLevel);
    fuelStatus.textContent = `Fuel level is high enough for launch`;
  

  validateInput(cargoLevel);
  cargoStatus.textContent = `Cargo mass low enough for launch`;

  if (fuelLevel < 10000) {
     
    faultyItems.style.visibility = `visible`;
    fuelStatus.textContent = `Fuel level too low for launch`;
    launchStatus.textContent = `Shuttle not ready for launch`;
    launchStatus.style.color = `rgb(199, 37, 78)`;
    
  } else if (cargoLevel > 10000) {
    faultyItems.style.visibility = `visible`;
    cargoStatus.textContent = `Cargo mass too heavy for launch`;
    launchStatus.textContent = `Shuttle not ready for launch`;
    launchStatus.style.color = `rgb(199, 37, 78)`;
  } else {
    faultyItems.style.visibility = `visible`;
    launchStatus.textContent = `Shuttle is Ready for Launch`;
    launchStatus.style.color = `rgb(65, 159, 106)`;
  }
}

async function myFetch() {
  let planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  )
    .then(function (response) {
      return response.json();
    })
    .catch(function (err) {
      console.log(err);
    });

  return planetsReturned;
}

function pickPlanet(planets) {
  let i = Math.floor(Math.random() * planets.length);
  return planets[i];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
