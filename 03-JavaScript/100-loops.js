/*
    https://www.w3schools.com/js/js_loop_for.asp

    for - loops through a block of code a number of times
    for/in - loops through the PROPERTIES of an object
    for/of - loops through the VALUES of an iterable object
    while - loops through a block of code while a specified condition is true
    do/while - also loops through a block of code while a specified condition is true

*/

function loop1For () {
  let fruits = ['apple', 'orange', 'cherry']
  /*
        Använd en for loop för att skriva ut namnet frukter med console.log()

        https://www.w3schools.com/js/js_loop_for.asp

        Exempel:

            for (statement 1; statement 2; statement 3) {
                console.log(...);
            }
        
        */
}

function loop3ForIn () {
    let car = {
        brand: 'Volvo',
        model: 'V90',
        year: '2019'
    }
    
    /*
    Använd en for-in loop för att skriva ut namnet på alla egenskaper i objektet ovan med console.log()
    Denna loop används främst för att loopa över egenskaper i ett objekt.
    
    https://www.w3schools.com/js/js_loop_forin.asp      
    
    The JavaScript for/in statement loops through the properties of an Object.
    
    Do not use for in over an Array if the index order is important.
    The index order is implementation-dependent, and array values may not be accessed in the order you expect.
    It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.
    
    Exempel: 
    
    for (key in object) {
        console.log(...);
    }
    
    */
}

function loop2ForOf () {
  /*
        Använd en for-of loop för att skriva ut alla frukter med console.log()
        Denna loop är att föredra före for-in loopar när man skall loopa över alla objekt i t.ex. en array.

        https://www.w3schools.com/js/js_loop_forof.asp

        Exempel:

            for (variable of iterable) {
                console.log(...);
            }

        */
}

function loop4ArrayForEach () {
  let fruits = ['apple', 'orange', 'cherry']

  /*
        Använd en forEach loop för att skriva ut namnet frukter med console.log()

        https://www.w3schools.com/jsref/jsref_foreach.asp

        array.forEach(...) anropar en metod för varje objekt i arrayen.


        Tips: fruits.forEach(myFunction);

    */
}