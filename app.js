const quiz = [
  {
    question: 'what color is sky?',
    corrans: 'blue',
    wroans1: 'white',
    wroans2: 'black',
    wroans3: 'green'
  },
  {
    question: 'Does Human have a tail?',
    corrans: 'no',
    wroans1: 'a long one',
    wroans2: 'a short one',
    wroans3: 'a very long tail'
  },
  {
    question: 'what color is sky?',
    corrans: 'blue',
    wroans1: 'white',
    wroans2: 'black',
    wroans3: 'green'
  },
  {
    question: 'what color is sky?',
    corrans: 'blue',
    wroans1: 'white',
    wroans2: 'black',
    wroans3: 'green'
  }
]

const question = document.querySelector('.question')
const answer = document.querySelectorAll('.answer')
const button = document.querySelector('.next')
const score = document.querySelector('.score')

answer[1].style.order = `${Math.floor(Math.random() * 4) || -1}`

let i = 0
let scorecount = 0

function quizrun(){
  question.innerText = `${quiz[i].question}`
  answer[0].innerText =`${quiz[i].wroans1}`
  answer[2].innerText =`${quiz[i].wroans2}`
  answer[3].innerText =`${quiz[i].wroans3}`
  answer[1].innerText =`${quiz[i].corrans}`

  scorecount++;
  i++;

  score.innerText = `Your Score Is : ${scorecount}`

  answer.forEach(answer => {

    answer.addEventListener('click', () => {

      if(answer.id === 'correct'){

        answer.classList.add('correct')

      } else {

        answer.classList.add('wrong')

      }

    })

  })
    
  
  if(i >= quiz.length){
    
    i = 0;
    scorecount = 0
  
  }

}

quizrun();

button.addEventListener('click', quizrun)