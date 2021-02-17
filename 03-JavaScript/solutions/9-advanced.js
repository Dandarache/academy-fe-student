
function loglist(listname, list) {
    console.log('***' + listname + '***');
    for (let x of list)
        console.log(x);
}

function adv1() {

    const evens = [2, 4, 6, 8];

    // Använd ".map" för att skapa en ny lista "odds" utifrån listan "evens"

    loglist("adv1", odds);

}

function adv2() {

    const evens = [2, 4, 6, 8];

    // Använd ".map" för att skapa en ny lista "--2--", "--4--", "--6--", "--8--"

    loglist("adv2", list);

}

function adv3() {

    const evens = [2, 4, 6, 8];

    // Använd ".map" för att skapa en ny lista [{row:1, num:200}, {row:2, num:400} ...]

    loglist("adv3", list);

}


function adv4() {

    const evens = [2, 4, 6, 8];
    // Använd ".forEach" för att skriva ut alla element i listan

    // Använd "forEach" för att skriva ut:
    //Element 0) 2
    //Element 1) 4
    //Element 2) 6
    //Element 3) 8


}

function adv5() {

    // Gör om metoden "sum" så default för a är 30 och b är 40. 
    // alltså om t.ex sum(15) anropas så returneras 55
    function sum(a, b) {
        return a + b;
    }

    console.log(sumNew());    // 70
    console.log(sumNew(1));   // 41
    console.log(sumNew(1, 2)); // 3

}

function adv6() {

    // Skapa en funktion "sum" som summerar valfritt antal tal
    // Ex sum(2, 10, 3) ska returnera 15
    // Ex sum(2, 10) ska returnera 12
    // Använd "spread operator"

    console.log(sum(2, 10, 3));
    console.log(sum(2, 10));
}

function adv7() {

    /* Skapa en funktion "supersum" som ska funkar såhär:
   
       supersum("<", ">", 3, 4, 5);  ==>  "<12>"
       supersum("[", "]", 55, 2)     ==>  "[57]"
       supersum("A", "B", 6)         ==>  "A6B"

       Använd "spread operator"

    */

    console.log(supersum("<", ">", 3, 4, 5));
    console.log(supersum("[", "]", 55, 2));
    console.log(supersum("A", "B", 6));

}

function adv8() {

    /*
     Skapa metoden "starify" som ska funka såhär:

     starify("ab")           ==>   ["*a*", "*b*"]
     starify("XYZ")          ==>   ["*X*", "*Y*", "*Z*"]

    Använd "map" och "spread operator"
     */

    console.log(starify("ab"));
    console.log(starify("XYZ"));
}

function adv9() {

    let firstName = "Simon";
    let lastName = "Larsson";

    // Skapa ett objekt "person" som innehåller {firstName: "Simon", lastName: "Larsson"} på enklast möjliga sätt

    console.log(person);
}

function adv10() {
    /*
     Skapa ett objekt "myMath" som rymmer metoderna "addOne" och "double":

        myMath.addOne(100)   ==>   101
        myMath.double(100)   ==>   200
     */

    console.log(myMath.addOne(100));
    console.log(myMath.double(100));

}

function adv11() {

    let x = 100;
    let y = 200;

    // Byt värde på x och y på enklast möjliga sätt. Tips: använd "array matching" 

    console.log("x", x); // 200
    console.log("y", y); // 100

}

function adv12() {

    let list = [10, 20, 30, 40, 50];
    // Sätt "a" till 10, "b" till 30 och "c" till 40 på enklast möjliga sätt.
    // Tips: använd "array matching"

    console.log("a", a); // 10
    console.log("b", b); // 30
    console.log("c", c); // 40

}


function adv13() {
    function getPerson() {
        return { firstName: 'Lisa', age: 66 };
    }

    // Sätt "firstName" till "Lisa" och "age" till "66" genom att anropa "getPerson" och använda "object matching"

    console.log("firstName", firstName);
    console.log("age", age);

}

function adv14() {

    // Skapa en funktion som skriver ut "Lisa" och 66 utifrån "person"
    // Använd "Parameter Context Matching"
    let person = { firstName: 'Lisa', age: 66, favColor: "red" };
    fun(person);

}

