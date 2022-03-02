// Run on load 
$(document).ready(() => {
    // console.log(`Testing...1,2,3, ES^ Drills!`);

    //Should log: Start of the script.js file!
    console.log(`Start of the script.js file!`);

    console.log(`--- --- ---`);

    // Template Literals and Default Parameters Value: 
    let favoriteMovie = (movie = `Black Panther`, moviemaker = `Marvel`) => {console.log(`My name is ${moviemaker} and my favorite movie is ${movie}.`); };

    //Should log: My name is Marvel and my favorite movie is Black Panther.
    favoriteMovie();

    //Should log: My name is Marvel and my favorite movie is Black Panther.
    favoriteMovie(`Black Panther`);

    //Should log: My name is Roderick and my favorite movie is Black Pantehr.
    favoriteMovie(`Black Panther`,`Roderick`)

    console.log(`--- --- ---`);
    
    // Arrow Function:
    // Should log: My name is Doug and my favorite movie is REady Player One
    favoriteMovie(`Doug`, `Ready Player One`);

    //Create getFristName
    let getFristName = (fullName) => {
         return console.log(`Your first name is, "${fullName.split(' ')[0]}".`);
    };

    //Should log My first name is, "Roderick".
    getFristName(`Roderick Hall`);

    //Create getLastName function
    let getLastName = (fullName) => console.log(`Your last name is, "${fullName.split(' ') [1]}".`);

    //Create getLastName function.
    getLastName(`Roderick Hall`);

    //Create doTheMaths Function.
    let doTheMaths = (x, y) => {
        let exponent = Math.pow(x, y);
        let product = x * y;

        //Returns object literal with exponent and product properties.
        return { exponent, product };
    };

    let results = doTheMaths(2, 3);

    //Should log: The exponent is 8.
    console.log(`The exponent is ${results.exponent}.`);
    //Should log: The product is 6.
    console.log(`The product is ${results.product}.`);

    console.log(`--- --- ---`);

    //Spread Syntax:
    let spreadArray = [ `Roderick`, `Birmingham`, `Pizza` ];

    let spreadFunction = (name, location, food) => {
        console.log(`My name is ${name}.`);
        console.log(`I live in ${location}.`);
        console.log(`My favorite food is ${food}.`);
    };

    // Should log:
    // My name is Roderick
    // I live in Birmingham
    // My foavorite food is Pizza.
     spreadFunction(...spreadArray);

    let myName = `Roderick`;

    let anotherSpreadFunction = (anotherName) => {
        console.log(`Before: ${anotherName}`);
        let spreadName = [...anotherName ];
        console.log(`After:`);
        for (let i = 0; i < spreadName.length; i += 1) {
            console.log(spreadName [i]);
        };
    };

    // Should log:
    // Before: Roderick
    // After:
    // R
    // o
    // d
    // e
    // r
    // i
    // c
    // k
    anotherSpreadFunction(myName);

    console.log(`--- --- ---`);

    // Should log: End of scripts.js file!
    console.log(`End of scripts.js file!`);
});