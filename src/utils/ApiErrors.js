class ApiError extends Error {
    constructor (
        statusCode ,
        message="Something went wrong" ,
        error = [],
        stactck = ""
    ){
        Supre(message)
        this.statusCode = statusCode
        this.data = null
        this.massage = message
        this.success = false;
        this.error = this.errors
        
        if (stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(this, this.
                contructor
            )
        }
    }
}

export {ApiError}