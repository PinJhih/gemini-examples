let userInput = document.getElementById("message");
let history = document.getElementById("history");

function chat(message) {
    let body = { "message": message };
    fetch('/chat', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            let box = `<div class="bot-message">${data.message}</div>`
            history.innerHTML += box;
            history.scrollTop = history.scrollHeight;
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        });
}

function send() {
    let message = userInput.value;
    if (message == '')
        return;

    let box = `<div class="user-message">${message}</div>`
    history.innerHTML += box;
    userInput.value = '';
    history.scrollTop = history.scrollHeight;

    chat(message);
}

function handleEnter(event) {
    if (event.keyCode === 13) {
        send();
    }
}
