function ageWarning(nombre,age){
if (age >= 18) {
    console.log('Hola '+nombre+', eres mayor de edad.');
} else {
    console.log('Hola '+nombre+', eres menor de edad.');
    }
}

ageWarning('Fernando', 38)
    

function topNumber(numberA, numberB) {
    if (numberA > numberB) {
        console.log(numberA);
    } else {
        console.log(numberB);
    }
}

topNumber(27,38)


function positiveOrNegative(numberC) {
    if (numberC < 0) {
        console.log('Número negativo');
    } else if (numberC > 0) {
        console.log('Número positivo');
    } else {
        console.log('Cero');
    }
}

positiveOrNegative(-10)


function notaFinal(notaA, notaB, notaC) {
    if ((notaA + notaB + notaC) / 3 < 5) {
        console.log('Suspenso');
    } else if ((notaA + notaB + notaC) / 3 >= 5 && (notaA + notaB + notaC) / 3 < 8) {
        console.log('Aprobado');
    } else if ((notaA + notaB + notaC) / 3 >= 8) {
        console.log('Matrícula de honor');
    }
}

notaFinal(9,7,10)


function topOfThree(numberD, numberE, numberF) {
    if (numberD > numberE && numberD > numberF) {
        console.log(numberD);
    } else if (numberE > numberD && numberE > numberF) {
        console.log(numberE);
    } else if (numberF > numberD && numberF > numberE) {
        console.log(numberF);
    }
}

topOfThree(34,20,21)


function multipleOf(toDivide) {
    if (toDivide % 3 === 0 && toDivide % 5 === 0) {
        console.log('Es divisible por 3 y por 5');
    } else if (toDivide % 3 === 0) {
        console.log('Es divisible por 3');
    } else if (toDivide % 5 === 0) {
        console.log('Es divisible por 5');
    } else {
        console.log(toDivide)
    }
}

multipleOf(15)


function itsOdd(toCheck) {
    if (toCheck % 2 === 0) {
        console.log('Es un número par');
    } else {
        console.log('Es un número impar');
    }
}

itsOdd(18)


function esBisiesto(year) {
    if (year % 4 === 0 && year % 100 !== 0) {
        console.log('Es un año bisiesto');
    } else if (year % 4 === 0 && year % 400 === 0){
        console.log('Es un año bisiesto');
    } else {
        console.log('No es un año bisiesto');
    }
}

esBisiesto(500)
