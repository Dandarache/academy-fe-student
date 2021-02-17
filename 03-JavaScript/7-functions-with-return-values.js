function funRet1() {

    /*
        Skriv en metod "superImportant" som returnerar stjärnor och texten med stora bokstäver.

        Om den anropas såhär:

            let text = superImportant("Itch");
            console.log(text);

        Så ska följande skrivas ut:

            ****** ITCH ******
    */
}

function funRet2() {
    /*
    Modifiera "superImportant" så det går att ange om texten ska vara stor eller ej:

    Dessa anrop:

        console.log( superImportant("Service now",true) );
        console.log( superImportant("Service now",false) );
        console.log( superImportant("What does the fox says?",false) );
        console.log( superImportant("What does the fox says?",true) );

    Ska skriva ut:

        ****** SERVICE NOW ******
        ****** Service now ******
        ****** What does the fox says? ******
        ****** WHAT DOES THE FOX SAYS? ******

    */

}

function funRet3() {
    /*
    Skriv en metod "laggTillTusen" som returnerar ett värde som är tusen högre än det du skickar in

    Om den anropas såhär:

        let mittNummer = laggTillTusen(18);
        console.log(mittNummer);

    Så ska följande skrivas ut:

        1018
    */
}

function funRet4() {
    /*
    Skriv en metod "addNumbers" som returnerar summan av två tal

    Om den anropas såhär:

        let summa = addNumbers(3, 4);
        console.log(summa);

    Så ska följande skrivas ut:

        7
    
    */
}

function funRet5() {
    /*
    Skriv en metod "isMyndig" som returnerar true eller false, beroende på om personen är myndig

    Om den anropas såhär:

        let susansAge = 22;
        let myndig = isMyndig(susansAge);
        if (myndig == true) {
            console.log("Susan är myndig");
        } else {
            console.log("Susan är INTE myndig");
        }

    Så ska följande skrivas ut:

        Susan är myndig


    Extra: skapa metoden isMyndig på enklast sätt mha "=>"
   

    */
}

// -------- EXTRA UPPGIFTER -----------------------------------------

function funRetExtra1() {


    /*
    Skriv en metod "timeUntilRetirement" som returnerar tid till pension. 
    Om du skickar in ett värde som är större än 65 så returnera 0.

    Dessa anrop:

        console.log(`Antal år till pension: ${timeUntilRetirement(43)}`);
        console.log(`Antal år till pension: ${timeUntilRetirement(20)}`);
        console.log(`Antal år till pension: ${timeUntilRetirement(68)}`);
        console.log(`Antal år till pension: ${timeUntilRetirement(100)}`);

    Ska skriva ut:

        Antal år till pension: 22
        Antal år till pension: 45
        Antal år till pension: 0
        Antal år till pension: 0
    */

}

function funRetExtra2() {

    /*
    I denna uppgift ska du skapa två metoder "beräknaMoms" och "skrivUtProduktInfo"
    Syftet är att separera logik. "beräknaMoms" ska inte skriva ut något utan bara vara ansvarig för att beräkna momsen.
    Tips: Du kan låta "skrivUtProduktInfo" anropa "beräknaMoms"

    Detta:

        skrivUtProduktInfo("tidning", 1000);
        skrivUtProduktInfo("restaurangbesök", 1000);
        skrivUtProduktInfo("flyg", 1000);
        skrivUtProduktInfo("falafel", 1000);
        skrivUtProduktInfo("hipsteröl", 1000);

    Ska ge:

        Momsen för en/ett tidning som kostar 1000kr är 60kr
        Momsen för en/ett restaurangbesök som kostar 1000kr är 120kr
        Momsen för en/ett flyg som kostar 1000kr är 60kr
        Momsen för en/ett falafel som kostar 1000kr är 250kr
        Momsen för en/ett hipsteröl som kostar 1000kr är 250kr
    */

}