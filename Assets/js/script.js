
const persianChars = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
let startBtn = document.getElementById("start-btn");
let trialContainer = document.getElementById("traial");
let container = document.getElementsByClassName("main-conatiner")[0];
let guessContainer = document.getElementById("guess-container");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");
let guess = document.getElementById("guess");
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

let resultBlock = [];
let tasks = [];
let it = 1;
for (let taskOfIndex = 0; taskOfIndex < 13; taskOfIndex++) {
  let block = [];
  for (let i = 0; i < 4; i++) {
    let numbers = [];
    let traial = {};
    while (numbers.length < 3) {
      let number = Math.floor(Math.random() * 9) + 0;
      if (numbers.indexOf(number) === -1) numbers.push(number);
    }
    traial.number = numbers;
    traial.guess = -1;
    traial.index = it++;
    block.push(traial);
  }
  let randomOfblock = Math.floor(Math.random() * 4) + 0;
  let randomOfblockOFItem = Math.floor(Math.random() * 3) + 0;
  block[randomOfblock].guess =
    block[randomOfblock]["number"][randomOfblockOFItem];

  block = block.map((traial) => {
    if (traial.guess != -1) return traial;
    let correct = true;
    while (correct) {
      let number = Math.floor(Math.random() * 9) + 0;
      if (traial.number.indexOf(number) === -1) {
        traial.guess = number;
        correct = false;
      }
    }
    return traial;
  });
  tasks.push(block);
}
let randomOfTask = Math.floor(Math.random() * 9) + 0;

let timer = 0;

let allowedPressSpace = false;
let rt = 0;
let selectedBlock;
let selectedtrial;
let displayTime = 100;
let guessTimeGap = 100;
let guessDisplayTime = 100;
let trialInterval = 100;
let blockTimeStep =
  4 * (displayTime + guessTimeGap + guessDisplayTime + trialInterval);
let indexOfTrial = 1;
tasks = shuffle(tasks);
let intervalTask;
function RunApplication() {
  intervalTask = setInterval(() => {
    if (timer == blockTimeStep) {
      timer = 0;
    }
    if (indexOfTrial == 1) {
      selectedBlock = tasks[0];
      handlerStep(selectedBlock);
    } else if (indexOfTrial == 2) {
      selectedBlock = tasks[1];
      handlerStep(selectedBlock);
    } else if (indexOfTrial == 3) {
      selectedBlock = tasks[2];
      handlerStep(selectedBlock);
    } else if (indexOfTrial == 4) {
      selectedBlock = tasks[3];
      handlerStep(selectedBlock);
    } else if (indexOfTrial == 5) {
      selectedBlock = tasks[4];
      handlerStep(selectedBlock);
    } else if (indexOfTrial == 6) {
      selectedBlock = tasks[5];
      handlerStep(selectedBlock);
    } else if (indexOfTrial == 7) {
      selectedBlock = tasks[6];
      handlerStep(selectedBlock);
    } else if (indexOfTrial == 8) {
      selectedBlock = tasks[7];
      handlerStep(selectedBlock);
    } else if (indexOfTrial == 9) {
      selectedBlock = tasks[8];
      handlerStep(selectedBlock);
    } else if (indexOfTrial == 10) {
      selectedBlock = tasks[9];
      handlerStep(selectedBlock);
    } else if (indexOfTrial == 11) {
      selectedBlock = tasks[10];
      handlerStep(selectedBlock);
    } else if (indexOfTrial == 12) {
      selectedBlock = tasks[11];
      handlerStep(selectedBlock);
    } else if (indexOfTrial == 13) {
      selectedBlock = tasks[12];
      handlerStep(selectedBlock);
    }
    timer = 1 + timer;
  });

  let indexOfBlock = 0;
  let hasCallTrial1 = false;
  let hasCallGuess1 = false;
  let hasCallTraial2 = false;
  let hasCallGuess2 = false;
  let hasCallTrial3 = false;
  let hasCallGuess3 = false;
  let hasCallTrial4 = false;
  let hasCallGuess4 = false;

  function handlerStep(block) {
    if (!hasCallTrial1 && timer == 0) {
      allowedPressSpace = false;
      selectedtrial = block[0];
      showTraials();

      indexOfBlock++;
      hasCallTrial1 = true;
    } else if (!hasCallGuess1 && timer == displayTime + guessTimeGap) {
      allowedPressSpace = true;
      rt = Date.now();
      selectedtrial = block[0];
      showGuess();

      indexOfBlock++;
      hasCallGuess1 = true;
    } else if (
      !hasCallTraial2 &&
      timer == displayTime + guessTimeGap + guessDisplayTime + trialInterval
    ) {
      allowedPressSpace = false;
      selectedtrial = block[1];
      showTraials();

      indexOfBlock++;
      hasCallTraial2 = true;
    } else if (
      !hasCallGuess2 &&
      timer ==
        2 * (displayTime + guessTimeGap) + guessDisplayTime + trialInterval
    ) {
      allowedPressSpace = true;
      rt = Date.now();
      selectedtrial = block[1];
      showGuess();

      indexOfBlock++;
      hasCallGuess2 = true;
    } else if (
      !hasCallTrial3 &&
      timer ==
        2 * (displayTime + guessTimeGap + guessDisplayTime + trialInterval)
    ) {
      allowedPressSpace = false;
      selectedtrial = block[2];
      showTraials();

      indexOfBlock++;
      hasCallTrial3 = true;
    } else if (
      !hasCallGuess3 &&
      timer ==
        3 * (displayTime + guessTimeGap) +
          2 * (guessDisplayTime + trialInterval)
    ) {
      allowedPressSpace = true;
      rt = Date.now();
      selectedtrial = block[2];
      showGuess();

      indexOfBlock++;
      hasCallGuess3 = true;
    } else if (
      !hasCallTrial4 &&
      timer ==
        3 * (displayTime + guessTimeGap + guessDisplayTime + trialInterval)
    ) {
      allowedPressSpace = false;
      selectedtrial = block[3];
      showTraials();

      indexOfBlock++;
      hasCallTrial4 = false;
    } else if (
      !hasCallGuess4 &&
      timer ==
        4 * (displayTime + guessTimeGap) +
          3 * (guessDisplayTime + trialInterval)
    ) {
      allowedPressSpace = true;
      rt = Date.now();
      selectedtrial = block[3];
      showGuess();
      indexOfBlock = 0;
      hasCallTrial1 = false;
      hasCallGuess1 = false;

      hasCallTraial2 = false;
      hasCallGuess2 = false;

      hasCallTrial3 = false;
      hasCallGuess3 = false;

      hasCallTrial4 = false;
      hasCallGuess4 = false;
      ++indexOfTrial;
    }
  }
}

