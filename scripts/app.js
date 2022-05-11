"use strict";

// Items

let icon = document.querySelector(".main-image-logo");
let logo = document.querySelector(".header-logo");
let newAudio = new Audio();
let currentChoose;


// Data

let isPlay = false;
let imageList = {
  "nightingale": 'img/solovey.jpg',
  "thrush": "img/drozd.jpg",
  "raspberry": "img/zarynka.jpg",
  "lark": "img/javoronok.jpg",
  "warbler": "img/slavka.jpg",
};
let musicList = {
  "nightingale": 'assets/solovey.mp3',
  "thrush": "assets/drozd.mp3",
  "raspberry": "assets/zarynka.mp3",
  "lark": "assets/javoronok.mp3",
  "warbler": "assets/slavka.mp3",
};

// Function 

function changeImage(imageName) {
  let img = document.querySelector(".main-image-wrapper");
  img.style.backgroundImage = `url(${imageList[imageName]})`;
  currentChoose = imageName;
};

function changePlayIcon() {
  icon.classList.remove("main-image-logo-2");
  icon.classList.add("main-image-logo-2");
  isPlay = true;
};

function playMusic(whichMusic) {
  if(isPlay) {
    newAudio.src = `${musicList[whichMusic]}`;
    newAudio.play();
    console.log(whichMusic);
  } else {
    newAudio.pause();
  }
}

let linkItem = document.querySelectorAll(".header-menu-item__link");
Array.from(linkItem).map(item => {
  item.addEventListener("click", (event) => {
    changeImage(event.currentTarget.textContent.toLowerCase());
    changePlayIcon();
    playMusic(event.currentTarget.textContent.toLowerCase());
  });
});

icon.addEventListener("click", (event) => {
  if(isPlay) {
    icon.classList.remove("main-image-logo-2");
    isPlay = !isPlay;
    playMusic(currentChoose = "nightingale");
  } else {
    icon.classList.add("main-image-logo-2");
    isPlay = !isPlay;
    playMusic(currentChoose = "nightingale");
  }
  
});

logo.addEventListener("click", (e) => {
  changePlayIcon();
  playMusic(currentChoose = "nightingale");
});