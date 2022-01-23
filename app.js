const div = document.getElementById('errorMsg')
const form = document.getElementById('contact')
const nameInput = document.getElementById('name');
const phonenumberInput = document.getElementById('phonenumber');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');


form.addEventListener('submit', (evt) => {
    event.preventDefault();
    checkInputIsEmpty(nameInput);
    checkInputIsEmpty(phonenumberInput);
    checkInputIsEmpty(emailInput);
    checkInputIsEmpty(messageInput);
})

function checkInputIsEmpty (input,){
    if (input.value === "") {
        const errorMessage = document.createElement('div');
        div.innerHTML = '<p>You need to enter Input!<p>';
        errorMessage.appendChild(div);
        console.log(errorMessage.appendChild(div));
        }
    }

