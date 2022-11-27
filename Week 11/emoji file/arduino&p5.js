let serial; // variable to hold an instance of the serialport library
// let portName = '/dev/cu.usbmodem1412301';  // fill in your serial port name here
let inData; // for incoming serial data
let portSelector;
let buttonData;
let face;

function setup() {
  createCanvas(600, 600);

  serial = new p5.SerialPort(); // make a new instance of the serialport library
  serial.on("list", printList); // set a callback function for the serialport list event
  serial.on("connected", serverConnected); // callback for connecting to the server
  serial.on("open", portOpen); // callback for the port opening
  serial.on("data", buttonPressed); // callback for when new data arrives
  serial.on("error", serialError); // callback for errors
  serial.on("close", portClose); // callback for the port closing
  serial.list(); // list the serial ports

  //basic setup for the emoji
  background(0);
  textSize(30);
  fill(255);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text("Tap to see the emoji :)", 0, 200, width);
  face = new Face(width / 2, height / 2);
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

//make the face draw along with each click of mouse:
function buttonPressed() {
  background(random(255), random(255), random(255));

  //create faces:
  face.showFace();

  color1 = random(255);
  color2 = random(255);
  color3 = random(255);
  color4 = random(255);
  color5 = random(255);
  color6 = random(255);
}

function serialError(err) {
  console.log("Something went wrong with the serial port. " + err);
}

function portClose() {
  console.log("The serial port closed.");
}
