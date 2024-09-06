import jwt from "jsonwebtoken"
import model from "../model/user.js"
import { verifyToken } from "../utils/jwtUtils.js"



export const protect = async (req , res , next ) => {

    let token;

    if(req.headers.authorization &&  req.headers.authorization.startswith("Bearer"))
     {
        try{
            token = req.headers.authorization.split(' ')[1];

            const decoded = verifyToken(token)

            req.user =  await model.findById(decoded.id).select('-password');

            next()

        }catch(err){
            res.status(401).json({message : "Not Authorized, token Failed "})
        }
     }

     if (!token) {
        res.status(401).json({ message: 'Not authorized, no token' });
    }

}

