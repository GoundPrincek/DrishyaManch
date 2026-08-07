import { AsyncHandler } from '../utils/AsyncHandler.js';
import {ApiError} from "../utils/ApiErrors.js"
import {User} from "../models/user.model.js"
import {uploadOnClodinary} from "../utils/cloudinary.js"
import { ApiResponse } from '../utils/ApiRespose.js';

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
            throw new ApiError(409, "User with email or Username already exists")
        }

       const avatarLocalPath = req.files?.avatar[0]?.path;
       const coverimageLocalPath = req.files?.coverImage[0]?.path;

        if (!avatarLocalPah){
            throw new ApiError (400, " Avatar file is required")
        }

       const avatar = await uploadOnClodinary(avatarLocalPath)
       const coveImage = await uploadOnClodinary(coverImageLocalPath)

       if (!avatar){
        throw new ApiError(400, "Avatar is required")
       }

       const user = await User.create({
        fullName,
        avatar: avatar.url,
        coverImage:coverImage?.url || "",
        email,
        password,
        username:username.toLowerCase()
       })

       const createduser = await User.findById(user._id).select(
        "-password -refreshToken "

       )
       if(!createduser){
        throw new ApiError (501, "Something went wrong while registering the user ")
       }

       return res.status(201).json(
        new ApiResponse(200, createduser, "User Registred Succesfully")
       )


}); 


export { 
    registerUser,
};