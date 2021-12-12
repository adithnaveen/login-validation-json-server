const { registerUserAction } = require("./actions");
const {sayHi, validateRegisterUser} = require("./util");


const initApp = () => {
    const registerBtn = document.querySelector("#regBtn"); 
    registerBtn.addEventListener("click", registerUser);
}

const registerUser = (event) => {
    event.preventDefault()
    console.log("i'm in registeruser");
    
    let obj = {}
    obj.userName = document.querySelector("#user-name").value
    obj.email = document.querySelector("#email").value; 
    obj.password = document.querySelector("#password").value;

    if(!validateRegisterUser(obj))
        return false; 
    
    registerUserAction("http://localhost:3000/users", obj);
}

initApp()