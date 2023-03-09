const quiz = [
  {
    question: '次のうち桜はどれでしょうか',
    answers: [ 'ソメイヨシノ', 'ポインセチア', 'シクラメン'],
    correct: 'ソメイヨシノ'
  },
  {
    question: '数の子は何の卵でしょうか？',
    answers: [ 'イワシ', 'タイ', 'ニシン'],
    correct: 'ニシン'
  },
  {
    question: '春が旬の果物はどれでしょうか？',
    answers: [ 'スイカ', 'ユズ', '夏ミカン'],
    correct: '夏ミカン'
  }
];

const $question = document.getElementById('js-question');
const $buttons = document.querySelectorAll('.js-answer');
const $result = document.getElementById('js-result');

const shuffledQuiz = shuffle(quiz);
const quizLength = shuffledQuiz.length;
let quizIndex = 0;
let score = 0;

// Fisher-Yatesアルゴリズムによる配列のシャッフル
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// クイズの問題文と選択肢をセット
function setQuiz() {
  $question.textContent = shuffledQuiz[quizIndex].question;
  $buttons.forEach((button, index) => {
    button.textContent = shuffledQuiz[quizIndex].answers[index];
  });
}

// 正解の場合の処理
function handleCorrectAnswer() {
  window.alert('正解！');
  score++;
}

// 不正解の場合の処理
function handleIncorrectAnswer() {
  window.alert('不正解！');
}

// クイズの結果を表示
function showResult() {
  $result.textContent = `あなたの正解数は${score} / ${quizLength}です！`;
}

// クイズの初期化
function initQuiz() {
  setQuiz();
  $result.textContent = '';
}

// ボタンがクリックされたときの処理
$buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (shuffledQuiz[quizIndex].correct === button.textContent) {
      handleCorrectAnswer();
    } else {
      handleIncorrectAnswer();
    }
    quizIndex++;
    if (quizIndex < quizLength) {
      setQuiz();
    } else {
      showResult();
    }
  });
});

// クイズの初期化
initQuiz();
