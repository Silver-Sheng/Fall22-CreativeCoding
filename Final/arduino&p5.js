let circles = [];
let startTimes = [];
let timers = [];
let haltTimers = [];

let serial; // variable to hold an instance of the serialport library
// let portName = '/dev/cu.usbmodem1412301';  // fill in your serial port name here
let inData; // for incoming serial data
let portSelector;
let buttonData;

function setup() {
  createCanvas(windowWidth, windowHeight);

  serial = new p5.SerialPort(); // make a new instance of the serialport library
  serial.on("list", printList); // set a callback function for the serialport list event
  serial.on("connected", serverConnected); // callback for connecting to the server
  serial.on("open", portOpen); // callback for the port opening
  serial.on("data", onButtonClicked); // callback for when new data arrives
  serial.on("error", serialError); // callback for errors
  serial.on("close", portClose); // callback for the port closing
  serial.list(); // list the serial ports
}

function draw() {
  background(0);

  for (let i = circles.length - 1; i >= 0; i--) {
    if (!shouldDisappear(i)) {
      circles[i].appear();
    } else {
      if (haltTimers[i] == -1) {
        haltTimers[i] = frameCount;
      }

      if (!haltTimer(i)) {
        console.log("cool circle halting");
        circles[i].halting();
      } else {
        console.log("cool circle disappearing");
        // console.log(disappearTimer(i));
        circles[i].disappear();

        if (timers[i] == -1) {
          timers[i] = frameCount;
          circles[i].turn();
        }

        if (disappearTimer(i)) {
          // animation finished, clean up
          circles.splice(i, 1);
          startTimes.splice(i, 1);
          timers.splice(i, 1);
          haltTimers.splice(i, 1);
          console.log("cool circle disappeared");
        }
      }
    }
  }
}
function printList(portList) {
  // create a select object:
  portSelector = createSelect();
  portSelector.position(10, 10);
  // portList is an array of serial port names
  for (var i = 0; i < portList.length; i++) {
    // add this port name to the select object:
    portSelector.option(portList[i]);
  }
  // set an event listener for when the port is changed:
  portSelector.changed(mySelectEvent);
}

function mySelectEvent() {
  let item = portSelector.value();
  // if there's a port open, close it:
  if (serial.serialport != null) {
    serial.close();
  }
  // open the new port:
  serial.openPort(item);
}

function serverConnected() {
  console.log("connected to server.");
}

function portOpen() {
  console.log("the serial port opened.");
}

function serialError(err) {
  console.log("Something went wrong with the serial port. " + err);
}

function portClose() {
  console.log("The serial port closed.");
}

function onButtonClicked() {
  // event handler for serial events

  inData = serial.readLine();

  if (inData.startsWith("BUTTON")) {
    let c;
    switch (inData) {
      case "BUTTON_C":
        c = new CoolCircle(
          random(100, windowWidth - 100),
          random(100, windowHeight - 100),
          color("#d64e12")
        );
        break;
      case "BUTTON_D":
        c = new CoolCircle(
          random(100, windowWidth - 100),
          random(100, windowHeight - 100),
          color("#f9a52c")
        );
        break;
      case "BUTTON_E":
        c = new CoolCircle(
          random(100, windowWidth - 100),
          random(100, windowHeight - 100),
          color("#efdf48")
        );
        break;
      case "BUTTON_F":
        c = new CoolCircle(
          random(100, windowWidth - 100),
          random(100, windowHeight - 100),
          color("#8bd346")
        );
        break;
      case "BUTTON_G":
        c = new CoolCircle(
          random(100, windowWidth - 100),
          random(100, windowHeight - 100),
          color("#60dbe8")
        );
        break;
      case "BUTTON_A":
        c = new CoolCircle(
          random(100, windowWidth - 100),
          random(100, windowHeight - 100),
          color("#16a4d8")
        );
        break;
      case "BUTTON_B":
        c = new CoolCircle(
          random(100, windowWidth - 100),
          random(100, windowHeight - 100),
          color("#9b5fe0")
        );
        break;
      default:
        c = new CoolCircle(
          random(100, windowWidth - 100),
          random(100, windowHeight - 100),
          color("white")
        );
    }
    circles.push(c);
    startTimes.push(frameCount);
    timers.push(-1);
    haltTimers.push(-1);
  }
}

function shouldDisappear(index) {
  // show the music visualization 3 sec and disappear
  let timeup = (frameCount - startTimes[index]) * deltaTime > 9000;
  return timeup;
}

function disappearTimer(index) {
  // timer for disappear animation to finish
  return (frameCount - timers[index]) * deltaTime > 7500;
}

function haltTimer(index) {
  // timer for particle halting
  let timeup = (frameCount - haltTimers[index]) * deltaTime > 1000;
  return timeup;
}
