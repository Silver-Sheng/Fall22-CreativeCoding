void setup() {
  Serial.begin(9600); // initialize serial communications
}
 
void loop() {
  // read the input
//  int button = digitalRead(4);
//  Serial.println(button);
  if (digitalRead(4) == HIGH) {
    Serial.println("pressed");
    delay(900);
  }
}