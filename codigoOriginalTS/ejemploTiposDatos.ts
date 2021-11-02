/* TIPOS BÁSICOS */

console.log('Inicio de ejemploTiposDatos');

// STRING
var cadenaJ = "Cadena de texto en JavaScript";
var cadenaT: string = "Cadena de texto en TypeScript";

console.log(cadenaJ);
console.log(cadenaT);

// NUMBERS
var numeroJ = 1;
var numeroT: number = 2.8;

console.log('Número en JavaScript: ' + numeroJ);
console.log('Número en TypeScript: ' + numeroT);

// BOOLEAN 
var booleanJ = true;
var booleanT: boolean = false;

console.log('Boolean en JavaScript: ' + booleanJ);
console.log('Boolean en TypeScript: ' + booleanT);

// ARRAY
var arrayJ = ["es", "un", "array", "en", "JavaScript"];
var arrayT: Array<string> = ["si", "es", "un", "array", "en", "TypeScript"];

console.log('Array en JavaScript: ' + arrayJ);
console.log('Array en TypeScript: ' + arrayT);

var OTROarrayJ = [1, "un", 3, "en", 4];
var OTROarrayT: Array<string | number> = [1, "un", 2, "en", 5];

console.log('Array con diferentes tipos de datos en JavaScript: ' + OTROarrayJ);
console.log('Array con diferentes tipos de datos en TypeScript: ' + OTROarrayT);

// NULL
var nullJ = null;
var nullT: null = null;

var anuloJ = "no es nulo";
console.log("Variable nula en JavaScript: " + anuloJ);
anuloJ = null;
console.log("Variable nula en JavaScript: " + anuloJ);

var anuloT: string | null = "no es nulo";
console.log("Variable nula en TypeScript: " + anuloT);
anuloT = null;
console.log("Variable nula en TypeScript: " + anuloT);

//ANY
var anyT: any = "hola";
console.log("Variable tipo 'any' de TypeScript: " + anyT);
anyT = 3;
console.log("Variable tipo 'any' de TypeScript: " + anyT);

var arrayAny: Array<any> = [true, 2, "cadena"];
console.log("Array tipo 'any' de TypeScript: " + arrayAny);

console.log('Fin de ejemploTiposDatos...');