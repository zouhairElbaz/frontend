let form = document.querySelector(".container form"),
    passInput = document.getElementById("password"),
    passIcon = document.querySelector(".container .passIcon");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
});

passIcon.addEventListener("click", ()=>{
    if(passInput.type === "password"){
        passInput.type = "text";
    }else{
        passInput.type = "password";
    }
});