
function obj1() {
    
    /*
        Skapa ett objekt "person" med uppgifter om Johan Rheborg: förnamn, efternamn, födelseår
        Skriv ut förnamnet
        Skriv ut hans fullständiga namn
    */

    let person = {
        firstName: 'Johan',
        lastName: 'Rheborg',
        born: 1963
    }
    console.log(person.firstName);
    console.log(`${person.firstName} ${person.lastName}`);
}

function obj2() {

    /*
       Fortsätt bygg vidare på "person"
       Lägg till ett par rollkaraktärer till objektet "person" (Percy Nilegård, Farbror Barbro...)
       Lägg till adressuppgifter (street, city, country)

       Skriv ut info om Johan utifrån objektet "person":
            Johan är född år 1963
            Johan bor på gatan Kammakargatan 38 lgh 1401
            Johan har spelat 3 roller, bland annat Percy Nilegård
    */
    let person = {
        firstName: 'Johan',
        lastName: 'Rheborg',
        born: 1963,
        characters: ['Percy Nilegård', 'Farbror Barbro', 'Kenny Starfighter'],
        adress: {
            street: 'Kammakargatan 38 lgh 1401',
            city: 'Stockholm',
            country: 'Sweden'
        }
    }
    console.log(`${person.firstName} är född år ${person.born}`);
    console.log(`${person.firstName} bor på gatan ${person.adress.street}`);
    console.log(
        `${person.firstName} har spelat ${person.characters.length} roller, bland annat ${person.characters[0]}`);
}


function obj3() {

    /*
       Skapa en array "paintings" med tre målningar (tre element)
       För varje målning finns info: namn, konstnär och året den blev målad
       Skriv ut antalet målningar: "Det finns 3st målningar i arrayen"
       Skriv ut info om den tredje målningen: "Pablo Picasso målade Guernica år 1937"
       Loopa igenom alla målningar med "for of" och skriv ut all info i tabellform
       Tips: använd "padEnd" för att skriva ut tabellen snyggt
    */
    let paintings = [
        {
            name: "Stjärnenatt",
            artist: "Vincent van Gogh",
            year: 1889
        },
        {
            name: "Nattvarden",
            artist: "Leonardo da Vinci",
            year: 1499
        },
        {
            name: "Gurenica",
            artist: "Pablo Picasso",
            year: 1937
        }
    ];
    console.log(`Det finns ${paintings.length}st målningar i arrayen`);
    console.log(`${paintings[2].artist} målade ${paintings[2].name} år ${paintings[2].year}`);
    for (let p of paintings) {
        console.log(`${p.name.padEnd(20)}${p.artist.padEnd(20)}${p.year}`);
    }
}

function obj4() {

    /*
       Skapa ett objekt "skriet" (av Edvard Munch 1893). Lägg till den i "paintings" mha "push".
       Skriv ut dess år mha variablen "paintings" (alltså 1893) 
       Använd "pop" flera gånger för att plocka bort de tre sista målningarna
       Skriv ut antalet målningar i arrayen 
    */
    let paintings = [
        {
            name: "Stjärnenatt",
            artist: "Vincent van Gogh",
            year: 1889
        },
        {
            name: "Nattvarden",
            artist: "Leonardo da Vinci",
            year: 1499
        },
        {
            name: "Gurenica",
            artist: "Pablo Picasso",
            year: 1937
        }
    ];
    let skriet = {
        name: "Skriet",
        artist: "Edvard Munch",
        year: 1893
    };
    paintings.push(skriet);
    console.log(paintings[3].year);

    paintings.pop();
    paintings.pop();
    paintings.pop();
    console.log(paintings.length);
}

