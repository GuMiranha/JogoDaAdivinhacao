const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const RandomNumber = Math.round(Math.random() * 10)
let x = 1;

//funçao callback
function handleTryClick(event) {
    event.preventDefault()

    const inputNamber = document.querySelector("#inputNumber")

    if(Number(inputNamber.value) == RandomNumber) {
        screen1.classList.add("hide")
        screen2.classList.remove("hide")

        document.querySelector(".screen2 h2")
        .innerText = `acertou em ${x} tentativas! ` 
    }
    inputNamber.value =""
    x++


    
}

//eventos
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")


btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', function() {
    screen1.classList.remove("hide")
    screen2.classList.add("hide")
    x = 1

})
