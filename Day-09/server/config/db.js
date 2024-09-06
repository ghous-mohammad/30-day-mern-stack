import mongoose from "mongoose";



const connectedDB = async () => {
     try {
        await  mongoose.connect("abc")
        console.log("connected to db")
        
     } catch (error) {
        console.error("error while connecting to database")
        process.exit(1);
     } 
       

      }


export default connectedDB