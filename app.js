const question = "ゲーム市場、最も売れたゲーム機は次のうちどれ？";

const answers = ["A", "B", "C", "D"];

const correct = "A";

const $button = document.getElementsByTagName("button");
const btnlength = $button.length;


// クイズの問題文の定義
const setupQuiz = () =>{
document.getElementById("js-question").textContent = question;
let btnIndex =0;
while(btnIndex < btnlength ){
  $button[btnIndex].textContent = answers[btnIndex];
  btnIndex++;
}}
setupQuiz();


const clickHandler  =(e) => {
  if (correct === e.target.textContent) {
    window.alert("正解");
  } else {
    window.alert("不正解");
  }
};
// クリックイベント(正誤判定)

let handlerIndex = 0;
while(handlerIndex < btnlength) {
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}