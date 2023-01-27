import question from "./js/ListQuestion.js"

const questionText = document.getElementById("question")
const answers = document.querySelectorAll(".answers")

let currentNumber = 1;
let currentAnswer;
let clicked = false;

function questionFunc() {
    requestAnimationFrame(questionFunc)

    questionText.innerText = question[currentNumber].question
    currentAnswer = question[currentNumber].answer


    answers[0].innerText = question[currentNumber].a
    answers[1].innerText = question[currentNumber].b
    answers[2].innerText = question[currentNumber].c
    answers[3].innerText = question[currentNumber].d

    answers.forEach((data) => {
        data.addEventListener("click", (e) => {
            if (e.target.classList.contains(currentAnswer)) {
                clicked = true
                e.target.classList.add("correct")
            } else {
                clicked = true
                e.target.classList.add("incorrect")
            }
        })

        
        if (clicked) {
            clicked = false
            setTimeout(() => {
                currentNumber += 1
                console.log(currentNumber);
                
                if (data.classList.contains("correct") || data.classList.contains("incorrect")) {
                    data.classList.remove("correct")
                    data.classList.remove("incorrect")
                }
            }, 1000);
            }
    })
}

questionFunc()