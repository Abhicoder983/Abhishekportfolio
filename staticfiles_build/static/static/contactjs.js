document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const organization = document.getElementById('organization').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (!name || !email || !subject || !message) {
        displayResponse('Please fill in all required fields.', 'red');
        return;
    }

    // Prepare form data to send
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('organization', organization);
    formData.append('subject', subject);
    formData.append('message', message);

    // Send form data using fetch
    fetch(document.getElementById('contactForm').action, {
        method: 'POST',
        body: formData,
        headers: {
            'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
        }
    })
    .then(response => response.text())
    .then(data => {
        // Assuming the response contains a success message
        displayResponse('Your message has been sent!', 'green');
    })
    .catch(error => {
        displayResponse('Failed to send your message. Please try again later.', 'red');
    });
});

function displayResponse(message, color) {
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.innerText = message;
    responseMessage.style.color = color;
}


function displayResponse(message, color) {
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = message;
    responseMessage.style.color = color;
}
