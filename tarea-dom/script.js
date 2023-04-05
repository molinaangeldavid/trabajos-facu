const funcionPrimerEjercicio = () => {
    alert(document.getElementById("valor1").value)
}

const funcionSegundoEjercicio = () => {
    let edad = document.getElementById("edad").value
    let edadResultado = document.getElementById("edadResultado")
    if (parseInt(edad) >= 18){
        edadResultado.value = "Mayor de edad"
    }else{
        edadResultado.value = "Menor de edad"
    }
}

const funcionTercerEjercicio = () => {
    let nota = document.getElementById("nota").value
    let notaResultado = document.getElementById("resultadoNota")
    if (parseInt(nota) >= 0 && parseInt(nota) < 5){
        notaResultado.value = "Insuficiente"
    }else if (parseInt(nota) > 4 && parseInt(nota) < 7){
        notaResultado.value = "Suficiente"
    }else if (parseInt(nota) > 6 && parseInt(nota) < 11){
        notaResultado.value = "Sobresaliente"
    }
}

const funcionCuartoEjercicio = () => {
    let numero1 = document.getElementById("valor2").value
    let numero2 = document.getElementById("valor3").value
    let resultado = document.getElementById("resultado2y3")
    if (parseInt(numero1) > parseInt(numero2)){
        resultado.value = "El primero es Mayor"
    }else if(parseInt(numero1) < parseInt(numero2)){
        resultado.value = "El segundo es mayor"
    }else if(numero1 == numero2){
        resultado.value = "Son iguales"
    }
}

const funcionQuintoEjercicio = () => {
    let texto = document.getElementById("texto-ejercicio5")
    let colortexto = document.getElementById("colores").value
    switch(colortexto){
        case "Marron":
            texto.style.color = "brown"
            break
        case "Rojo":
            texto.style.color = "red"
            break
        case "Amarillo":
            texto.style.color = "yellow"
            break
        case "Azul":
            texto.style.color = "blue"
            break
        case "Cyan":
            texto.style.color = "cyan"
            break
    }
}
const captarCuadrado = id => {
    switch(id){
        case "1":
            return document.getElementById("c1")
        case "2":
            return document.getElementById("c2")
        case "3":
            return document.getElementById("c3")
        case "4":
            return document.getElementById("c4")
        case "5":
            return document.getElementById("c5")
        case "6":
            return document.getElementById("c6")            
    }
}

const funcionSextoEjercicio = () => {
    
    let opcion = document.getElementById("cuadrado-numero").value
    let colorCuadro = document.getElementById("color-cuadro").value
    let cuadrado = captarCuadrado(opcion)

    switch(colorCuadro){
        case "red":
            cuadrado.style.backgroundColor = "red"
            break
        case "blue":
            cuadrado.style.backgroundColor = "blue"
            break
        case "cyan":
            cuadrado.style.backgroundColor = "cyan"
            break
        case "yellow":
            cuadrado.style.backgroundColor = "yellow"
            break
        case "purple":
            cuadrado.style.backgroundColor = "purple"
            break
        case "gray":
            cuadrado.style.backgroundColor = "gray"
            break
    }
}