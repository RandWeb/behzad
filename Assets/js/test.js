let songs = [
  {
    song: "./Assets/sounds/1.mp3",
    name: "name 1",
  },
  {
    song: "./Assets/sounds/2.mp3",
    name: "name 2",
  },
  {
    song: "./Assets/sounds/3.mp3",
    name: "name 3",
  },
  {
    song: "./Assets/sounds/4.mp3",
    name: "name 4",
  },
  {
    song: "./Assets/sounds/1.mp3",
    name: "name 1",
  },
  {
    song: "./Assets/sounds/2.mp3",
    name: "name 2",
  },
  {
    song: "./Assets/sounds/3.mp3",
    name: "name 3",
  },
  {
    song: "./Assets/sounds/4.mp3",
    name: "name 4",
  },
  {
    song: "./Assets/sounds/1.mp3",
    name: "name 1",
  },
  {
    song: "./Assets/sounds/2.mp3",
    name: "name 2",
  },
  {
    song: "./Assets/sounds/3.mp3",
    name: "name 3",
  },
  {
    song: "./Assets/sounds/4.mp3",
    name: "name 4",
  },
  {
    song: "./Assets/sounds/1.mp3",
    name: "name 1",
  },
  {
    song: "./Assets/sounds/2.mp3",
    name: "name 2",
  },
  {
    song: "./Assets/sounds/3.mp3",
    name: "name 3",
  },
  {
    song: "./Assets/sounds/4.mp3",
    name: "name 4",
  },
  {
    song: "./Assets/sounds/1.mp3",
    name: "name 1",
  },
  {
    song: "./Assets/sounds/2.mp3",
    name: "name 2",
  },
  {
    song: "./Assets/sounds/3.mp3",
    name: "name 3",
  },
  {
    song: "./Assets/sounds/4.mp3",
    name: "name 4",
  },
  {
    song: "./Assets/sounds/1.mp3",
    name: "name 1",
  },
  {
    song: "./Assets/sounds/2.mp3",
    name: "name 2",
  },
  {
    song: "./Assets/sounds/3.mp3",
    name: "name 3",
  },
  {
    song: "./Assets/sounds/4.mp3",
    name: "name 4",
  },
  {
    song: "./Assets/sounds/1.mp3",
    name: "name 1",
  },
  {
    song: "./Assets/sounds/2.mp3",
    name: "name 2",
  },
  {
    song: "./Assets/sounds/3.mp3",
    name: "name 3",
  },
  {
    song: "./Assets/sounds/4.mp3",
    name: "name 4",
  },
  {
    song: "./Assets/sounds/1.mp3",
    name: "name 1",
  },
  {
    song: "./Assets/sounds/2.mp3",
    name: "name 2",
  },
  {
    song: "./Assets/sounds/3.mp3",
    name: "name 3",
  },
  {
    song: "./Assets/sounds/4.mp3",
    name: "name 4",
  },
  {
    song: "./Assets/sounds/1.mp3",
    name: "name 1",
  },
  {
    song: "./Assets/sounds/2.mp3",
    name: "name 2",
  },
  {
    song: "./Assets/sounds/3.mp3",
    name: "name 3",
  },
  {
    song: "./Assets/sounds/4.mp3",
    name: "name 4",
  },
  {
    song: "./Assets/sounds/1.mp3",
    name: "name 1",
  },
  {
    song: "./Assets/sounds/2.mp3",
    name: "name 2",
  },
  {
    song: "./Assets/sounds/3.mp3",
    name: "name 3",
  },
  {
    song: "./Assets/sounds/4.mp3",
    name: "name 4",
  },
  {
    song: "./Assets/sounds/1.mp3",
    name: "name 1",
  },
  {
    song: "./Assets/sounds/2.mp3",
    name: "name 2",
  },
  {
    song: "./Assets/sounds/3.mp3",
    name: "name 3",
  },
  {
    song: "./Assets/sounds/4.mp3",
    name: "name 4",
  },
  {
    song: "./Assets/sounds/1.mp3",
    name: "name 1",
  },
  {
    song: "./Assets/sounds/2.mp3",
    name: "name 2",
  },
  {
    song: "./Assets/sounds/3.mp3",
    name: "name 3",
  },
  {
    song: "./Assets/sounds/4.mp3",
    name: "name 4",
  },
  {
    song: "./Assets/sounds/1.mp3",
    name: "name 1",
  },
  {
    song: "./Assets/sounds/2.mp3",
    name: "name 2",
  },
  {
    song: "./Assets/sounds/3.mp3",
    name: "name 3",
  },
  {
    song: "./Assets/sounds/4.mp3",
    name: "name 4",
  },
];

