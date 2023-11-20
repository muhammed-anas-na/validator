const getPasswordStrength = require('strong-password-check');

function signupvalidator({user_name='',email='',phone=0,password=''}){
    //User name regex
    const name_regex = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/
    const email_regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const phone_regex = /^\d{10}$/

    //Return object
    const result = {
        message:[],
        valid:true
    }
    if(!name_regex.test(user_name)){
        result.message.push('User name not valid')
        result.valid=false
    }
    if(!email_regex.test(email)){
        result.message.push('Email not valid')
        result.valid=false
    }
    if(!phone_regex.test(phone)){
        result.message.push('Phone number not valid')
        result.valid=false
    }
    const config = {
        lowercase: true,
        uppercase: true,
        digits: true,
        specialChars: true,
        minLength: 8,
    };
    const password_data = getPasswordStrength(password, config);
    result.message.push(password_data)
    if(password_data.strength == 'Weak'){
        result.valid=false;
    }
    return result;
}
const signupData = {
    user_name:'Username',
    email:'example@gmail.com',
    phone:1234567990,
    password:'NewPassword@123'
}
console.log(signupvalidator(signupData))

module.exports={
    signupvalidator
}