 const AsyncHandler =(requestHandler) => {
   return (req , res , next ) => {
        Promise.resolve(requestHandler(req , res , next)).
        catch((err) => next(err))
    }
 }


 export {AsyncHandler}



 /// 2nd Method ///

// const AsyncHandler = () => {}
//  const AsuncHandler = (func) =>{() => {}}
//  const AsuncHandler = (func) =>async () => {}
 
 
 
 
//  const AsuncHandler = (fn) =>async (req , res , next)  => {

//     try{
//         await fn(req , res , next)

//     } catch(error){
//         res.status(error.code || 500).json({
//             sucess: false,
//             message: err.masage 
//         })
//     }
//  }