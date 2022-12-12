//define pin tones
//reference of tone: https://www.youtube.com/watch?v=CvZ-SGJ8fGo&t=1s
#define NOTE_C 262
#define NOTE_D 294
#define NOTE_E 330
#define NOTE_F 349
#define NOTE_G 392
#define NOTE_A 440
#define NOTE_B 493

#define ACTIVATED LOW 

//set up the button pin with arduino
const int PIEZO = 11;
const int LED = 13;

const int BUTTON_C = 12;
const int BUTTON_D = 9;
const int BUTTON_E = 8;
const int BUTTON_F = 7;
const int BUTTON_G = 6;
const int BUTTON_A = 5;
const int BUTTON_B = 4;



void setup()
{
  Serial.begin(9600); // initialize serial communications

  //define the inputs for the buttons
  pinMode(LED, OUTPUT); 
  pinMode(BUTTON_C, INPUT);
  digitalWrite(BUTTON_C,HIGH);
  pinMode(BUTTON_D, INPUT);
  digitalWrite(BUTTON_D,HIGH);
  pinMode(BUTTON_E, INPUT);
  digitalWrite(BUTTON_E,HIGH);
  pinMode(BUTTON_F, INPUT);
  digitalWrite(BUTTON_F,HIGH);
  pinMode(BUTTON_G, INPUT);
  digitalWrite(BUTTON_G,HIGH);
  pinMode(BUTTON_A, INPUT);
  digitalWrite(BUTTON_A,HIGH);
  pinMode(BUTTON_B, INPUT);
  digitalWrite(BUTTON_B,HIGH);
  
  digitalWrite(LED,LOW);
}


void loop()
{
  //write the button audio input
  if (digitalRead(12) == ACTIVATED) {
    tone(PIEZO,NOTE_C);
    digitalWrite(LED,HIGH);
    
    Serial.println("BUTTON_C");
    delay(900);
  }
  
  if (digitalRead(9) == ACTIVATED) {

    tone(PIEZO,NOTE_D);
    digitalWrite(LED,HIGH);

    Serial.println("BUTTON_D");
    delay(900);
  }

  if (digitalRead(8) == ACTIVATED) {
    tone(PIEZO,NOTE_E);
    digitalWrite(LED,HIGH);

    Serial.println("BUTTON_E");
    delay(900);
  }

  if (digitalRead(7) == ACTIVATED) {
    tone(PIEZO,NOTE_F);
    digitalWrite(LED,HIGH);

    Serial.println("BUTTON_F");
    delay(900);
  }

  if (digitalRead(6) == ACTIVATED) {
    tone(PIEZO,NOTE_G);
    digitalWrite(LED,HIGH);

    Serial.println("BUTTON_G");
    delay(900);
  }

  if (digitalRead(5) == ACTIVATED) {
    tone(PIEZO,NOTE_A);
    digitalWrite(LED,HIGH);

    Serial.println("BUTTON_A");
    delay(900);
  }

   if (digitalRead(4) == ACTIVATED) {
    tone(PIEZO,NOTE_B);
    digitalWrite(LED,HIGH);

    Serial.println("BUTTON_B");
    delay(900);
  }

  noTone(PIEZO);
  digitalWrite(LED,LOW);

}
