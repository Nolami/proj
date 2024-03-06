function register() {
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value

    if (validateRegistrationInputs(username, password)) {
        localStorage.setItem('registeredUsername', username)
        localStorage.setItem('registeredPassword', hashpassword(password))
        console.log('käyttäjä rekiströity')
        window.location.href = 'login.html'
    } else {
        console.log('Invalid')
    }
}

async function validateRegistrationInputs() {
    const userRight = await checkUsernameAvailability()

    if (checkUsernameAvailability() === true) {
        href='login.html'
    }
    return true
}
function checkUsernameAvailability() {
    const username = document.getElementById('username').value

    return fetch('/checkForUsernameAvailability', {
        method : 'POST',
        headers : {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: username }),
    })
    .then(response => response.json())
    .then(data => {
        const availabilityMessage = document.getElementById('usernameAvailability')
        if (data.available) {
            availabilityMessage.textcontent = 'Username is available'
        } else {
            availabilityMessage.textcontent = 'Username is not available'
        }
    })
    .catch(error => console.error('Error checking username availability', error))
}
function hashpassword(password) {
    const hash = sha256(password)
}
function sha256(input) {
    const Encoder = new TextEncoder()
    const data = encoder.encode(input)
    const hashbuffer = crypto.subtle.digest('SHA-256', data)
    const hasharray = Array.from(new Uint8Array(hashbuffer))
    const hashedstring = hasharray.map(byte => byte.toString(16).padStart(2,0)).join('')
    return hashedstring
}