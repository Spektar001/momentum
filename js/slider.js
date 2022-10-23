const slidePrev = document.querySelector('.slide-prev');
const slideNext = document.querySelector('.slide-next');
let randomNum = getRandomNum();

function getRandomNum() {
	return Math.floor(Math.random() * (20 + 1 - 1) + 1);
}

function getTimeOfDay() {
	const date = new Date();
	const hours = date.getHours();
	if (hours >= 4 && hours < 13) {
		return 'morning';
	}
	if (hours >= 13 && hours < 18) {
		return 'afternoon';
	}
	if (hours >= 18 && hours < 24) {
		return 'evening';
	}
	if (hours >= 0 && hours < 4) {
		return 'night';
	}
}

function setBg() {
	let timeOfDay = getTimeOfDay();
	let imgSrc = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${randomNum < 10 ? "0" + String(randomNum) : randomNum}.jpg`;
  const img = new Image();
  img.src = imgSrc;
  img.onload = () => {
    document.body.style.backgroundImage = `url(${imgSrc})`;
  };
}

function getSlideNext() {
  randomNum++;
  if (randomNum > 20) {
    randomNum = 1;
  }
  setBg();
}

function getSlidePrev() {
  randomNum--;
  if (randomNum < 1) {
    randomNum = 20;
  }
  setBg();
}

slidePrev.addEventListener('click', getSlidePrev);
slideNext.addEventListener('click', getSlideNext);
setBg();