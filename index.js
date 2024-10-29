function BMIstandart (b){
    if(b<=18.4){
        var content = "Underweight"
    }
    else if(b>18.5 && b<=24.9){
        var content = "Normal"
    }
    else if(b>25 && b<=39.9){
        var content = "Overweight"
    }
    else{
        var content = "Obese"
    }

    return content


}

function calculate1 () {
    let wight = document.getElementById('input-weight').value
    let hight = document.getElementById('input-hight').value
    
    let BMI = wight/(hight*hight)
    
    let result = BMIstandart (BMI)
    let content = `<p>Your BMI is ${BMI} <br>
    Result is ${result}<br>
    Wigth is ${wight} <br>
    Hight is ${hight}</p>`

    display.innerHTML = content
}