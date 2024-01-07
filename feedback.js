// feedback.js
import axios from 'https://cdn.skypack.dev/axios';

export const showFeedbackForm = (content) => {
    // clear existing content
    content.innerHTML = '';

    // create a form element
    const feedbackForm = document.createElement('form');
    feedbackForm.id = 'feedbackForm';

    // create a textarea for feedback
    const feedbackInput = document.createElement('textarea');
    feedbackInput.name = 'feedback';
    feedbackInput.placeholder = 'Type your feedback...';

    // create submit button
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.id = 'submit'
    submitButton.textContent = 'Submit';

    // append text area and submit button to the form
    feedbackForm.appendChild(feedbackInput);
    feedbackForm.appendChild(submitButton);

    // add a submit event listener to the form
    feedbackForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        await submitFeedback(feedbackForm);
    });

    // Append the form to the content box
    content.appendChild(feedbackForm);
};

// Function to submit feedback using axios POST request
async function submitFeedback (form) {
    const feedbackUrl = "https://wizard-world-api.herokuapp.com/Feedback";
    const feedbackInput = form.querySelector('textarea');
    const feedbackText = feedbackInput.value

    try {
        const response = await axios.post(
            feedbackUrl, 
            { // request body
                feedbackType: "General",
                feedback: feedbackText,
                entityId: "3fa85f64-5717-4562-b3fc-2c963f66afa6", // using example value
            },
            {
                headers: {
                    "accept": "text/plain",
                    "Content-Type": "application/json-patch+json"
                }
            }
        );

        if (response.status === 200) {
            console.log("Feedback submitted successfully!");
        } else {
            throw new Error (response.status);
        }
    } catch (error) {
        console.error('Error submitting feedback:', error);
    }
};
