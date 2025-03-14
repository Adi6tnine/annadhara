document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        // Form validation and submission
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Basic form validation
            let isValid = true;
            const inputs = form.querySelectorAll('input, textarea');
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('error');
                } else {
                    input.classList.remove('error');
                }
            });

            if (isValid) {
                const submitBtn = form.querySelector('.submit-btn');
                const originalText = submitBtn.textContent;

                // Show loading state
                submitBtn.disabled = true;
                submitBtn.textContent = 'Submitting...';

                try {
                    // Simulate form submission
                    await new Promise(resolve => setTimeout(resolve, 1500));

                    // Show success message
                    const successMessage = document.createElement('div');
                    successMessage.className = 'success-message';
                    successMessage.textContent = 'Form submitted successfully!';
                    form.insertBefore(successMessage, form.firstChild);
                    successMessage.style.display = 'block';

                    // Reset form
                    form.reset();

                    // Remove success message after 3 seconds
                    setTimeout(() => {
                        successMessage.remove();
                    }, 3000);
                } catch (error) {
                    console.error('Error submitting form:', error);
                    const errorMessage = document.createElement('div');
                    errorMessage.className = 'error-message';
                    errorMessage.textContent = 'An error occurred. Please try again.';
                    form.insertBefore(errorMessage, form.firstChild);
                    errorMessage.style.display = 'block';

                    // Remove error message after 3 seconds
                    setTimeout(() => {
                        errorMessage.remove();
                    }, 3000);
                } finally {
                    // Reset button state
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                }
            }
        });
    });
});