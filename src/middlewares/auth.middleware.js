import { ApiError } from "../utils/ApiErrors"
import { AsyncHandler } from "../utils/AsyncHandler"
import jwt from "jsonwebtoken"




export const verifyJWT = asyncHandler(async(req , res, 
    next ) =>{
       const token = req.cookies?.accessToken || req.header
        ("Authorixation")?.replace("Bearer" , "")

        if(!token) {
            throw new ApiError(401,"Unauthorized request")
        }

        jwt.verify(token , process.env.accessToken)
    })