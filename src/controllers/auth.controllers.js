// import { asyncHandler } from "../utils/async-handler.js";
// import User from "../models/user.models.js";

// const registerUser = asyncHandler(async(req,res)=>{
//     const {username, email , password , role} =req.body();

//     // validation
//     userRegistrationValidation(body);
// })

// export {registerUser};



import { asyncHandler } from "../utils/async-handler.js";
import User from "../models/user.models.js" ;

const registerUser = asyncHandler(async (req, res) => {
  const { email, username, password, role } = req.body;

  //validation
  if(!email || !password || !username || !role){
    res.status(400).json({
        message:"Enter the valid details"
    })
  }

//   since we are using async handler , no need of try catch
   const existingUser =await  User.findOne({email:email})
   if(existingUser){
    res.status(400).json({
        message:"user already have account"
    })
   }

//    if user has no account
// we will create new account as a user 
   const user = User.create({
    email,
    password,
    username,
    role,
   })

});

const loginUser = asyncHandler(async (req, res) => {
  const { email, username, password, role } = req.body;

  //validation
});

const logoutUser = asyncHandler(async (req, res) => {
  const { email, username, password, role } = req.body;

  //validation
});

const verifyEmail = asyncHandler(async (req, res) => {
  const { email, username, password, role } = req.body;

  //validation
});

const resendEmailVerification = asyncHandler(async (req, res) => {
  const { email, username, password, role } = req.body;

  //validation
});
const resetForgottenPassword = asyncHandler(async (req, res) => {
  const { email, username, password, role } = req.body;

  //validation
});

const refreshAccessToken = asyncHandler(async (req, res) => {
  const { email, username, password, role } = req.body;

  //validation
});

const forgotPasswordRequest = asyncHandler(async (req, res) => {
  const { email, username, password, role } = req.body;

  //validation
});

const changeCurrentPassword = asyncHandler(async (req, res) => {
  const { email, username, password, role } = req.body;

  //validation
});

const getCurrentUser = asyncHandler(async (req, res) => {
  const { email, username, password, role } = req.body;

  //validation
});

export {
  changeCurrentPassword,
  forgotPasswordRequest,
  getCurrentUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
  resendEmailVerification,
  resetForgottenPassword,
  verifyEmail,
};