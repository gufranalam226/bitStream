

const asyncHandler = (reqHandlerFunctin) =>{
    return (req, res, next)=>{
        Promise.resolve(reqHandlerFunctin(req, res, next))
        .catch((err)=> next(err))
    }
}

export {asyncHandler}