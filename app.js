// クイズの問題文、選択肢、正解を定義
const quiz = [
  {
    question: '次のうち桜はどれでしょうか',
    answers: [ 'ソメイヨシノ', 'ポインセチア', 'シクラメン'],
    correct: 'ソメイヨシノ'
  }, {
    question: '数の子は何の卵でしょうか？',
    answers: [ 'イワシ', 'タイ', 'ニシン'],
    correct: 'ニシン'
  }, {
    question: '春が旬の果物はどれでしょうか？',
    answers: [ 'スイカ', 'ユズ', '夏ミカン'],
    correct: '夏ミカン'
  }, {
    question: '花粉が一日のうちに一番多く飛んでいるのはいつの時間帯でしょうか？',
    answers: [ '早朝', '夜', '昼'],
    correct: '昼'
  }, {
    question: '立春から春分にかけて吹く強い風のことをなんという？',
    answers: [ '春一番', '春台風', '春元気'],
    correct: '春一番'
  }
];
quiz.sort(() => Math.random() - 0.5);

const quizLength = quiz.length;
const d =new Date();
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName("button");
const btnlength = $button.length;

// クイズの問題文の定義
let startTime = d.getTime();
const setupQuiz = () =>{
document.getElementById("js-question").textContent = quiz[quizIndex].question;
let btnIndex =0;
while(btnIndex < btnlength ){
  $button[btnIndex].textContent = quiz[quizIndex].answers[btnIndex];
  btnIndex++;
}}
setupQuiz();

const clickHandler  =(e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("正解");
    score++;
  } 
  else {
    window.alert("不正解");
  }

  quizIndex++;

  if(quizIndex < quizLength) {
  // 問題文があれば実行
  setupQuiz();
  }else{
// 問題数がなければ実行
let endTime = d.getTime();
let elapsedTime = (endTime - startTime) / 1000;
window.alert(`終了。あなたの${d.getMonth() + 1}月${d.getDate()}日時点の正解数は${score}/${quizLength}で、所要時間は${elapsedTime}秒でした。`);
}
};
// クリックイベント正誤判定

let handlerIndex = 0;
while(handlerIndex < btnlength) {
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
