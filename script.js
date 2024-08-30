const answerGroup = document.querySelector('.answer-group');
const answers = answerGroup.querySelectorAll('.answer');
const accept = answerGroup.querySelector('.accept');
answers.forEach((answer)=> {
    answer.addEventListener('click', ()=> {
        answers.forEach((el)=> el.classList.remove('choice'));
        answer.classList.add('choice');
        accept.setAttribute('data-correct', answer.getAttribute('data-correct'))
    });
});
accept.addEventListener('click', ()=>{
    let correct = accept.getAttribute('data-correct');
    if(correct != null) {
        if(correct === 'true') {
            showGameAnswer(true);
            hideGameQuest();
        } else {
            showGameAnswer(false);
            hideGameQuest()
        }
    }
})


const btnBack = document.querySelector('.btn-back');
const btnSound = document.querySelector('.btn-sound');
const progrBar = document.querySelector('.progress-bar');
const soundInfo = document.querySelector('.sound-info');
const btnLight = document.querySelector('.btn-light');


//btn light
btnLight.addEventListener('click', ()=> {
    btnLight.classList.toggle('no-light');
    document.body.classList.toggle('light-off');

})
//btn back
function showBtnBack(){
    btnBack.classList.remove('hidden');
}
function hideBtnBack(){
    btnBack.classList.add('hidden');
}

//progress bar
function showProgBar(){
    progrBar.classList.remove('hidden');
}
function hideProgBar(){
    progrBar.classList.add('hidden');
}
function setProgress(count) {
    progrBar.querySelector('.progress-bar-line').style.width = `${count}%`;
}

//btn sound
btnSound.addEventListener('click', ()=> soundInfo.classList.add('hidden'));

//game-start 
const gameStart = document.querySelector('.game-start');

function showGameStart() {
    gameStart.classList.remove('hidden');
    hideBtnBack();
    hideProgBar();
    
}
function hideGameStart() {
    gameStart.classList.add('hidden'); 
    soundInfo.classList.add('hidden');
}

//game-question
const gameQuest = document.querySelector('.game-question');
function hideGameQuest() {
    gameQuest.classList.add('hidden'); 
}
function showGameQuest() {
    gameQuest.classList.remove('hidden'); 
    showProgBar();
    showBtnBack();
}

///game-answer
const gameAnswer = document.querySelector('.game-answer');

function hideGameAnswer() {
    gameAnswer.classList.add('hidden'); 
    
}
function showGameAnswer(correct) {
    gameAnswer.classList.remove('answer-right'); 
    gameAnswer.classList.remove('answer-no-right'); 
    if(correct) {
        gameAnswer.classList.add('answer-right'); 
    } else {
        gameAnswer.classList.add('answer-no-right'); 
    }
    gameAnswer.classList.remove('hidden'); 
    
};
//game end 
const gameEnd = document.querySelector('.game-end');

function showGameEnd() {
    gameEnd.classList.remove('hidden');
    hideProgBar();
}
function hideGameEnd() {
    gameEnd.classList.add('hidden')
}
