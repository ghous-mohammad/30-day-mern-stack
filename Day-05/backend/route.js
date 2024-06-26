/* eslint-disable no-unused-vars */
import express from "express"
import bodyParser from "express"
import connectdb from "./db/index.js";
import Form from "./db/schema.js";
import cors from "cors"


let app = express()
let port = 5000
app.use(bodyParser.json())
app.use(cors())
connectdb()

app.get('/' , (req , res) => {
    res.send("welcome to mern stack Day-05")
})


app.get('/user/data' , async (req, res ) => {
    try{
        
        const users = await Form.find();
        res.status(200).json(users)
    
    }catch(error){
        res.status(500).json({error : error.message})

    }
})


app.post("/user/upload", async (req, res) => {
    // Destructure and validate required properties
    const { fname, lname, email, dob, address, country, phone } = req.body;
    
    // Check for missing properties
    if (![fname, lname, email, address, country, phone].every(Boolean)) {
        return res.status(400).send("Missing properties");
    }

    try {
        
        const newUser = new Form({ fname, lname, email,  address, country, phone });

        await newUser.save();

     
        res.status(200).send(`${fname}, your form has been submitted successfully`);
        console.log("data successfully posted")

    } catch (error) {
        // Log error and send error response
        console.error(`Error while registering user: ${error}`);
        res.status(500).json({ error: error.message || "Server error" });
    }
});


app.listen(port, ()=>{
    console.log(`app listening on port 5000`);
})