const time = document.querySelector('.time');
const date = document.querySelector('.date');


function showTime() {
	const date = new Date();
	time.innerHTML = date.toLocaleTimeString();
	showDate();

	return setTimeout(showTime, 1000);
}
showTime();


function showDate() {
	const dateDay = new Date();
	const options = {month: 'long', weekday: 'long', day: 'numeric'};
	date.innerHTML = dateDay.toLocaleDateString('en-Br', options);
}
