const form = document.querySelector('#form');
const Fullname = document.querySelector('#Fullname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    validateInputs();
});

function validateInputs(){
    const fullnameval = Fullname.value.trim()
    const emailval = email.value.trim()
    const passval = password.value.trim()
    }

function setError(element,message) {

    const inputGroup =element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');

}   


function setSuccess(element) {

    const inputGroup =element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');

}   

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };