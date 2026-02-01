// Save user registration data to localStorage
function saveUserData(username, email, password) {
    const userData = {
        username: username,
        email: email,
        password: password,
        createdAt: new Date().toISOString()
    };
    
    localStorage.setItem('userData', JSON.stringify(userData));
    console.log('User data saved successfully');
}

function getUserData() {
    const userData = localStorage.getItem('userData');
    return userData ? JSON.parse(userData) : null;
}

// Validate login
function validateLogin(email, password) {
    const userData = getUserData();
    
    if (!userData) {
        return { success: false, message: "No user found. Please register first." };
    }
    
    if (userData.email === email && userData.password === password) {
        return { success: true, message: "Login successful!", user: userData };
    }
    
    return { success: false, message: "Invalid email or password." };
}

// Register function (for signup.html)
function register(event) {
    if (event) {
        event.preventDefault();
    }
    
    const usernameInput = document.getElementById('login-page-name');
    const emailInput = document.getElementById('login-page-email');
    const passwordInput = document.getElementById('login-page-password');
    const errors = document.getElementById('errors');
    
    if (!usernameInput || !emailInput || !passwordInput || !errors) {
        console.error('One or more elements not found');
        return false;
    }
    
    errors.innerText = "";
    errors.style.color = "red";
    
    if (usernameInput.value === '' || emailInput.value === '' || passwordInput.value === '') {
        errors.innerText = "All fields are required.";
        return false;
    }
    
    if (!emailInput.value.includes('@')) {
        errors.innerText = "Please enter a valid email address.";
        return false;
    }
    
    if (passwordInput.value.length < 6) {
        errors.innerText = "Password must be at least 6 characters long.";
        return false;
    }
    
    saveUserData(usernameInput.value, emailInput.value, passwordInput.value);
    errors.style.color = "green";
    
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 1500);
    
    return false;
}

// Login function (for login.html)
function login(event) {
    if (event) {
        event.preventDefault();
    }
    
    const emailInput = document.getElementById('login-email');
    const passwordInput = document.getElementById('login-password');
    const errors = document.getElementById('errors');
    
    if (!emailInput || !passwordInput) {
        console.error('Email or password input not found');
        return false;
    }
    
    const email = emailInput.value;
    const password = passwordInput.value;
    
    const result = validateLogin(email, password);
    
    if (result.success) {
        localStorage.setItem('isLoggedIn', 'true');
        
        if (errors) {
            errors.style.color = "green";
        }
        
        setTimeout(() => {
            window.location.href = 'homepage.html';
        }, 1000);
    } else {
        if (errors) {
            errors.innerText = result.message;
            errors.style.color = "red";
        } else {
            alert(result.message);
        }
    }
    
    return false;
}
