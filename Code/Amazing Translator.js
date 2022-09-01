//Code for software application "Amazing Translator" by Matt Kennedy //

//Array of French translations zero through to thirty. Zero is a place holder and is not used in the translation process//
const frenchTranslation = ["Zero", "Un","Deux","Trois","Quatre","Cinq","Six","Sept","Huit","Neuf","Dix","Onze","Douze","Treize","Quatorze","Quinze","Seize","Dix-sept","Dix-huit","Dix-neuf",
"Vingt","Vingt et un","Vingt-deux","Vingt-trois","Vingt-quatre","Vingt-cinq","Vingt-six","Vingt-sept","Vingt huit","Vingt-neuf","Trente"];
//Arrray for the German Translations zero through to thirty. Zero is a place holder and is not used in the translations//
const germanTranslation = ["Null","Eins","Zwei","Drei","Vier","Fünf","Sechs","Sieben","Acht","Neun","Zehn","Elf","Zwölf","Dreizehn","Vierzehn","Fünfzehn","Sechzehn","Siebzehn","Achtzehn","Neunzehn",
"Zwanzig","Einundzwanzig","Zweiundzwanzig","Dreiundzwanzig","Vierundzwanzig","Fünfundzwanzig","Sechsundzwanzig","Siebenundzwanzig","Achtundzwanzig","Neunundzwanzig","Dreiβig"];
//Beginning of the function//
function translate() {
    //User enters a number to translate, the prompt also appears in the console log as well//
    var number = prompt("Please enter a number to translate");
    console.log("Please enter a number to translate");
    console.log(number);
        //Looking for a number 1 up to an including 30//
    if (number >= 1 && number <= 30) {
            //then prompting for the users choice and puts the prompt question in the console log as well //
        var lang = prompt("Please enter the language (german/french)");
        console.log("Please enter the language (german/french)");
        console.log(lang);
        //selecting the translated number and using the users entered number to select the corresponding positon of the array//
        if (lang === "german"){

            var german= germanTranslation[number];

        } else if(lang === "french"){

            var french= frenchTranslation[number];

        } else {
                //Error message if neither french or german is specifically entered and restart//
            console.log("Please enter german or french");
            return translate();
        }
    }   //if the number is not a digit ie a letter or string of letters, return the error message and restarts the function//
    if (isNaN(number)){

        console.log("Please enter an digit");
       
        return translate(number,lang);
        //if the number is a number but outside 1 and 30, return the error message and restarts the function//
        } else if (number < 1 || number > 30){

            console.log("Please enter an integer between 1 and 30");
            return translate(number,lang);
            }
    //the translated nuumber whether it is german or french//
    var translatedNumber= (german || french);
    
    return translatedNumber;
}
//function callback to the the translators final result.//   
var result= translate(); {
//a result will only return if it is defined by function and the user has followed the process correctly//
if (result !== undefined)
console.log("The translation is "+result);
//unable to get the actual key press to function.//
prompt("Hit a key to exit");
console.log("Hit a key to exit"); 

//coded out//
/*addEventListener('keydown',endProgram); 

function endProgram(){

}

//could not get code working for the event of pressing any key*/


}
//end of code//


