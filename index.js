// script.js
document.addEventListener('DOMContentLoaded', function () {
    const signupButton = document.getElementById('signup-button');
    const loginButton = document.getElementById('login-button');
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
    const menuButton = document.getElementById('menu-button');
    const menu = document.getElementById('menu');

    signupButton.addEventListener('click', function () {
        signupForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    });

    loginButton.addEventListener('click', function () {
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
    });

    menuButton.addEventListener('click', function () {
        menu.classList.toggle('hid');
    });
});



// script.js
document.addEventListener('DOMContentLoaded', function () {
    const customerSupportButton = document.getElementById('customer-support-button');
    const chatBox = document.getElementById('chat-box');
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    customerSupportButton.addEventListener('click', function () {
        chatBox.classList.remove('hidd');
    });

    sendButton.addEventListener('click', function () {
        const userMessage = userInput.value;
        if (userMessage.trim() !== '') {
            const userMessageElement = document.createElement('div');
            userMessageElement.className = 'user-message';
            userMessageElement.textContent = 'You: ' + userMessage;
            chatMessages.appendChild(userMessageElement);

            // Simulate a response from the support team (you can replace this with actual chat functionality).
            setTimeout(function () {
                const supportMessageElement = document.createElement('div');
                supportMessageElement.className = 'support-message';
                supportMessageElement.textContent = 'Support: Thank you for your message! We will get back to you shortly.';
                chatMessages.appendChild(supportMessageElement);
            }, 1000);

            userInput.value = '';
        }
    });
});




// script.js
document.addEventListener('DOMContentLoaded', function () {
    const aboutButton = document.getElementById('about-button');
    const aboutContent = document.getElementById('about-content');

    aboutButton.addEventListener('click', function () {
        aboutContent.classList.toggle('hidde');
    });
});


// script.js
document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    searchButton.addEventListener('click', function () {
        const searchTerm = searchInput.value.trim();
        if (searchTerm !== '') {
            // You can replace this with actual search functionality
            displaySearchResults(searchTerm);
        }
    });

    function displaySearchResults(searchTerm) {
        // In this example, we simulate search results by adding items to the list.
        const ul = document.querySelector('#search-results ul');
        ul.innerHTML = '';

        const results = [
            'dog',
            'rabbit',
            'cats',
            'parrots',
            'fish',
        ];

        results.forEach(result => {
            const li = document.createElement('li');
            li.textContent = result;
            ul.appendChild(li);
        });

        searchResults.classList.remove('ridden');
    }
});
