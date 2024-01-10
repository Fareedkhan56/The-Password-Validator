// Q4; The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

let pass = prompt("Enter Password");

PasswordValidator(pass);

function PasswordValidator(password) {
    let digitsFlag = false;
    let upperFlag = false;
    let lowerFlag = false;

    if (password.length >= 8) {
        for (let i = 0; i < password.length; i++) {
            let charCode = password[i].charCodeAt();

            if (charCode >= 48 && charCode <= 57) {
                digitsFlag = true;
            } 
            else if (charCode >= 65 && charCode <= 90) {
                upperFlag = true;
            } 
            else if (charCode >= 97 && charCode <= 122) {
                lowerFlag = true;
            }
        }

        if (upperFlag && lowerFlag && digitsFlag) {
            console.log("Perfect");
        } 
        else {
            throw new Error("Please Enter At Least 1 Lower Letter, 1 Upper Letter, and 1 Digit");
        }
    } 
    else {
        throw new Error("Password Is Too Short");
    }
}

