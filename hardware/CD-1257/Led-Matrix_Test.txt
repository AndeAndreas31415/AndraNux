/* In this file is a bug. */

#define ROW_1 2
#define ROW_2 3
#define ROW_3 4
#define ROW_4 5
#define ROW_5 6
#define ROW_6 7
#define ROW_7 8

#define COL_1 9
#define COL_2 10
#define COL_3 11
#define COL_4 12
#define COL_5 13

const byte rows[] = {
  ROW_1, ROW_2, ROW_3, ROW_4, ROW_5, ROW_6, ROW_7
};
const byte cols[] = {
  COL_1,COL_2, COL_3, COL_4, COL_5
};

int heart [7] [5] ={
  {0,0,0,0,0},
  {0,1,0,1,0},
  {1,1,1,1,1},
  {0,1,1,1,0},
  {0,0,1,0,0},
  {0,0,0,0,0},
  {0,0,0,0,0},
};

int row = 0;

void setup() 
{
    Serial.begin(9600);
    
    // Set all used pins to OUTPUT
    // This is very important! If the pins are set to input
    // the display will be very dim.
    for (byte i = 2; i <= 13; i++)
        pinMode(i, OUTPUT);
}

void loop() {
  if(row!=7){
   digitalWrite(rows[row], HIGH);
   for (int col = 0; col <= 4; col++){
      if(heart[row][col]){
        Serial.print("1 ");
        digitalWrite(cols[col], HIGH);
      }else{
        Serial.print("0 ");
        digitalWrite(cols[col], LOW);
      }
    }
    digitalWrite(rows[row], LOW);
    Serial.println("");
    row++;
    delay(500);
   }else{
    Serial.println("-----");
    row = 0;
   }
}
