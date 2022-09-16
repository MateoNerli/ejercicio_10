let nombre = "Programacion " + "facil.";
let saludo = "Les doy la bienvenida a ";
let año = " 2022"
let frase = saludo + nombre + año;

console.log(frase);
let frase1 = "JavaScript " + " es un lenguaje " + " esencial para crear " + " sitios web poderosos";

console.log(frase1);

let numero1 = '10';
let numero2 = '20';
let numero3 = '30';

let juntar = numero1 + numero2 + numero3;
console.log(juntar);

/*var age = prompt("cuantos años tenes?");
console.log(age);*/

let edad;
res = prompt("Desea ingresar a la pagina");

while (res == "si") {
    sexo = prompt("Intoroduce tu sexo");
    edad = prompt("Intoroduce tu edad");

    if (sexo == "M" && edad >= 18) {
        alert("Puedes entrar");
    }
    else if (sexo == "F" && edad >= 20) {
        alert("Puedes entrar");
    }
    else {
        alert("No puedes entrar");
    }

    res = prompt("Desea ingresar a la pagina");
}