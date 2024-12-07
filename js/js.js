const loginForm = document.querySelector('form');
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    console.log(username, password);
});

const signupForm = document.querySelector('form');
signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.querySelector('#username');
});