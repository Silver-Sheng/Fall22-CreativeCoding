// reference: https://www.youtube.com/watch?v=qKku-mmwNIA

// set pins for sensor and LED
const int sensorPin = A0; 
const int LedPin = 13;
int light;

void setup() {
  pinMode(LedPin, OUTPUT);
  pinMode(sensorPin, INPUT);  
  Serial.begin(9600);
}


void loop() {
  light = analogRead(sensorPin);
 
 // if ligth is lower than 200, LED on
  if (light < 200){
    digitalWrite(LedPin, HIGH);
  }
  // if ligth is higher than 200, LED off
  else {
    digitalWrite(LedPin, LOW);
  }

  //print the light value
  Serial.println(light);
}
