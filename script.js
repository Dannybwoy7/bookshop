document.getElementById('login-btn').addEventListener('click', () => {
    document.querySelector('.login-form-container').style.display = 'block';
});

document.getElementById('register-btn').addEventListener('click', () => {
    document.querySelector('.register-form-container').style.display = 'block';
});

document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // login logic here
    window.location.href = 'viewpage.html';
});

document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // register logic here
    window.location.href = 'viewpage.html';
});