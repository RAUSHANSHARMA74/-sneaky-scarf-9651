let form  = document.querySelector(".formdiv>form")
form.addEventListener("submit", (event)=>{
    event.preventDefault()
    if(form.email.value=="admin@gmail.com" && form.password.value=="admin"){
        alert("login succesfull")
        setTimeout(() => {
            window.location = "adminPage.html"
        }, 1000);
    }else{
        alert("wrong crendentail")
    }
})