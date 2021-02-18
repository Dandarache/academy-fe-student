
function cond1() {

    /*
	    Skapa en variabel shoeMaria och sätt till 36
	    Skapa en variabel shoeAli och sätt till 42
	    Skriv en if-sats som kollar om de har samma skostorlek (skriv ut olika texter)
	    Experimentera med att ändra värden på "shoeMaria" och "shoeAli"
    */
    let shoeMaria = 36;
    let shoeAli = 42;

    if (shoeMaria === shoeAli) {
        console.log("De har samma skostorlek");
    } else {
        console.log("De har olika skostorlek");
    }
}

function cond2() {

    /*
      	Skapa en variabel shoeMaria 
	    Skapa en variabel shoeAli 

        Beroende på vilken skostorlek som är störst skriv ut

        "Ali har större fötter än Maria"    
        "Maria har större fötter än Ali"
    */
    let shoeMaria = 36;
    let shoeAli = 42;

    if (shoeAli > shoeMaria) {
        console.log("Ali har större fötter än Maria");
    } else {
        console.log("Maria har större fötter än Ali");
    }
}

function cond3() {

    /*
	    Samma som sist, men kolla även om de har samma skostorlek

        "Ali har större fötter än Maria"
        "Maria har större fötter än Ali"
        "De har samma skostorlek"

    */
    let shoeMaria = 36;
    let shoeAli = 42;

    if (shoeAli > shoeMaria) {
        console.log("Ali har större fötter än Maria");
    } else if (shoeAli === shoeMaria) {
        console.log("De har samma skostorlek");
    } else {
        console.log("Maria har större fötter än Ali");
    }
}

function cond4() {

    /*
        Skapa tre variabler: shoeMaria, shoeAli, bigFoot 

	    Skriv en if-sats som kolla om bigFoot har större skostorlek än både Ali och Maria
    */
    let shoeMaria = 36;
    let shoeAli = 42;
    let bigFoot = 52;

    if (bigFoot > shoeAli && bigFoot > shoeMaria) {
        console.log("Bigfoot har större fötter än både Ali och Maria");
    }
}

function cond5() {

    function someHigh(number, ...variables) {
        for (let v of variables) {
            if (v > number)
                return true;
        }
        return false;
    }

    /*
	    Skriv en ifsats som kollar om någon av Ali, Maria eller BigFoot har en skostorlek som är större än 50

        Extra: 
        1) lös denna uppgift genom att skapa en egen metod "someHigh" som tar flera parametrar. Använd sedan den såhär:

            if (someHigh(50, bigFoot, shoeAli, shoeMaria))
                console.log("Någon av de tre har riktigt stora fötter");

        2) lös denna uppgift med ".some"
        
    */
    let shoeMaria = 36;
    let shoeAli = 42;
    let bigFoot = 52;

    if (bigFoot > 50 || shoeAli > 50 || shoeMaria > 50) 
        console.log("Någon av de tre har riktigt stora fötter");

    // Alternativ 1
    //if (someHigh(50, bigFoot, shoeAli, shoeMaria)) 
    //    console.log("Någon av de tre har riktigt stora fötter");

    // Alternativ 2
    //if ([bigFoot, shoeAli, shoeMaria].some(x => x > 50))
    //    console.log("Någon av de tre har riktigt stora fötter");

}


function cond6() {

    /*
	    Skapa en variabel "favoriteVegetable" och sätt den till "kålrot"
	    Använd en switch-sats för att kolla värdet på "favoriteVegetable" och svara på olika sätt
	    Om t.ex värdet av "favoriteVegetable" är "majrova" skriv "Passar till falafel"
    */
    let favoriteVegetable = 'kålrot';

    switch (favoriteVegetable) {
    case "rotselleri":
        console.log("Den smakar tvål");
        break;
    case "kålrot":
        console.log("Söt och go");
        break;
    case "majrova":
        console.log("Passar till falafel");
        break;
    case "potatis":
        console.log("Trist val");
        break;
    default:
        console.log("Va det känner jag inte till");
        break;
    }
}

function cond7() {

    /*
	    Samma som sist men skapa först en variabel "answer"
	    Istället för att använda "console.log" inuti switch-satsen så sätt variabel "answer"
	    Använd tillslut "console.log" för att skriva ut värdet av "answer"
    */
    let favoriteVegetable = 'kålrot';
    let answer = '';
    switch (favoriteVegetable) {
    case "rotselleri":
        answer = "Den smakar tvål";
        break;
    case "kålrot":
        answer = "Söt och go";
        break;
    case "majrova":
        answer = "Passar till falafel";
        break;
    case "potatis":
        answer = "Trist val";
        break;
    default:
        answer = "Va det känner jag inte till";
        break;
    }
    console.log(answer);
}

function cond8() {


    /*
	    Jämför == och === i en ifsats
	    Testa med en ifsats om 3=="3" är sant
	    Testa med en ifsats om 3==="3" är sant
    */
    //if (3 == "3") {
    //    console.log(`Detta stämmer: 3=="3"`);
    //}

    //if (3 === "3") {
    //    console.log(`Detta stämmer: 3==="3"`);
    //}
}

function cond9() {

    /*
	    Övning i "ternary operator"
	    Skapa en variabel a och sätt den till 13*13
	    Skapa en variabel b och sätt den till 169
	    Använd "ternary operator" för att kolla om de är lika. Lägg svaret (strängen "lika" eller "olika") i en variabel "result"
	    Skriv ut result
    */
    let a = 13 * 13;
    let b = 169;
    let result = a === b ? 'Lika' : 'Olika';
    console.log(result);

}