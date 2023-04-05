let operator = "";
let result = 0

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

    if (isNaN(result)){
        document.getElementById("result").innerHTML = ""
        document.getElementById("result").innerHTML = "<span>Debe ingresar solo numeros</span>"
    }else{
        if(/\D/.test(firstNumber) || /\D/.test(secondNumber)){
            document.getElementById("result").innerHTML = ""
            document.getElementById("result").innerHTML = "</span>Debe ingresar solo numeros</span>"
        }else if(/\d/.test(firstNumber) && /\d/.test(secondNumber)){
            document.getElementById("result").innerHTML = ""
            const firstNumber = document.getElementById("fn").value
            const secondNumber = document.getElementById("sn").value
            document.getElementById("result").innerHTML = `<span>${firstNumber} ${operator} ${secondNumber} = ${result}</span>`
        }
    }
            
}
            