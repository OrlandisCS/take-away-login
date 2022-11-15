const inputUser = document.querySelector('#user');
const inputPwd = document.querySelector('#password');
const labelUser = document.querySelector('#label__user');
const labelPassword = document.querySelector('#label__password');

inputUser.addEventListener('input', (key) => {
	inputUser.value.length > 0
		? (labelUser.style.top = 0)
		: (labelUser.style.top = '22px');
});
inputPwd.addEventListener('input', (key) => {
	inputPwd.value.length > 0
		? (labelPassword.style.top = 0)
		: (labelPassword.style.top = '22px');
});

particlesJS.load('particles-js', 'snow.json', function () {
	console.log('callback - particles.js config loaded');
});
