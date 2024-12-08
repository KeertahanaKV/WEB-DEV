const questions=[
    {
        question:"Which is the largest animal in the world?",
        answers:[ 
            {text: "Shark", correct:false},
            {text: "Elephant", correct:false},
            {text: "Blue whale", correct:true},
            {text: "Giraffe", correct:false},
        ]
    },
    {
        question:"Which is the smallest continent in the world?",
        answers:[ 
            {text: "Asia", correct:false},
            {text: "Australia", correct:true},
            {text: "USA", correct:false},
            {text: "Africa", correct:false},
        ]
    },
    {
        question:"Which is the largest desert in the world?",
        answers:[ 
            {text: "Kalahari", correct:false},
            {text: "gobi", correct:false},
            {text: "sahara", correct:false},
            {text: "Antartica", correct:true },
        ]
    }
    
];
const questionElement=document.getElementById("Question")
const answerButton=document.getElementById("answer-button")
const nextButtton=document.getElementById("nxt-btn")

let  currentQestionIndex=0;
let score=0;

function startQuiz(){
    currentQestionIndex=0;
    score=0;
    nextButtton.innerHTML="Next"
    showQuestion();
   
}

function showQuestion(){
    resetState();
    let currentQuestion =questions[currentQestionIndex];
    let qno=currentQestionIndex+1;
    // By assigning a value to questionElement.innerHTML, you replace the content inside the questionElement.
    questionElement.innerHTML=qno+". "+currentQuestion.question;
    
    currentQuestion.answers.forEach(answers=>{
        const button=document.createElement("button");
        button.innerHTML=answers.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
     if(answers.correct){
        button.dataset.correct=answers.correct;
     }
     button.addEventListener("click",selectAnswer)
    })
    
}
function resetState(){
    nextButtton.style.display="none";
    questionElement.innerHTML="";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectAnswer(e){
     const selectedBtn=e.target;
     const isCorrect=selectedBtn.dataset.correct=="true";
     if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
     }
     else{
        selectedBtn.classList.add('incorrect');
     }
     Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct=="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
     });
     nextButtton.style.display="block"
}
function  showScore(){
    resetState();
    questionElement.innerHTML= `You scored ${score} out of ${questions.length}!`
    nextButtton.innerHTML="Play again"
    nextButtton.style.display="block"
}
function handleNextButton(){
    currentQestionIndex++;
    if(currentQestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
nextButtton.addEventListener("click",()=>{
    if(currentQestionIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})
startQuiz();
