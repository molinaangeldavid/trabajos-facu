let operator = "";
let result = 0
let touchbutton = false

const setOperator = (clickId=0) => {
    const firstNumber = document.getElementById("fn").value
    const secondNumber = document.getElementById("sn").value
    switch(clickId){
        case "add":
            operator = "+"
            result =  parseInt(firstNumber) + parseInt(secondNumber)
            break
        case "sub":
            operator = "-"
            result = firstNumber - secondNumber
            break
        case "pr":
            operator = "*"
            result = firstNumber * secondNumber
            break
        default:
            operator = "/"
            result = firstNumber / secondNumber
            break
    }
}

const getResult = () => { 
    if(operator == ""){
        document.getElementById("result").innerHTML = ""
        document.getElementById("result").innerHTML = "Debe presionar uno de los botones de operacion"    
    }else{
        if(/\D/.test(result)){
            document.getElementById("result").innerHTML = ""
            document.getElementById("result").innerHTML = "Debe ingresar solo numeros"
        }else{
            document.getElementById("result").innerHTML = ""
            const firstNumber = document.getElementById("fn").value
            const secondNumber = document.getElementById("sn").value
            document.getElementById("result").innerHTML = `${firstNumber} ${operator} ${secondNumber} = ${result}`
        }
    }
}
