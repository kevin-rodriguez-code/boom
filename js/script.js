const userInput = document.getElementById("userInput");
const countdown = document.getElementById("countdown");
const result = document.getElementById("result");
const restart = document.getElementById("restart");

let selectedNumber = 0;

userInput.addEventListener("change", () => {
    selectedNumber = parseInt(userInput.value);
});

const printCountdown = () => {
    let counter = 5;
    const countdownInterval = setInterval(() => {
        if (counter >= 0) {
            countdown.innerHTML = `<p class="red">Cuenta atras: ${counter} segundos</p>`;
            counter--;
        } else {
            clearInterval(countdownInterval);
        }
    }, 1000);
};

const startGame = () => {
    printCountdown();
    const correctNumber = new Promise((resolve) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 3) + 1
            resolve(randomNumber);
        }, 6000);
    });
    return correctNumber;
};

const printResult = (correctNumberParameterPromiseResult) => {
    const isMatchNumber = correctNumberParameterPromiseResult == selectedNumber;
    if (isMatchNumber) {
        result.innerHTML = `<p class="green">Has salvado al mundo!!! :D</p>
      <p>Tu número ${selectedNumber} es el mismo que el número ${correctNumberParameterPromiseResult}</p>
      `
    } else {
        result.innerHTML = `<p class="red">Oh no!La bomba ha estallado, TODOS MUERTOS!!! ;(</p>
    <p>Tu número ${selectedNumber} NO es el mismo que el número ${correctNumberParameterPromiseResult}</p>
    `
    }
}

startGame().then((correctNumberPromiseResult) => {
    printResult(correctNumberPromiseResult)
});

restart.addEventListener("click", () => location.reload())