setInterval(() => {
  if (indexOfTrial == 14) {
    clear();
  }
});

function showTraials() {

  play();
  num1.classList.remove("btn-hidden");
  num2.classList.remove("btn-hidden");
  num3.classList.remove("btn-hidden");
  num1.innerText = persianChars[selectedtrial.number[0]];
  num2.innerText = persianChars[selectedtrial.number[1]];
  num3.innerText = persianChars[selectedtrial.number[2]];
  guessContainer.classList.add("btn-hidden");
  guessContainer.classList.remove("btn-visible");
}

function showGuess() {
  //showContainer();

    console.log(selectedtrial);
  num1.classList.add("btn-hidden");
  num2.classList.add("btn-hidden");
  num3.classList.add("btn-hidden");
  guessContainer.classList.remove("btn-hidden");
  guessContainer.classList.add("btn-visible");
  guess.innerText = persianChars[selectedtrial.guess];
}
let indexOfPressSpace = 0;
document.addEventListener("keydown", (e) => {
  if (e.code == "Space" && allowedPressSpace == true) {
    let isInValid = selectedtrial.number.indexOf(selectedtrial.guess) === -1;
    selectedtrial.rt = Date.now() - rt;
    selectedtrial.isCorrect = !isInValid;
    selectedtrial.insertTime = Date.now();

    localStorage.setItem(
      `traial ${indexOfPressSpace}`,
      JSON.stringify(selectedtrial)
    );
    indexOfPressSpace++;
  }
});

function hideContainer() {
  container.classList.add("btn-hidden");
}

function showContainer() {
  container.classList.remove("btn-hidden");
}

function clear() {
  clearInterval(intervalTask);
  let h1Elem = document.createElement("h1");
  h1Elem.innerText = "تمام";
  container.innerHTML = "";
  container.appendChild(h1Elem);
}

function play() {
  let myAudio = document.getElementById(selectedtrial.index);
  let playPromise = myAudio.play();
  if (playPromise !== undefined) {
    playPromise
      .then(function () {})
      .catch(function (error) {
        console.log(error);
      });
  }
}

startBtn.addEventListener("click", () => {
  trialContainer.classList.remove("d-none");
  startBtn.classList.add("d-none");
  RunApplication();
});

function pause() {
  audio.pause();
  audio.removeAttribute("src");
}

