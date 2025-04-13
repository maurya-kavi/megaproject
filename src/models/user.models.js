import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import crypto from "crypto";

const userSchema = new Schema({
    avatar : {
        type:{
            url:String,
            localPath:String,
        },
        default:{
            url:`https://placehold.co/600x400`,
            localPath:"",
        },
    },
    username:{
        tyrp:String,
        required:true,
        lowercase:true,
        trim:true,
        unique:true,
    },
    email:{
        type:email,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
    },
    fullname:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    isEmailVarified:{
        type:Boolean,
        default:false,
    },
    forgetPasswordToken:{
        type:String,
    },
    forgetPasswordExpiry:{
        type:Date,
    },
    refreshToken:{
        type:String,
    },
    emailVerificationToken:{
        type:String,
    },
    emailVerificationExpiry:{
        type:Date,
    },
}, {timestamps:true});

userSchema.pre("save" , async function(next){
    if(!this.isModified(password)) return next();
    this.password = await bcrypt.hash(this.password , 10);
    next();
});

userSchema.methods.isPasswordCorrect= async function(password){
    return await bcrypt.compare(password, this.password)
};

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id:this._id,
            email:this.email,
            username:this.username,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY,
        },
    );
};

userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id:this._id
        },
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:process.env.ACCESS_TOKEN_EXPIRY},
    );
};

userSchema.methods.generateTemporaryToken = function(){
    const unHashedToken = crypto.randomBytes(20).toString("hex");
    const hashedToken = crypto.createHash("sha256").update(unHashedToken).digest("hex");

    const tokenExpiry = Date.now() + (20*60*1000);

    return {unHashedToken , hashedToken , tokenExpiry};
}

export const User = mongoose.model("User" , userSchema);

