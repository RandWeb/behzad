const persianChars = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
let container = document.getElementsByClassName("main-conatiner")[0];
let buttons = document.getElementsByClassName("buttons")[0];

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");
let guess = document.getElementById("guess");
const audio = document.getElementById("audio");
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

localStorage.setItem("tasks", JSON.stringify(tasks));
let randomOfTask = Math.floor(Math.random() * 9) + 0;
let timer = 0;
let interval = setInterval(() => {
  timer = 1 + timer;
  if (timer == 13) {
    console.log(timer);
  }
  if (timer == 26) {
    console.log(timer);
  }
  if (timer == 39) {
    console.log(timer);
  }
  if (timer == 52) {
    console.log(timer);
  }
});
/*
let response = block;
let counter = 0;
let rt = 0;

let selectedBlock;
let allowedPressSpace = false;

let interval = setInterval(() => {
  timer = 1 + timer;
  if (timer == 1) {
    pause();
    allowedPressSpace = false;
    selectedBlock = response[counter];
    showTraials(selectedBlock);
    counter++;
  }

  if (timer == 2) {
    play();
    allowedPressSpace = true;
    rt = Date.now();
    showGuess(selectedBlock);
  }

  if (timer == 4) {
    pause();
    allowedPressSpace = false;
    selectedBlock = response[counter];
    showTraials(selectedBlock);
    counter++;
  }

  if (timer == 5) {
    play();
    rt = Date.now();
    allowedPressSpace = true;
    showGuess(selectedBlock);
  }

  if (timer == 7) {
    pause();
    allowedPressSpace = false;
    selectedBlock = response[counter];
    showTraials(selectedBlock);
    counter++;
  }

  if (timer == 8) {
    play();
    allowedPressSpace = true;
    rt = Date.now();
    showGuess(selectedBlock);
  }
  if (timer == 10) {
    pause();
    allowedPressSpace = false;
    selectedBlock = response[counter];
    showTraials(selectedBlock);
    counter++;
  }

  if (timer == 11) {
    play();
    allowedPressSpace = true;
    rt = Date.now();
    showGuess(selectedBlock);
  }
  if (timer == 13) {
    clear();
    pause();
    allowedPressSpace = false;
    isShowBlock = false;
    localStorage.setItem(`step ${1}`, JSON.stringify(resultBlock));
  }
}, 1100);

function clear() {
  clearInterval(interval);
  let h1Elem = document.createElement("h1");
  h1Elem.innerText = "تمام";
  container.innerHTML = "";
  container.appendChild(h1Elem);
}

function showTraials(item) {
  num1.classList.remove("btn-hidden");
  num2.classList.remove("btn-hidden");
  num3.classList.remove("btn-hidden");
  num1.innerText = persianChars[item.number[0]];
  num2.innerText = persianChars[item.number[1]];
  num3.innerText = persianChars[item.number[2]];
  buttons.classList.add("btn-hidden");
  buttons.classList.remove("btn-visible");
}

function showGuess(item) {
  num1.classList.add("btn-hidden");
  num2.classList.add("btn-hidden");
  num3.classList.add("btn-hidden");
  buttons.classList.remove("btn-hidden");
  buttons.classList.add("btn-visible");
  guess.innerText = persianChars[item.guess];
}

document.addEventListener("keydown", (e) => {
  if (e.code == "Space" && allowedPressSpace == true) {
    let isInValid = selectedBlock.number.indexOf(selectedBlock.guess) === -1;
    selectedBlock.rt = Date.now() - rt;
    selectedBlock.isCorrect = !isInValid;
    resultBlock.push(`traial ${1} `, selectedBlock);
  }
});

function play() {
  let myAudio = document.querySelector("audio");
  console.log(selectedBlock);
  myAudio.setAttribute("src", selectedBlock.song["song"]);

  let playPromise = myAudio.play();
  if (playPromise !== undefined) {
    playPromise
      .then(function () {})
      .catch(function (error) {
        console.log(error);
      });
  }
}

function pause() {
  audio.pause();
  audio.removeAttribute("src");
}
*/
