document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const query = document.getElementById('search-box').value;
    alert(`Searching for cars matching: ${query}`);
});
       






const form = document.getElementById('customer-form');

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let isValid = true;

            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const phone = document.getElementById('phone');
            const message = document.getElementById('message');

            const nameError = document.getElementById('name-error');
            const emailError = document.getElementById('email-error');
            const phoneError = document.getElementById('phone-error');
            const messageError = document.getElementById('message-error');

            // Clear previous errors
            nameError.textContent = '';
            emailError.textContent = '';
            phoneError.textContent = '';
            messageError.textContent = '';

            // Validate Name
            if (name.value.trim() === '') {
                nameError.textContent = 'Name is required.';
                isValid = false;
            }

            // Validate Email
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email.value)) {
                emailError.textContent = 'Please enter a valid email address.';
                isValid = false;
            }

            // Validate Phone
            if (!/^[0-9]{10}$/.test(phone.value)) {
                phoneError.textContent = 'Please enter a valid 10-digit phone number.';
                isValid = false;
            }

            // Validate Message
            if (message.value.trim() === '') {
                messageError.textContent = 'Message is required.';
                isValid = false;
            }

            if (isValid) {
                const customerData = {
                    name: name.value,
                    email: email.value,
                    phone: phone.value,
                    message: message.value,
                };

                // Store data in localStorage
                localStorage.setItem('customerData', JSON.stringify(customerData));
                alert('Form submitted successfully!');
                form.reset();
            }
        });
    