const myForm=document.forms.myForm;
const userNameInput=myForm.elements.userName;
const emailInput=myForm.elements.email;
const ageInput=myForm.elements.age;
const passwordInput=myForm.elements.password;
const profession=myForm.elements.profession;
const agreementCheckbox=myForm.elements.agreementCheckbox;
// const gender=myForm.elements.gender;

const userNameRegex=/^[A-Za-zА-Яа-яЁё\\s]{2,20}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

const userNameError=document.getElementById('userNameError');
const emailError=document.getElementById('emailError');
const ageError=document.getElementById('ageError');
const passwordError=document.getElementById('passwordError');
const professionError=document.getElementById('professionError');
const agreementError=document.getElementById('agreementError');

myForm.addEventListener('submit',function(evt){
    evt.preventDefault();
    form.reset();
    let hasError=false;

    userNameError.style.display='none';
    emailError.style.display='none';
    ageError.style.display='none';
    passwordError.style.display='none';

    // Проверка имени
    if(userNameInput.value==''){
        userNameError.textContent='Please enter your username';
        userNameError.style.display='block';
        hasError=true;
    }
    else(!userNameRegex.test(userNameInput.value)){
        userNameError.textContent='The name must contain only letters and spaces (2 to 20 characters)';
        userNameError.style.display='block';
        hasError=true;
    }
    // Проверка email
    if(!emailRegex.test(emailInput.value)){
        emailError.textContent='Email must contain @ symbol and domain name';
        emailError.style.display='block';
        hasError=true;
    }
    else(emailInput.value==''){
        emailError.textContent='Please enter your Email';
        emailError.style.display='block';
        hasError=true;
    }
     // Проверка возраста
    if(isNaN(ageInput.value) || ageInput.value<=0){
        ageError.textContent='Please enter correct age';
        ageError.style.display='block';
    }
    else(ageInput.value==''){
        ageError.textContent='Please enter your age';
        ageError.style.display='block';
    }
    // Проверка password
    if(passwordInput.value=''){
        passwordError.textContent='Please enter your password';
        passwordError.style.display='block';
    }
    else(!passwordRegex.test(passwordInput.value)){
        emailError.textContent='The password must contain at least one lowercase letter, one uppercase letter, one number, and be at least 8 characters long.';
        emailError.style.display='block';
        hasError=true;
    }
    // Проверка gender

    // Проверка select-profession
    if(profession.value=''){
        professionError.textContent='Please choose a profession';
        professionError.style.display='block';
    }
    // Проверка согласия с обработкой данных
    if(agreementCheckbox.checked==false){
        agreementError.textContent='Requires agreement to terms and conditions';
        agreementError.style.display='block';
    }

    if(hasError==false){
        alert('Form submitted successfully');
        console.log('Name:', userNameInput.value);
        console.log('Email:', emailInput.value);
        console.log('Age:', ageInput.value);
        console.log('Password:', passwordInput.value);
        // console.log('Gender:', );
        console.log('Profession:', profession.value);
    }
});

