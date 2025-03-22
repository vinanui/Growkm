// Password toggle functionality
function togglePassword(inputId) {
    const passwordInput = document.getElementById(inputId);
    const button = passwordInput.parentElement.querySelector('.toggle-password');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        button.querySelector('img').style.opacity = '1';
    } else {
        passwordInput.type = 'password';
        button.querySelector('img').style.opacity = '0.5';
    }
}

// Form validation
function validateLoginForm(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    
    // Reset previous error states
    clearErrors();
    
    let isValid = true;
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError('email', 'Format email tidak valid');
        isValid = false;
    }
    
    // Password validation
    if (password.length < 6) {
        showError('password', 'Password minimal 6 karakter');
        isValid = false;
    }
    
    if (isValid) {
        // Here you would typically submit the form to your backend
        console.log('Form is valid, ready to submit');
        // Uncomment the line below to actually submit the form
        // event.target.submit();
    }
    
    return false;
}

function showError(inputId, message) {
    const input = document.getElementById(inputId);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = '#ff4444';
    errorDiv.style.fontSize = '12px';
    errorDiv.style.marginTop = '4px';
    errorDiv.textContent = message;
    
    input.style.borderColor = '#ff4444';
    input.parentElement.appendChild(errorDiv);
}

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.remove());
    
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.style.borderColor = '#ddd';
    });
} 