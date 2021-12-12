exports.sayHi = (name) => {
    return "hi " + name
}

exports. validateRegisterUser = (registerObj) => {
    console.log(registerObj);
    return registerObj.userName.length>6;
}