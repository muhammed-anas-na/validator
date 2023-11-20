module.exports = {
  lowercase: {
    pattern: /[a-z]/,
    score: 1,
    message: "lowercase letters",
  },
  uppercase: {
    pattern: /[A-Z]/,
    score: 1,
    message: "uppercase letters",
  },
  digits: {
    pattern: /[0-9]/,
    score: 1,
    message: "digits",
  },
  specialChars: {
    pattern: /[!@#$%^&*(),.?":{}|<>]/,
    score: 1,
    message: "special characters",
  },
};
