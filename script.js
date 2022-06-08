//const { myFetch, pickPlanet, addDestinationInfo, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function () {
  let faultyItems = document.getElementById("faultyItems");

  let launchStatus = document.getElementById("launchStatus");

  let pilotStatus = document.getElementById("pilotStatus");

  let copilotStatus = document.getElementById("copilotStatus");

  let fuelStatus = document.getElementById("fuelStatus");

  let cargoStatus = document.getElementById("cargoStatus");

  let pilotName = document.getElementById("pilotName");

  let copilotName = document.querySelector("input[name=copilotName]");

  let fuelLevel = document.querySelector("input[name=fuelLevel]");

  let cargoLevel = document.querySelector("input[name=cargoMass]");

  let formSubmit = document.getElementById("formSubmit");

  let list = document.getElementById("faultyItems");
  list.style.visibility = "hidden"
  formSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    
if (validateInput(pilotName.value) === "Empty" || validateInput(copilotName.value) === "Empty" || validateInput(fuelLevel.value) === "Empty"|| validateInput(cargoLevel.value) === "Empty"
    ) { alert("All fields are required!");

    }else if( validateInput(pilotName.value) === "Is a Number" || validateInput(copilotName.value) === "Is a Number"

    ) { alert("Please enter letters only for Pilot and Co-pilot!")
      
    } else if ( validateInput(fuelLevel.value) === "Not a Number" || validateInput(cargoLevel.value) === "Not a Number"

    ) { alert("Please enter numbers only for Fuel level and Cargo mass!")} else{
    formSubmission(
      document,
      list,
      pilotName.value,
      copilotName.value,
      fuelLevel.value,
      cargoLevel.value
    )

    }
});
    
 
    


  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();

  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      let pPicker = pickPlanet(listedPlanets);
      console.log(pPicker);

      addDestinationInfo(
        document,
        pPicker.name,
        pPicker.diameter,
        pPicker.star,
        pPicker.distance,
        pPicker.moons,
        pPicker.image
      );
    });
});
