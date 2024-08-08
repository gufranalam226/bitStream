class APIerror extends Error{
    constructor(
        statusCode,
        message,
        error,
        stack
    ){
        super(message)
        this.statusCode = statusCode,
        this.data = null
        this.message = message
        this.success = false,
        this.error = error

        if(stack){
            Error.captureStackTrace(this , this.constructor)
        }

    }
}

export {APIerror}