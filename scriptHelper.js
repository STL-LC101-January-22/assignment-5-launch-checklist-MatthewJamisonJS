// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionDestination = document.getElementById("missionTarget");

    div.innerHTML = `
    <h2>Mission Destination</h2>
    <ol>
        <li>Name:${name}</li>
        <li>Diameter:${diameter} </li>
        <li>Star: ${star}</li>
        <li>Distance from Earth:${distance} </li>
        <li>Number of Moons:${moons} </li>
    </ol>
    <img src=${imageUrl}> 
    `

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
    let value = Number(testInput)
    if(testInput =="") {

        alert("Empty")
        return false;
    } 
    else if (isNaN(value)) {
            alert("Not a Number")
            return false;
    }
    else {
        alert("Is a Number")
        return true;
    }

    }
   


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let faultyItems =document.getElementById("faultyItems");
    
  let launchStatus = document.getElementById('launchStatus');

  let pilotStatus =document.getElementById("pilotStatus");

  let copilotStatus =document.getElementById("copilotStatus");
  validateInput(pilotStatus.textContent =`Pilot ${pilot} is ready for launch`);
  validateInput(copilotStatus.textContent =`Co-Pilot ${copilot} is ready for launch`);

  let fuelStatus =document.getElementById("fuelStatus");
  validateInput(fuelStatus.textContent = `Fuel level is high enough for launch`);

  let cargoStatus = document.getElementById("cargoStatus");
  validateInput(cargoStatus.textContent = `Cargo mass low enough for launch`);

    if (fuelLevel< 10000) {
        faultyItems.style.visibility = "visible";
        fuelStatus.textContent =`Fuel level too low for launch`;
        launchStatus.textContent = "Shuttle Not Ready for Launch";
        launchStatus.style.color ="rgb(199, 37, 78)";
    } else if (cargoLevel> 10000) {
        faultyItems.style.visibility = "visible";
        cargoStatus.textContent ="Cargo mass too heavy for launch";
        launchStatus.textContent = `Shuttle Not Ready for Launch`;
        launchStatus.style.color ="rgb(199, 37, 78)";
    } else {
        launchStatus.textContent ="Shuttle is Ready for Launch";
        launchStatus.style.color = "rgb(65, 159, 106)";
    }

}

async function myFetch() {
  
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
   let i=  Math.floor(Math.random()* planets.length);
   return planets[i];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
