exports.registerUserAction = (url, obj) => {
    fetch(url, {
        method:"POST",
        body : JSON.stringify(obj),
        headers: {
            "Content-Type" :"application/json"
        }
    })
        .then(resp => resp.json())
        .then(data =>  {
            console.log(data)
            window.location.href = "../index.html"
        })
        .catch(err => console.error("Error Registring " + err));

}