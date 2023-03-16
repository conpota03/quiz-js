window.onload = () =>{
  window.alert("準備ができたらOKを押してください。春に関する3択クイズ!(ランダム5問)が始まります。");
    countUp("timer");
  };

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
var No = document.getElementById("Qno");
let quizIndex = 0;
let score = 0;
let timerId;
let startTime = new Date().getTime();
let QnoIndex = 1;

// クイズ数
const $button = document.getElementsByTagName("button");
const btnlength = $button.length;



// タイマーカウント
const countUp = (id) => {
  const $target = document.getElementById(id);
  let count = 0;
  timerId = setInterval(() => {
    count += 0.01;
    $target.textContent = count.toFixed(2);
  }, 10);
};
const stopCountUp = () => {
  clearInterval(timerId);
}

document.getElementById("Qno").innerHTML = "今5問中"+ QnoIndex + "問名";

// クイズの問題文の定義
quiz.sort(() => Math.random() - 0.5);
const quizLength = quiz.length;
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
  QnoIndex++;
  document.getElementById("Qno").innerHTML = "今5問中"+ QnoIndex + "問名";
  }else{
// 問題数がなければ実行
let endTime = new Date().getTime();
let elapsedTime = (endTime - startTime) / 1000;
const d = new Date();
stopCountUp();
window.alert(`終了。あなたの${d.getMonth() + 1}月${d.getDate()}日時点の正解数は${score}/${quizLength}で、最後のクイズまでの所要時間は${elapsedTime}秒、回答にかかった時間は${document.getElementById("timer").textContent}秒、でした。`);
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
