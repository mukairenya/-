const subjectInput = document.getElementById("subjectInput");
const scoreInput = document.getElementById("scoreInput");
const addButton = document.getElementById("addButton");
const scoreTable = document.getElementById("scoreTable");
const errorMessage = document.getElementById("errorMessage");

const subjects = {};

addButton.addEventListener("click", function () {

  const subject = subjectInput.value.trim();
  const scoreText = scoreInput.value.trim();
  const score = Number(scoreText);

  errorMessage.textContent = "";

  // 教科名が空欄
  if (subject === "") {
    errorMessage.textContent =
      "エラー：教科名を入力してください。";

    subjectInput.value = "";
    scoreInput.value = "";
    return;
  }

  // 点数が空欄
  if (scoreText === "") {
    errorMessage.textContent =
      "エラー：点数を入力してください。";

    subjectInput.value = "";
    scoreInput.value = "";
    return;
  }

  // 点数が0～100の範囲外
  if (
    !Number.isInteger(score) ||
    score < 0 ||
    score > 100
  ) {
    errorMessage.textContent =
      "エラー：点数は0点以上100点以下で入力してください。";

    subjectInput.value = "";
    scoreInput.value = "";
    return;
  }


  // 新しい教科なら列を作る
  if (!subjects[subject]) {

    subjects[subject] = {
      column: Object.keys(subjects).length,
      scores: []
    };

    if (scoreTable.rows.length === 0) {
      scoreTable.insertRow();
    }

    for (const row of scoreTable.rows) {
      row.insertCell();
      row.insertCell();
    }
  }


  const data = subjects[subject];
  const rowNumber = data.scores.length;


  // 必要な行を作る
  while (scoreTable.rows.length <= rowNumber) {

    const row = scoreTable.insertRow();

    for (
      let i = 0;
      i < Object.keys(subjects).length * 2;
      i++
    ) {
      row.insertCell();
    }
  }


  const row = scoreTable.rows[rowNumber];


  // 教科
  const subjectCell = row.cells[data.column * 2];

  subjectCell.textContent = subject;
  subjectCell.classList.add("subject");


  // 点数
  const scoreCell = row.cells[data.column * 2 + 1];

  scoreCell.textContent = score;
  scoreCell.classList.add("score");


  // 80点以上なら黄色
  if (score >= 80) {
    scoreCell.classList.add("high-score");
  }


  // 点数を保存
  data.scores.push(score);


  // 入力欄を空にする
  subjectInput.value = "";
  scoreInput.value = "";

  subjectInput.focus();

});