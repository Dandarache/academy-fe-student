/*
    https://www.w3schools.com/js/js_class_intro.asp

    A JavaScript class is NOT an object.
    It is a TEMPLATE for JavaScript objects.
*/

function classes1 () {
  /*
        Skapa en klass men namn "Car"
        Gör så att den nya klassen har följande egenskaper: brand, year
        Skapa en instans av den nya klassen med följande värden: Volvo, 2019
        Skriv ut värdena i det nya objektet med console log genom att bara ta 
            console.log(myObject.model) eller genom att loopa genom dem med en for-in loop

        Exempel:

            class MyClass {
                constructor(value1){
                    this.value1 = value1;
                    this.value2 = value2;
                }
            }

            let myObject = new MyClass('Bing', 'Bong');

            console.log(...);
    */
}

function classes2 () {
  /*
        Fortsätt att bygga vidare på klassen "Car"
        Lägg till en metod som du döper till getMyToString()
        När man anropar den nya metoden skall följande returneras: brand+' '+year
        Anropa den nya metoden när du skapat en instans, dvs ett objekt baserat på klassen

        Exempel:

            class MyClass {
                constructor(value1, value2){
                    this.value1 = value1;
                    this.value2 = value2;
                }
                getRamalama(){ return ... }
            }

            let myObject = new MyClass('Bing', 'Bong');

            console.log(myObject.getRamalama());

           */
}

function classes3 () {
  /*
        Fortsätt att bygga vidare på klassen "Car"
        Lägg till ytterligare en metod som du döper till setYear(year)
        När man anropar metoden skall årtalet i objektet ändras till inputparametern

        Exempel:

            class MyClass {
                constructor(value1, value2){
                    this.value1 = value1;
                    this.value2 = value2;
                }
                setValue2(myNewValue){
                    this.value2 = myNewValue;
                }
                getRamalama() { return ... }
            }

            let myObject = new MyClass('Bing', 'Bong');
            console.log(myObject.getRamalama());

            myObject.setValue2('Bang');
            console.log(myObject.getRamalama());

        */
}

function classes4 () {
  /*
        https://www.w3schools.com/js/js_class_inheritance.asp

        Fortsätt att bygga vidare på klassen "Car"
        Skapa ytterligare en klass som du döper till Model
        Den nya klassen skall ärva klassen Car
        Model skall ha en konstruktor som tar följande parametrar: brand, year, model
        Skapa en metod i Model som du döper till getFullName()
        När man anropar den nya metoden skall följande returneras: brand+' '+model+' '+year 
        Anropa den nya metoden när du skapat en instans, dvs ett objekt baserat på klassen

        Exempel:

            class MyClass {
                constructor(value1, value2){
                    this.value1 = value1;
                    this.value2 = value2;
                }
                setValue2(myNewValue){
                    this.value2 = myNewValue;
                }
                getRamalama() { return ... }
            }

            class MyNewClass extends MyClass {
                constructor(value1, value2, value3) {
                    super(value1, value2);
                    this.value3 = value3
                }
                getSomeData() { ... }
            }

            let myNewObject = new MyNewClass('Bing', 'Bong', 'bang');
            console.log(myNewObject.getSomeData());

            console.log(myObject.getRamalama());

*/
}
