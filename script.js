// Firebase Authentication
const auth = firebase.auth();

// Elements
const loginContainer = document.getElementById('login-container');
const signupContainer = document.getElementById('signup-container');
const showSignup = document.getElementById('show-signup');
const showLogin = document.getElementById('show-login');

const loginForm = document.getElementById('login-form');
const loginEmail = document.getElementById('login-email');
const loginPassword = document.getElementById('login-password');
const loginMessage = document.getElementById('login-message');

const signupForm = document.getElementById('signup-form');
const signupEmail = document.getElementById('signup-email');
const signupPassword = document.getElementById('signup-password');
const signupMessage = document.getElementById('signup-message');

// Show Sign Up Form
showSignup.addEventListener('click', () => {
    loginContainer.style.display = 'none';
    signupContainer.style.display = 'block';
});

// Show Login Form
showLogin.addEventListener('click', () => {
    signupContainer.style.display = 'none';
    loginContainer.style.display = 'block';
});

// Login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginEmail.value;
    const password = loginPassword.value;
    
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            loginMessage.textContent = 'Login successful!';
            loginMessage.style.color = 'green';
        })
        .catch((error) => {
            loginMessage.textContent = error.message;
            loginMessage.style.color = 'red';
        });
});

// Sign Up
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = signupEmail.value;
    const password = signupPassword.value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            signupMessage.textContent = 'Sign up successful!';
            signupMessage.style.color = 'green';
        })
        .catch((error) => {
            signupMessage.textContent = error.message;
            signupMessage.style.color = 'red';
        });
});
