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
function validateForm(event) {
    event.preventDefault();
    
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const whatsapp = document.getElementById('whatsapp').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const terms = document.getElementById('terms').checked;
    
    // Reset previous error states
    clearErrors();
    
    let isValid = true;
    
    // Name validation
    if (firstName.length < 2) {
        showError('firstName', 'Nama depan minimal 2 karakter');
        isValid = false;
    }
    
    if (lastName.length < 2) {
        showError('lastName', 'Nama belakang minimal 2 karakter');
        isValid = false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError('email', 'Format email tidak valid');
        isValid = false;
    }
    
    // WhatsApp number validation
    const whatsappRegex = /^[0-9]{10,13}$/;
    if (!whatsappRegex.test(whatsapp)) {
        showError('whatsapp', 'Nomor WhatsApp tidak valid (10-13 digit)');
        isValid = false;
    }
    
    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordRegex.test(password)) {
        showError('password', 'Password harus minimal 6 karakter, mengandung huruf besar, huruf kecil, dan angka');
        isValid = false;
    }
    
    if (password !== confirmPassword) {
        showError('confirmPassword', 'Konfirmasi password tidak cocok');
        isValid = false;
    }
    
    if (!terms) {
        showError('terms', 'Anda harus menyetujui Syarat & Ketentuan');
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