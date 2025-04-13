import { ApiResponse } from "../utils/api-response.js";

const healthCheck = async (req, res)=>{
    // use async await ,, and for error handling try catch , but we aviod it too becoz controller works through router and router apply all these  function , these async , aawait catch try using without importing express , becoz format i obverved or already defined for these uses
    
    res.status(200).json( new ApiResponse(200, {message:"Server is running"}));
};
export {healthCheck};