const persianChars = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
let container = document.getElementsByClassName("main-conatiner")[0];
let buttons = document.getElementsByClassName("buttons")[0];
const request = indexedDB.open("tasks", 1);
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");
let guess = document.getElementById("guess");
const audio = document.getElementById("audio");
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
songs = shuffle(songs);
let tempSong = songs;
let resultBlock = [];
let numberOfSongs = 51;
let tasks = [];
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
    traial.index = i;
    traial.song = songs[numberOfSongs];
    songs.pop(songs[numberOfSongs]);
    numberOfSongs--;
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

let counter = 0;

let allowedPressSpace = false;
let rt = 0;
let selectedBlock;

let displayTime = 100;
let guessTimeGap = 100;
let guessDisplayTime = 100;
let trialInterval = 100;
let blockTimeStep =
  4 * (displayTime + guessTimeGap + guessDisplayTime + trialInterval);
const intervalTask = setInterval(() => {
  if (timer == blockTimeStep) {
    timer = 0;
  }
  if (timer < blockTimeStep) {
    selectedBlock = tasks[0];
    handlerStep(selectedBlock);
  } else if (timer < 2 * blockTimeStep && timer >= blockTimeStep) {
    selectedBlock = tasks[1];
    handlerStep(selectedBlock);
  } else if (timer < blockTimeStep * 3 && timer >= 2 * blockTimeStep) {
    selectedBlock = tasks[2];
    handlerStep(selectedBlock);
  } else if (timer < blockTimeStep * 4 && timer >= 3 * blockTimeStep) {
    selectedBlock = tasks[3];
    handlerStep(selectedBlock);
  } else if (timer < blockTimeStep * 5 && timer >= 4 * blockTimeStep) {
    selectedBlock = tasks[4];
    handlerStep(selectedBlock);
  } else if (timer < blockTimeStep * 6 && timer >= 5 * blockTimeStep) {
    selectedBlock = tasks[5];
    handlerStep(selectedBlock);
  } else if (timer < blockTimeStep * 7 && timer >= 6 * blockTimeStep) {
    selectedBlock = tasks[6];
    handlerStep(selectedBlock);
  } else if (timer < blockTimeStep * 8 && timer >= 7 * blockTimeStep) {
    selectedBlock = tasks[7];
    handlerStep(selectedBlock);
  } else if (timer < blockTimeStep * 9 && timer >= 8 * blockTimeStep) {
    selectedBlock = tasks[8];
    handlerStep(selectedBlock);
  } else if (timer < blockTimeStep * 10 && timer >= 9 * blockTimeStep) {
    selectedBlock = tasks[9];
    handlerStep(selectedBlock);
  } else if (timer < blockTimeStep * 11 && timer >= 10 * blockTimeStep) {
    selectedBlock = tasks[10];
    handlerStep(selectedBlock);
  } else if (timer < blockTimeStep * 12 && timer >= 11 * blockTimeStep) {
    selectedBlock = tasks[11];
    handlerStep(selectedBlock);
  } else if (timer < blockTimeStep * 13 && timer >= 12 * blockTimeStep) {
    selectedBlock = tasks[12];
    handlerStep(selectedBlock);
  }
  timer = 1 + timer;
});
let rtt = 0;
let indexOfBlock = 0;
let hasCallTrial1 = false;
let hasCallGuess1 = false;
let hasCallTraial2 = false;
let hasCallGuess2 = false;
let hasCallTrial3 = false;
let hasCallGuess3 = false;
let hasCallTrial4 = false;
let hasCallGuess4 = false;
let selectedtrial;
function handlerStep(block) {
  if (!hasCallTrial1 && timer == 0) {
    allowedPressSpace = false;
    rtt = Date.now();
    selectedtrial = block[0];
    showTraials();
    console.log(selectedtrial["number"]);
    indexOfBlock++;
    counter++;
    hasCallTrial1 = true;
  } else if (!hasCallGuess1 && timer == displayTime + guessTimeGap) {
    allowedPressSpace = true;
    rt = Date.now();
    selectedtrial = block[0];
    showGuess();
    console.log(selectedtrial["guess"]);
    indexOfBlock++;
    counter++;
    hasCallGuess1 = true;
  } else if (
    !hasCallTraial2 &&
    timer == displayTime + guessTimeGap + guessDisplayTime + trialInterval
  ) {
    allowedPressSpace = false;
    selectedtrial = block[1];
    showTraials();
    console.log(selectedtrial["number"]);
    indexOfBlock++;
    counter++;
    hasCallTraial2 = true;
  } else if (
    !hasCallGuess2 &&
    timer == 2 * (displayTime + guessTimeGap) + guessDisplayTime + trialInterval
  ) {
    allowedPressSpace = true;
    rt = Date.now();
    selectedtrial = block[1];
    showGuess();
    console.log(selectedtrial["guess"]);
    indexOfBlock++;
    counter++;
    hasCallGuess2 = true;
  } else if (
    !hasCallTrial3 &&
    timer == 2 * (displayTime + guessTimeGap + guessDisplayTime + trialInterval)
  ) {
    allowedPressSpace = false;
    selectedtrial = block[2];
    showTraials();
    console.log(selectedtrial["number"]);
    indexOfBlock++;
    counter++;
    hasCallTrial3 = true;
  } else if (
    !hasCallGuess3 &&
    timer ==
      3 * (displayTime + guessTimeGap) + 2 * (guessDisplayTime + trialInterval)
  ) {
    allowedPressSpace = true;
    rt = Date.now();
    selectedtrial = block[2];
    showGuess();
    console.log(selectedtrial["guess"]);
    indexOfBlock++;
    counter++;
    hasCallGuess3 = true;
  } else if (
    !hasCallTrial4 &&
    timer == 3 * (displayTime + guessTimeGap + guessDisplayTime + trialInterval)
  ) {
    allowedPressSpace = false;
    selectedtrial = block[3];
    showTraials();
    console.log(selectedtrial["number"]);
    indexOfBlock++;
    counter++;
    hasCallTrial4 = false;
  } else if (
    !hasCallGuess4 &&
    timer ==
      4 * (displayTime + guessTimeGap) + 3 * (guessDisplayTime + trialInterval)
  ) {
    allowedPressSpace = true;
    rt = Date.now();
    selectedtrial = block[3];
    showGuess();
    console.log(selectedtrial["guess"]);
    indexOfBlock = 0;
    counter++;
    console.log(Date.now() - rtt);
    hasCallTrial1 = false;
    hasCallGuess1 = false;

    hasCallTraial2 = false;
    hasCallGuess2 = false;

    hasCallTrial3 = false;
    hasCallGuess3 = false;

    hasCallTrial4 = false;
    hasCallGuess4 = false;
  }
}

