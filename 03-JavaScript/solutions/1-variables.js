
function var1() {
    console.log('Jag heter DITT_NAMN!')
}

function var2() {
    let number = 42
    console.log(number)
}

function var3() {
    let number = 42
    console.log("Svaret är " + number)
}

function var4() {
    let x = 77
    let y = 44
    x = 55
    let z = x + y
    console.log('Svar: ' + z)
}

function var5() {

    const x = 77;
    let y = 44;
    x = 55; // TypeError: Assignment to constant variable

    let z = x + y;
    console.log('Svar: ' + z);
}

function var6() {
    let nummer1 = "77";
    let nummer2 = "50";
    console.log(nummer1 + nummer2); // "7750"
}

function var7() {
    let nummer1 = "77";
    let nummer2 = 50;
    nummer1 = parseInt(nummer1);
    console.log(nummer1 + nummer2);  // 127
}

function var8() {
    let nummer = 42;
    console.log("Mitt favorittal är " + nummer);
}

function var9() {
    let nummer = 42;
    console.log(`Mitt favorittal är ${nummer}`);   
}

function var10() {
    let middag = 'broccoli';
    let Middag = 'pasta';
    console.log(middag);
}

function var11() {
    let x = 12;
    console.log(typeof x); // number

    let y = true;
    console.log(typeof y); // boolean

    let z = 'måndag';
    console.log(typeof z); // string

    let w;
    console.log(typeof w); // undefinied
}

function var12() {
    let x = parseInt('DITT_NAMN');
    console.log(x); // "NaN"

    let y = isNaN(x);
    console.log(y);  // true
}