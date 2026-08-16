const subjectInput = document.getElementById("subject");
const scoreInput = document.getElementById("score");
const addButton = document.getElementById("addButton");
const error = document.getElementById("error");
const scoreList = document.getElementById("scoreList");

addButton.addEventListener("click", function() {

  const subject = subjectInput.value.trim();
  const scoreText = scoreInput.value;

  // 点数を数値にする
  const score = Number(scoreText);

  // エラーチェック
  if (
    subject === "" ||
    scoreText === "" ||
    score < 0 ||
    score > 100 ||
    !Number.isInteger(score)
  ) {
    error.textContent =
      "教科名と0～100の整数を入力してください。";

    subjectInput.value = "";
    scoreInput.value = "";

    return;
  }

  // エラーを消す
  error.textContent = "";

  // 同じ教科があるか調べる
  const items = document.querySelectorAll(".subject-item");

  for (let i = 0; i < items.length; i++) {

    if (items[i].dataset.subject === subject) {

      const scores = items[i].querySelector(".scores");

      const newScore = document.createElement("span");
      newScore.textContent = score + "点";

      // 80点以上ならhigh-score
      if (score >= 80) {
        newScore.classList.add("high-score");
      }

      // 区切り
      scores.appendChild(document.createTextNode("、"));

      // 点数を追加
      scores.appendChild(newScore);

      subjectInput.value = "";
      scoreInput.value = "";

      return;
    }
  }

  // 同じ教科がなかった場合、新しく作る
  const item = document.createElement("li");

  item.classList.add("subject-item");

  // 教科名を保存
  item.dataset.subject = subject;

  // 教科名
  const subjectName = document.createElement("strong");
  subjectName.textContent = subject + "：";

  // 点数を入れる場所
  const scores = document.createElement("span");
  scores.classList.add("scores");

  // 点数
  const newScore = document.createElement("span");
  newScore.textContent = score + "点";

  // 80点以上ならhigh-score
  if (score >= 80) {
    newScore.classList.add("high-score");
  }

  scores.appendChild(newScore);

  item.appendChild(subjectName);
  item.appendChild(scores);

  // 一覧に追加
  scoreList.appendChild(item);

  // 入力欄を空にする
  subjectInput.value = "";
  scoreInput.value = "";
});