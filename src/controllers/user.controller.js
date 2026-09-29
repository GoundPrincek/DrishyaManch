import { AsyncHandler } from '../utils/AsyncHandler.js';
import {ApiError} from "../utils/ApiErrors.js"
import {User} from "../models/user.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { ApiResponse } from '../utils/ApiRespose.js';
import { access } from 'fs';

const genrateAccessAndRefereshToken =async(userId)=>{
    try{
        const user = await User.findById(userId)
        const acessToken = user.generateAccessToken
        const refreshToken = user.generateRefreshToken

        user.refreshToken = refreshToken
        await user.save({validateBeforeSave : false
        })
        return {acessToken , refreshToken}

    }catch(error){
        throw new ApiError(500,"Something went wrong while generating refresh and acess token")
    }
}

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

        const existedUser = await User.findOne({
            $or:[{ username }, { email }]
        })

        if (existedUser){
            throw new ApiError(409, "User with email or username already exists")
        }

       const avatarLocalPath = req.files?.avatar?.[0]?.path;
       const coverImageLocalPath = req.files?.coverImage?.[0]?.path;

        if (!avatarLocalPath){
            throw new ApiError (400, "Avatar file is required")
        }

        if (!coverImageLocalPath){
            throw new ApiError (400, "Cover image file is required")
        }

       const avatar = await uploadOnCloudinary(avatarLocalPath)
       const coverImage = await uploadOnCloudinary(coverImageLocalPath)

       if (!avatar){
        throw new ApiError(400, "Avatar is required")
       }

       const user = await User.create({
        fullName,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
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

const loginUser =AsyncHandler(async (req , res) => {
     // req body -> data
     // username or email
     //find the user
     //password check
     //access and refresh token
     //send cookie


     const {email,username,password}= req.body

     if(!username || !email){
        throw new ApiError(400,"username and password is required")
     }

     const user = await User.findOne({
        $or: [{username} , {email}]
     })
     if(!user){
        throw new ApiError(404,"User doesnot found")
     }

     const ispasswordValid = await user.ispasswordCorrect(password)

  if(!ispasswordValid){
        throw new ApiError(401,"Invalid user cradential")
     }

    const {accessToken , refreshToken} =await 
    genrateAccessAndRefereshToken(user._id)

    
})


export { 
    registerUser,
};