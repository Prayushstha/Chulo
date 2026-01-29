// Get user data from localStorage
function getUserData() {
    const userData = localStorage.getItem('userData');
    return userData ? JSON.parse(userData) : null;
}

// Logout function
function logout() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'homepage.html';
}

// Update navbar based on login state
function updateNavbar() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const navProfile = document.getElementById('navprofile');
    
    if (!navProfile) return;
    
    if (isLoggedIn) {
        const userData = getUserData();
        const username = userData ? userData.username : 'User';
        
        // Change to profile dropdown
        navProfile.innerHTML = `
            <a href="#" id="profile-toggle">
                <i class="fas fa-user-circle" style="scale: 1.4"></i>
            </a>
            <div id="profile-menu" style="display: none; position: absolute; background: white; border: 1px solid #ddd; padding: 10px; border-radius: 5px; top: 60px; right: 20px; z-index: 1000; box-shadow: 0 2px 10px rgba(0,0,0,0.1); min-width: 150px;">
                <p style="margin: 0 0 10px 0; font-weight: bold; color: #333; border-bottom: 1px solid #eee; padding-bottom: 8px;">Welcome, ${username}!</p>
                <button onclick="logout()" style="background: #ff4444; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; width: 100%; font-size: 14px;">Logout</button>
            </div>
        `;
        
        // Add click event to toggle menu
        const profileToggle = document.getElementById('profile-toggle');
        if (profileToggle) {
            profileToggle.addEventListener('click', (e) => {
                e.preventDefault();
                const menu = document.getElementById('profile-menu');
                if (menu) {
                    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
                }
            });
        }
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            const menu = document.getElementById('profile-menu');
            const toggle = document.getElementById('profile-toggle');
            if (menu && toggle && !toggle.contains(e.target) && !menu.contains(e.target)) {
                menu.style.display = 'none';
            }
        });
        
    } else {
        // Default login icon - redirect to signup page
        navProfile.innerHTML = `
            <a href="signup.html">
                <i class="fas fa-user-alt" style="scale: 1.4"></i>
            </a>
        `;
    }
}

// Run on page load
document.addEventListener('DOMContentLoaded', updateNavbar);