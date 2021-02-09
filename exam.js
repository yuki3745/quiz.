const quiz=[
  {
  question:"Increased ______ of racial diversity in society has made pople more aware of some critical racial issues.",
  answers:[
    "vision",
    "visual",
    "visibility",
    "visible"
  ],
  correct:"visibility"
},{
  question:"The labor union demanded that their salary ______ immediately, but the employer would not listen to them.",
  answers:[
    "was raised",
    "be raised",
    "raise",
    "is raised"
  ],
  correct:"be raised",
},{
  question:"______ you have lost the voucher for this cruise, your purchase is invalid.",
  answers:[
    "Unfortunately",
    "If",
    "Likewise",
    "Accordingly"
  ],
  correct:"If"
}
];

let quizIndex=0;
let score=0;

const $button=document.getElementsByTagName("button");

//クイズの問題、選択肢を定義
const setupQuiz=()=>{
  // Questionを問題文として反映させる
  document.getElementById("sub-question").textContent=quiz[quizIndex].question;

  //選択肢を反映させる
  let buttonIndex=0;
  while(buttonIndex<$button.length){
    $button[buttonIndex].textContent=quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};
setupQuiz();

// ボタンクリック時の正誤判定
const clickHandler = (e)=>{
  if(quiz[quizIndex].correct===e.target.textContent){
      window.alert("正解！");
      score++;
    }else{
      window.alert("不正解");
  }
  quizIndex++;
  if(quizIndex<quiz.length){
    setupQuiz();
  }else{
    window.alert("終了！あなたのScoreは"+score+"/"+quiz.length+"です");
  }
};

let handlerIndex=0;
while(handlerIndex<$button.length){
  $button[handlerIndex].addEventListener('click',(e)=>{
    clickHandler(e);
  });
    handlerIndex++;
};
