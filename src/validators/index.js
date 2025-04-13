import {body} from "express-validator";

userRegistrationValidator = ()=>{
    return [
        body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required") // when above field of email is not entered then only this code execute
        .isEmail()  //check for valid email
        .withMessage("Email is Invaild"),

        body("username")
        .trim()
        .notEmpty()
        .withMessage("username is required")
        .isLength({min:3})
        .withMessage("username should be of atleast 3 char")
        .isLength({max:13})
        .withMessage("username should not exceed 13 char"),
        
    ];
};

const userloginValidator = () =>{
    return [
        body("email").isEmail().withMessage("Email is Invalid"),
        body("password").isEmpty().withMessage("Password cannot be empty"),
    ];
};

export {userRegistrationValidator , userloginValidator};