// set the pins on arduino
int sensorPin1=A0;
int sensorPin2=A1;
int LedRed = 12;
int LedGreen = 11;
int LedBlue = 10;
int pinValue1 = 0;
int pinValue2 = 1;

void setup() {
   pinMode(LedRed, OUTPUT);
   pinMode(LedGreen, OUTPUT);
   pinMode(LedBlue, OUTPUT);
   Serial.begin(9600);
}

void loop() {
  pinValue1=analogRead(sensorPin1);
  pinValue2=analogRead(sensorPin2);
  // check the value between two potentiometers
  Serial.println(abs(pinValue1 - pinValue2)); 

   if (abs(pinValue1 - pinValue2) < 200){
    digitalWrite(LedRed, LOW);
    digitalWrite(LedGreen, HIGH);
    digitalWrite(LedBlue, LOW);
    } 
    else{
    digitalWrite(LedRed, HIGH);
    digitalWrite(LedGreen, LOW);
    digitalWrite(LedBlue, LOW);      }
      delay(100);

}
