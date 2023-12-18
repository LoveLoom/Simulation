const questions = [
  {
    question: "عند اضافة الشخصية character يظهر ازرار عددهم",
    options: ["1", "2", "3", "4"],
    answer: "4",
  }, // question 1
  {
    question: "من الازرار التي تظهر عند اضافة الشخصية character",
    options: ["Rotater", "Translation mode", "Selector", "Movior"],
    answer: "Translation mode",
  }, // question 2
  {
    question: "سحب الكاىنات لفوق تتم من خلال",
    options: ["Drag to left", "Drag to scale ", "Drag & Drop", "Drag to right"],
    answer: "Drag to left",
  }, // question 3
  {
    question:
      "يوجد العديد من الخصائص للكائنات تختلف من كائن لاخر يتم التعرف عليها من خلال",
    options: ["Click", "Double Click", "Right click", "Left click"],
    answer: "Right click",
  }, // question 4
];
let index = 0;
let score = 0;
let maxScore = questions.length;
let checkAnswer = " ";
nextButton = document.querySelector(".next-button");

function displayQuestion(index) {
  document.querySelector(".question-place").innerHTML =
    questions[index].question;
  document.querySelector(".answer-1").innerHTML = questions[index].options[0];
  document.querySelector(".answer-2").innerHTML = questions[index].options[1];
  document.querySelector(".answer-3").innerHTML = questions[index].options[2];
  document.querySelector(".answer-4").innerHTML = questions[index].options[3];
}

function displayScore() {
  document.querySelector(".app").style.display = "none";
  document.querySelector(".review").style.display = "flex";
  if (score === maxScore) {
    document.querySelector(".awesome").style.display = "flex";
    document.querySelector(".awesome").textContent = "Awesome!";
    document.querySelector(".awesome").style.background = "green";
  } else if (score === 0) {
    document.querySelector(".awesome").style.display = "flex";
    document.querySelector(".awesome").textContent = "None Brain ?";
    document.querySelector(".awesome").style.background = "red";
  }
  document.querySelector(".score").textContent = score;
  document.querySelector(".max-score").textContent = maxScore;
}

function changeBg(element) {
  resetBg();
  element.style.background = "#01255c";
  element.style.color = "#fff";
  checkAnswer = element.textContent;
}

function resetBg() {
  answer1.style.background = "#fff";
  answer1.style.color = "#01255c";

  answer2.style.background = "#fff";
  answer2.style.color = "#01255c";

  answer3.style.background = "#fff";
  answer3.style.color = "#01255c";

  answer4.style.background = "#fff";
  answer4.style.color = "#01255c";
}

answer1 = document.querySelector(".answer-1");
answer1.addEventListener("click", function () {
  changeBg(answer1);
});

answer2 = document.querySelector(".answer-2");
answer2.addEventListener("click", function () {
  changeBg(answer2);
});

answer3 = document.querySelector(".answer-3");
answer3.addEventListener("click", function () {
  changeBg(answer3);
});

answer4 = document.querySelector(".answer-4");
answer4.addEventListener("click", function () {
  changeBg(answer4);
});

nextButton.addEventListener("click", function () {
  if (nextButton.textContent === "Start") {
    index = 0;
    displayQuestion(index);
    document.querySelectorAll(".btn").forEach(function (element) {
      element.style.display = "inline";
    });
    nextButton.textContent = "Next";
  } else if (index === questions.length) {
    nextButton.textContent = "Finish";
  } else if (nextButton.textContent === "Next") {
    if (checkAnswer === questions[index].answer) {
      score++;
    }
    resetBg();
    index++;
    displayQuestion(index);
    if (index === questions.length - 1) {
      nextButton.textContent = "Finish";
    }
  } else if (nextButton.textContent === "Finish") {
    if (checkAnswer === questions[index].answer) {
      score++;
    }
    displayScore();
  }
});
