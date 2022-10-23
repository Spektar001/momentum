const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');


function getTimeOfDay() {
	const date = new Date();
	const hours = date.getHours();
	if (hours >= 6 && hours < 12) {
		return 'morning';
	}
	if (hours >= 12 && hours < 18) {
		return 'afternoon';
	}
	if (hours >= 18 && hours < 24) {
		return 'evening';
	}
	if (hours >= 0 && hours < 6) {
		return 'night';
	}
}
function showGreeting() {
	greeting.textContent = `Good ${getTimeOfDay()}`;
	return setTimeout(showGreeting, 1000);
}
showGreeting();

function setLocalStorage() {
  localStorage.setItem('name', name.value);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if(localStorage.getItem('name')) {
    name.value = localStorage.getItem('name');
  }
}
window.addEventListener('load', getLocalStorage);