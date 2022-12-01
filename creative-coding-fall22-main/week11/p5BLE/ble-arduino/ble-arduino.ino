#include <ArduinoBLE.h>

const int buttonPin = 4; // set buttonPin to digital pin 4
const int potPin = A0;

BLEService nanoService("76299b69-7871-4bc1-8937-68204d20d344"); // create service

// create button characteristic and allow remote device to get notifications
BLEIntCharacteristic buttonCharacteristic("be7162e4-5f7c-41a1-8e3e-36792d99f32c", BLERead | BLENotify);
BLEIntCharacteristic potCharacteristic("9b1235c3-7b38-40e9-8581-53e36082e260", BLERead | BLENotify);

int sensorValue = 255;

void setup() {
  Serial.begin(9600);
  while (!Serial);

//  pinMode(ledPin, OUTPUT); // use the LED as an output
  pinMode(buttonPin, INPUT); // use button pin as an input
  pinMode(potPin, INPUT);

  // begin initialization
  if (!BLE.begin()) {
    Serial.println("starting BLE failed!");

    while (1);
  }

  // set the local name peripheral advertises
  BLE.setLocalName("Arduino Nano");
  // set the UUID for the service this peripheral advertises:
  BLE.setAdvertisedService(nanoService);

  // add the characteristics to the service
  nanoService.addCharacteristic(buttonCharacteristic);
  nanoService.addCharacteristic(potCharacteristic);


  // add the service
  BLE.addService(nanoService);

  buttonCharacteristic.writeValue(0);
  potCharacteristic.writeValue(0);

  // start advertising
  BLE.advertise();

  Serial.println("Bluetooth device active, waiting for connections...");
}

void loop() {
  // poll for BLE events
  BLE.poll();

  if (millis() % 100 == 0) {
    sensorValue = digitalRead(buttonPin);
    Serial.println(sensorValue);
    buttonCharacteristic.writeValue(sensorValue);

    float potValue = analogRead(potPin);
    Serial.println(potValue);
    potCharacteristic.writeValue(potValue);

    delay(1);
  }

}
