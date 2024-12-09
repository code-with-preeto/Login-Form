const form = document.getElementById("form");
const email =document.getElementById("email");
const password = document.getElementById("password");





form.addEventListener("submit", (event)=>{
    //alert("hii");
   // event.preventDefault();



    formValidation();
    
})
  

const setErrorMsg = (element,message)=>{
    const inputControl = element.parentElement;//Parent Element
    const errorDis = inputControl.querySelector(".error-msg");
    errorDis.innerText = message;

    inputControl.classList.add("error");
    inputControl.classList.remove("success");
}

const setSuccessMsg = (element)=>{
    const inputControl = element.parentElement;
    const errorDis = inputControl.querySelector(".error-msg");
    errorDis.innerText ='';

    inputControl.classList.add("success");
    inputControl.classList.remove("error");
}
  

const emailValid =(email)=>{
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
     return regex.test(email);
}


const formValidation = ()=>{


     const emailValue = email.value.trim();
     const passwordValue = password.value.trim();

     if(emailValue === ''){
        setErrorMsg(email,"email cannot be blank");
     }
     else if(!emailValid(emailValue)){
        setErrorMsg(email,'email is not valid')
     }
     else{
        setSuccessMsg(email);
     }


     if(passwordValue === ''){
        setErrorMsg(password,"password cannot be blank");
     }
     else if(passwordValue.length <8){
        setErrorMsg(password,"password must be atleast 8 characters");
     }
     else{
        setSuccessMsg(password);
     }
}