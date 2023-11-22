# Form-validation

This package helps to valid form in your web-application,It will be helpful for beginners who are struggling the form validation.

## Installation
#### To install the package, run the following command:
`npm i @anas-na/validator --save`


## Usage

```javascript 
const valid = require('@anas-na/validator')
const signupData = {
    user_name:'Username',
    email:'example@gmail.com',
    phone:1234567890,
    password:'NewPassword@123'
}

const result = valid.signupvalidator(signupData);
console.log(result)

/*{
    { message: [ { messages: [], strength: 'Strong' } ],valid: true }
}*/
```

#### signupvalidator function takes a single object as argument
- `signupData`: A object that contains the user signup data.

#### The **signupvalidator** function returns an object with two properties:
- `messages`: An arrray which contains all the error message and an object about the password strength.
- `valid`: A boolean value,which returns true when the values are valid,and passes the standard input field criterials

## isEmail
```javascript
    const valid = require('@anas-na/validator')
    const email = 'example@gmail.com';
    const result = valid.isEmail(email) //true;
```

#### isEmail function takes a string as argument
- `email`: A string that need to be validated.
#### The **isEmail** function returns a boolean value:
- `boolean`: A boolen value according to the input string.


## isUser_name
```javascript
    const valid = require('@anas-na/validator')
    const name = 'Your name';
    const result = valid.isUser_name(name) //true;
```
#### isUser_name function takes a string as argument
- `user_name`: A string that need to be validated.
#### The **isUser_name** function returns a boolean value:
- `boolean`: A boolen value according to the input string.


## isUser_name
```javascript
    const valid = require('@anas-na/validator')
    const name = 'Your name';
    const result = valid.isUser_name(name) //true;
```
#### isUser_name function takes a string as argument
- `user_name`: A string that need to be validated.
#### The **isUser_name** function returns a boolean value:
- `boolean`: A boolen value according to the input string.


## checkPhone
```javascript
    const valid = require('@anas-na/validator')
    const number = '1234567890';
    const result = valid.checkPhone(number) //true;
```
#### checkPhone function takes a string as argument
- `user_name`: A string that need to be validated.
#### The **checkPhone** function returns a boolean value:
- `boolean`: A boolen value according to the input string.






## Contributing

Contributions are welcome! If you find a bug or would like to add a feature, please open an issue or pull request on GitHub.

## Author

- [@muhammed-anas-na](https://github.com/muhammed-anas-na)
