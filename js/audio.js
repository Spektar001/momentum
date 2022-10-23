import playListMusic from './playListMusic.js';

const playPrevAudio = document.querySelector('.play-prev');
const play = document.querySelector('.play');
const playNextAudio = document.querySelector('.play-next');
const audio = new Audio();
const playList = document.querySelector('.play-list');


let isPlay = false;
let playNum = 0;

function playAudio() {
  audio.src = playListMusic[playNum].src;
  audio.currentTime = 0;
  audio.play();
}

play.addEventListener('click', () => {
	if(!isPlay){
		playAudio();
		isPlay = true;
	} else {
		isPlay = false;
		audio.pause();
	}
	play.classList.toggle('pause');
	itemActiveAudio();
});

function playPrev() {
	playNum--;
	if (playNum < 0) {
		playNum = playListMusic.length - 1;
	}
	audio.src = audio[playNum];
	playAudio();
	isPlay = true;
	play.classList.add('pause');
}
playPrevAudio.addEventListener('click', () => {
	playPrev();
	itemActiveAudio();
});

function playNext() {
	playNum++;
	if (playNum > playListMusic.length - 1) {
		playNum = 0;
	}
	audio.src = audio[playNum];
	playAudio();
	isPlay = true;
	play.classList.add('pause');
}
playNextAudio.addEventListener('click', () => {
	playNext();
	itemActiveAudio();
});


playListMusic.forEach(element => {
	const li = document.createElement('li');
	playList.append(li);
	li.classList.add('play-item');
	li.textContent = element.title;
});

function itemActiveAudio() {
  let playItem = document.querySelectorAll(".play-item");

  for (let i = 0; i < playItem.length; i++) {
    if (i === playNum) {
      playItem[i].classList.add("item-active");
    } else {
      playItem[i].classList.remove("item-active");
    }
  }
}
