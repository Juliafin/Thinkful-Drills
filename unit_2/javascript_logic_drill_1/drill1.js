function doTrafficLights() {
  var activeLight = getActiveLight();
  console.log(activeLight);

  if (activeLight == "green") {
    turnGreen()

  } else if (activeLight == "red") {
      turnRed()

  } else if (activeLight == "yellow") {
      turnYellow()

  } else {
    console.log(2 + 2);

  }


}

doTrafficLights()


/* From here down, you are not expected to
   understand.... for now :)


   Nothing to see here!

*/


function turnOffLights() {
  $('.traffic-light').removeClass('yellow-on red-on green-on');
}

function turnGreen() {
  turnOffLights();
  $('.green-light').addClass('green-on');
}

function turnYellow() {
  turnOffLights();
  $('.yellow-light').addClass('yellow-on');
}

function turnRed() {
  turnOffLights();
  $('.red-light').addClass('red-on');
}

function getActiveLight() {
  return (['red', 'green', 'yellow'])[Math.floor(Math.random() * 3)];
}

function handleClicks() {
  $('.js-control-lights').click(function() {
    doTrafficLights();
  });
}

$(handleClicks);
