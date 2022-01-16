
let inputbill = document.getElementById("bill");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let numOfPeople = document.getElementById("numOfPeople");
let customInput = document.getElementById("custom");
let reset = document.getElementById("reset");
// let bill = Number (inputbill.value);
// let people = Number (numOfPeople.value);
// console.log(numOfPeople.value);


function tipCalc(per) {

    let total = (inputbill.value * (per + 1)) / numOfPeople.value //1.05
    let tipAmount =  (inputbill.value * per) / numOfPeople.value // 0.05
    

    cartona = ``
    cartona += `${tipAmount.toFixed(2)}`
    document.getElementById("tipAmount").innerText = cartona
    
    cartona2 = ``
    cartona2 += `${total.toFixed(2)}`
    document.getElementById("total").innerText = cartona2
}

function clear() {

    inputbill.value = ''
    numOfPeople.value = ''

    
    cartona = `$0.00`
    document.getElementById("tipAmount").innerText = cartona
    
    
    cartona2 = `$0.00`
    document.getElementById("total").innerText = cartona2
}


btn1.addEventListener("click" , (e) => {

        tipCalc(0.05); //per
        

    })


btn2.addEventListener("click" , (e) => {

        tipCalc(0.10);
        

    })


btn3.addEventListener("click" , (e) => {

        tipCalc(0.15);
        

    })

btn4.addEventListener("click" , (e) => {

        tipCalc(0.25);
    })


btn5.addEventListener("click" , (e) => {

        tipCalc(0.50);
    })

customInput.addEventListener("focusout" , (e) => {

    tipCalc(customInput.value / 100)
})

reset.addEventListener("click" , () => {
    clear()
})