setInterval(() => {
  if (counter == 51) {
    clear();
  }
});

function showTraials() {
  //showContainer();
  num1.classList.remove("btn-hidden");
  num2.classList.remove("btn-hidden");
  num3.classList.remove("btn-hidden");
  num1.innerText = persianChars[selectedtrial.number[0]];
  num2.innerText = persianChars[selectedtrial.number[1]];
  num3.innerText = persianChars[selectedtrial.number[2]];
  buttons.classList.add("btn-hidden");
  buttons.classList.remove("btn-visible");
}

function showGuess() {
  //showContainer();
  num1.classList.add("btn-hidden");
  num2.classList.add("btn-hidden");
  num3.classList.add("btn-hidden");
  buttons.classList.remove("btn-hidden");
  buttons.classList.add("btn-visible");
  guess.innerText = persianChars[selectedtrial.guess];
}
let indexOfPressSpace = 0;
document.addEventListener("keydown", (e) => {
  if (e.code == "Space" && allowedPressSpace == true) {
    let isInValid = selectedtrial.number.indexOf(selectedtrial.guess) === -1;
    selectedtrial.rt = Date.now() - rt;
    selectedtrial.isCorrect = !isInValid;
    selectedtrial.insertTime = Date.now();
    //resultBlock.push(`traial ${1} `, selectedtrial);
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
