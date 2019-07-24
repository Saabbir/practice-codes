const userEmail = 'WtF@gmail.com';
const userEmailName = userEmail.slice(0, userEmail.indexOf('@'));
const userEmailDomain = userEmail.slice(userEmail.indexOf('@') + 1);
const validEmailDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'aol.com'];
const slangWords = ['LOL', 'OMG', 'WTF', 'LMAO', 'RIP'];

function validateEmailDomain(domain) {
    return validEmailDomains.indexOf(domain)
}

function validateEmailName(emailName) {
    return slangWords.indexOf(emailName.toUpperCase());
}

function validateEmail(email) {
    const regExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const emailString = String(email).toLowerCase();
    const isEmailValid = regExp.test(emailString);

    if (isEmailValid) {

        if (validateEmailDomain(userEmailDomain) !== -1) {
            if (validateEmailName(userEmailName) !== -1) {
                console.log(`Your user name (${userEmailName}) contains slang word.`);
            } else {
                console.log(`${emailString} is a valid email address.`);
            }
        } else {
            console.log(`${userEmailDomain} is not a valid email domain.`);
        }
    } else {
        console.log(`${emailString} is not a valid email address.`);
    }
}

validateEmail(userEmail);
console.log('Hello Saabbir')