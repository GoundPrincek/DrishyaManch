class ApiResponse {
    Constructor(statusCode , data , message = "Successs"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    } 
}

export {ApiResponse}