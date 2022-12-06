// La idea de este archivo es poder ser reutilizada en un futuro como control de stock de un mayorista

alert("Bienvenido al control de stock/calculadora")

let calculo = prompt("Para realizar una suma coloque 1, para una division 2, para una resta 3, para una multiplicacion 4")

validarCalculo(calculo)

let consultarStock = prompt("Para consultar el stock de los vinos marque 1, para las espumantes marque 2 , para las cervezas marque 3 o marque otro caracter y finalizara el programa")

while (consultarStock == 1 || consultarStock == 2 || consultarStock == 3){
    if (consultarStock == 1){
        console.log("Hay 15 vinos en stock")
    }else if (consultarStock == 2){
        console.log("Hay 7 espumantes en stock")
    }else if (consultarStock == 3){
        console.log("Hay 23 cervezas en stock")
    }
    consultarStock = prompt("Para consultar el stock de los vinos marque 1, para las espumantes marque 2 , para las cervezas marque 3 o marque otro caracter y finalizara el programa")
}

alert("Muchas gracias por haber visitado nuestro programa!")

function validarCalculo (calculo) {
    if (calculo == 1)  {
        let primerNumero = prompt("Coloque el primer numero que desea sumar")
        let segundoNumero = prompt("Coloque el segundo numero que desea sumar")
        suma(parseInt(primerNumero) , parseInt(segundoNumero))
    } else if (calculo == 2) {
        let primerNumero = prompt("Coloque el primer numero que desea dividir")
        let segundoNumero = prompt("Coloque por el numero que desea dividir")
        division(parseInt(primerNumero) , parseInt(segundoNumero))
    } else if (calculo == 3) {
        let primerNumero = prompt("Coloque el primer numero que desea restar")
        let segundoNumero = prompt("Coloque el segundo numero que desea restar")
        resta(parseInt(primerNumero) , parseInt(segundoNumero))
    }else if (calculo == 4) {
        let primerNumero = prompt("Coloque el primer numero que desea multiplicar")
        let segundoNumero = prompt("Coloque el segundo numero que desea multiplicar")
        multiplicacion(parseInt(primerNumero) , parseInt(segundoNumero))
    } else {
        let revalidacion = prompt("No seleccionó ningun numero valido, si quiere volver a realizar una consulta, presione 1, de lo contrario terminara el programa")
        if (revalidacion == 1){
            let calculo = prompt("Para realizar una suma coloque 1, para una division 2, para un promedio 3, para una multiplicacion 4")
            validarCalculo(calculo)
        }else{
            alert("Muchas gracias por haber utilizado nuestro calculador!")
        }
    }
}


function suma(primerNumero, segundoNumero){
    let suma = primerNumero + segundoNumero
    console.log("El resultado de la suma es :", suma)
}

function division(primerNumero, segundoNumero){
    let division = primerNumero/segundoNumero
    console.log("El resultado de la division es :", division)
}

function resta(primerNumero, segundoNumero){
    let resta = primerNumero-segundoNumero;
    console.log("El resultado de la resta es :", resta)
}

function multiplicacion(primerNumero, segundoNumero){
    let multiplicacion = primerNumero*segundoNumero;
    console.log("El resultado de la multiplicacion es :", multiplicacion)
}