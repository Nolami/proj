function login() {
    var username = localStorage.getItem('registeredUsername')
    var password = localStorage.getItem('registeredPassword')
    var entName = document.getElementById('username').value
    var entPass = document.getElementById('password').value

    if (username === entName) {
        if(validatePassword(entName, entPass)) {
            console.log('Login successful')
        } else {
            console.log('Invalid password')
        }
    } else {
        console.log('Invalid username')
    }
    
}
function validatePassword(entName, password)  {
    return entPass === password
}
