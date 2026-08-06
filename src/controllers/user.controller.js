import { AsyncHandler } from '../utils/AsyncHandler.js';
import {ApiError} from "../utils/ApiErrors.js"
import {User} from "../models/user.model.js"


const registerUser = AsyncHandler(async (req, res) => {
        //get user details from frontend
        //validation - not empty
        //check if user already exist:username , email
        //check for images,  check for avatar
        //upload them to cloudinary, avatar
        //create user object- create entry in db
        //remove password and refresh token field from responce
        //check for user creation 
        //return responce


       const {fullName,email,username, password} =  req.body
        console.log("email: ", email);

        if (
            [fullName, email, username, password].some((field) => 
                field?.trim() === "")
        ){
            throw new ApiError (400, "All Fields are required")
        }

        const existedUser = User.findOne({
            $or:[{ Username }, { email }]
        })

        if (existedUser){
            throw new ApiError(409, "User with email or Username already existed")
        }

        req.files?.avatar
});

export { 
    registerUser,
};