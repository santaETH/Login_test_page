// Simple validation for email input field
document.querySelector('form').addEventListener('submit', function(e) {
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    if (email.value === '' || password.value === '') {
        e.preventDefault();
        alert('Please fill in all fields.');
    }
});