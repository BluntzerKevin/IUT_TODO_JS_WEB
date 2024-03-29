
const inputEmailName = 'mail';
const inputPasswordName = 'motdepasse';

function init() {
  formEl = document.getElementById("inscription");
  const inputPassword = formEl.elements[inputPasswordName];
  const inputEmail = formEl.elements[inputEmailName];

  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    
    email = inputEmail.value;
    password = inputPassword.value;

    var urlencoded = new URLSearchParams();
    urlencoded.append("email", email);
    urlencoded.append("password", password);

    var requestOptions = {
      method : 'POST',
      body : urlencoded,
      redirect : 'follow'
    };

    fetch('https://iutbackend.herokuapp.com/register', requestOptions)
    .then(response => response.text)
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  });
}

window.onload = init;
