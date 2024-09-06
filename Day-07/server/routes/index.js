import registrationForm from "../db/model.js"
import express from "express"



let router = express.Router()

router.get("/" , (req , res)=> {
   res.send("request recieved")

})


router.post("/" , async (req , res) => {
   const {fullname , email , password , confirmPassword} = req.body;

   try {
      if(!fullname || !email || !password || !confirmPassword ){
        res.status(400).send("Please Assign Properties ")

      }
      let newUser = new registrationForm({fullname , email , password , confirmPassword})
      await newUser.save()


      
      res.status(200).send(`${fullname}, your form has been submitted successfully`);
      console.log("data successfully posted")

  } catch (error) {
      // Log error and send error response
      console.error(`Error while registering user: ${error}`);
      res.status(500).json({ error: error.message || "Server error" });
  }




})

export default router