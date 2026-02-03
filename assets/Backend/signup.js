// Admin credentials - predefined admin accounts
const ADMIN_ACCOUNTS = [
    {
        id: 1,
        email: 'prayushstha1212@gmail.com',
        username: 'Prayush Shrestha',
        password: 'admin123',
        isAdmin: true
    },
    {
        id: 2,
        email: 'krishna@example.com',
        username: 'Krishna Neupane',
        password: 'admin123',
        isAdmin: true
    },
    {
        id: 3,
        email: 'prashil@example.com',
        username: 'Prashil Baidhya',
        password: 'admin123',
        isAdmin: true
    }
];

// Save user registration data to localStorage
function saveUserData(username, email, password) {
    const userData = {
        username: username,
        email: email,
        password: password,
        isAdmin: false,
        createdAt: new Date().toISOString()
    };
    
    localStorage.setItem('userData', JSON.stringify(userData));
    console.log('User data saved successfully');
}

// Get current user data from localStorage
function getUserData() {
    const userData = localStorage.getItem('userData');
    return userData ? JSON.parse(userData) : null;
}

// Get current logged in user (could be admin or regular user)
function getCurrentUser() {
    const currentUser = localStorage.getItem('currentUser');
    return currentUser ? JSON.parse(currentUser) : null;
}

// Set current logged in user
function setCurrentUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
}

// Check if email belongs to an admin
function checkIfAdmin(email, password) {
    return ADMIN_ACCOUNTS.find(
        admin => admin.email === email && admin.password === password
    );
}

// Validate login for both admin and regular users
function validateLogin(email, password) {
    // First check if it's an admin login
    const adminAccount = checkIfAdmin(email, password);
    
    if (adminAccount) {
       
        return { 
            success: true, 
            message: "Admin login successful!", 
            user: adminAccount 

        };
    }
    
    // If not admin, check regular user data
    const userData = getUserData();
    
    if (!userData) {
        return { 
            success: false, 
            message: "No user found. Please register first." 
        };
    }
    
    if (userData.email === email && userData.password === password) {
        return { 
            success: true, 
            user: userData 
        };
    }
    
    return { 
        success: false, 
        message: "Invalid email or password." 
    };
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
    
    // Validation
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
    
    // Check if email is already an admin email
    const isAdminEmail = ADMIN_ACCOUNTS.some(admin => admin.email === emailInput.value);
    if (isAdminEmail) {
        errors.innerText = "This email is reserved. Please use a different email.";
        return false;
    }
    
    // Save user data
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
    
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    
    // Validate input
    if (!email || !password) {
        if (errors) {
            errors.innerText = "Please enter both email and password.";
            errors.style.color = "red";
        }
        return false;
    }
    
    // Validate login
    const result = validateLogin(email, password);
    
    if (result.success) {
        // Set login state
        localStorage.setItem('isLoggedIn', 'true');
        
        // Store current user info (including admin status)
        setCurrentUser(result.user);
        
        if (errors) {
            errors.style.color = "green";
            errors.innerText = result.message;
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

// Logout function
function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
    window.location.href = '';
}

// Check if current user is admin
function isCurrentUserAdmin() {
    const currentUser = getCurrentUser();
    return currentUser ? currentUser.isAdmin === true : false;
}

// Get display name for current user
function getCurrentUserDisplayName() {
    const currentUser = getCurrentUser();
    return currentUser ? currentUser.username : 'User';
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // If user is logged in, ensure currentUser is set
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const currentUser = getCurrentUser();
    
    if (isLoggedIn && !currentUser) {
        // Try to recover user data
        const userData = getUserData();
        if (userData) {
            setCurrentUser(userData);
        }
    }
});