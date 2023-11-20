
# Strong Password Check

A Node.js module that checks the strength of a password based on configurable criteria.

<!-- [DEMO 1](https://svelte.dev/repl/b5bf5871c99742e584da244b4bfeac92?version=3.44.3) by [@Ennoriel](https://github.com/Ennoriel) -->


## Installation

#### To install the package, run the following command:

`npm i strong-password-check --save`



## Usage

```javascript
const getPasswordStrength = require('strong-password-check');

const password = 'myPassword123#';

const config = {
    lowercase: true,
    uppercase: true,
    digits: true,
    specialChars: true,
    minLength: 8,
};

const result = getPasswordStrength(password, config);

console.log(result);
// { messages: [], strength: 'Strong' }
```

#### The package exports a single function, **getPasswordStrength**, which takes two arguments:

- `password`: A string representing the password to check.
- `config`: An object containing the configuration options for the password strength checker. The following options are available:


| value         | Type     | Default Value  | Description                                                       |
| -----------   | -------- | -------------- | ----------------------------------------------------------------- |
| uppercase     | Boolean  | true           | Whether the password must contain at least one uppercase letter.  |
| lowercase     | Boolean  | true           | Whether the password must contain at least one lowercase letter.  |
| digits        | Boolean  | true           | Boolean. Whether the password must contain at least one number.   |  
| specialChars  | Boolean  | true           | Whether the password must contain at least one special charecter. |
| minLength     | Number   | 8              | Number. The minimum length of the password.                       |


#### The **getPasswordStrength** function returns an object with two properties:
- `messages`: An array of strings containing messages for each criterion that the password does not meet.
- `strength`: A string indicating the strength of the password. Possible values are "Weak", "Moderate", and "Strong".


## Contributing

Contributions are welcome! If you find a bug or would like to add a feature, please open an issue or pull request on GitHub.


## Author

- [@nihalavulan](https://www.github.com/nihalavulan)



