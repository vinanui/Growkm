// Function to show/hide password
function togglePassword(inputId) {
    let input = document.getElementById(inputId);
    let eyeIcon = input.parentElement.querySelector('.toggle-password img');
    
    // Toggle between password and text
    if (input.type === 'password') {
        input.type = 'text';
        eyeIcon.style.opacity = '1';
    } else {
        input.type = 'password';
        eyeIcon.style.opacity = '0.5';
    }
}

// Main form validation function
function validateForm(event) {
    // Prevent form from submitting normally
    event.preventDefault();
    
    // Get all form inputs
    let firstName = document.getElementById('firstName').value.trim();
    let lastName = document.getElementById('lastName').value.trim();
    let email = document.getElementById('email').value.trim();
    let whatsapp = document.getElementById('whatsapp').value.trim();
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let terms = document.getElementById('terms').checked;
    
    // Clear any existing errors
    clearAllErrors();
    
    // Check if form is valid
    let isValid = true;
    
    // Simple validation rules
    if (firstName.length < 2) {
        showErrorMessage('firstName', 'Nama depan terlalu pendek');
        isValid = false;
    }
    
    if (lastName.length < 2) {
        showErrorMessage('lastName', 'Nama belakang terlalu pendek');
        isValid = false;
    }
    
    if (!email.includes('@')) {
        showErrorMessage('email', 'Email tidak valid');
        isValid = false;
    }
    
    if (whatsapp.length < 10) {
        showErrorMessage('whatsapp', 'Nomor WhatsApp tidak valid');
        isValid = false;
    }
    
    if (password.length < 6) {
        showErrorMessage('password', 'Password terlalu pendek');
        isValid = false;
    }
    
    if (password !== confirmPassword) {
        showErrorMessage('confirmPassword', 'Password tidak cocok');
        isValid = false;
    }
    
    if (!terms) {
        showErrorMessage('terms', 'Harap setujui syarat dan ketentuan');
        isValid = false;
    }
    
    // If everything is valid, go to login page
    if (isValid) {
        // Go to login page
        window.location.href = 'login.html';
    }
    
    return false;
}

// Function to show error message
function showErrorMessage(inputId, message) {
    let input = document.getElementById(inputId);
    let errorDiv = document.createElement('div');
    
    errorDiv.className = 'error-message';
    errorDiv.style.color = '#ff4444';
    errorDiv.style.fontSize = '12px';
    errorDiv.style.marginTop = '4px';
    errorDiv.textContent = message;
    
    input.style.borderColor = '#ff4444';
    input.parentElement.appendChild(errorDiv);
}

// Function to clear all errors
function clearAllErrors() {
    // Remove all error messages
    let errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function(error) {
        error.remove();
    });
    
    // Reset all input borders
    let inputs = document.querySelectorAll('input');
    inputs.forEach(function(input) {
        input.style.borderColor = '#ddd';
    });
} 