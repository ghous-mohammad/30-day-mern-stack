import express  from "express";
import User from "../db/model.js";


const router = express.Router()




router.get('/' , async (req, res ) => {
    try{
        
        const users = await User.find();
        res.status(200).json(users)
    
    }catch(error){
        res.status(500).json({error : error.message})

    }
})



router.post("/", async (req, res) => {
    const { name, email, password, age } = req.body;

    try {

        const newUser = new User({ name, email, password, age });
        await newUser.save();
        
        res.status(201).send(`${name}, you have been successfully registered`);

    } 
    catch (error) {
        res.status(400).json({ error: error.message || "Missing properties" });
    }
});



router.get('/:id' , async(req, res) => {

    const { id } = req.params;

    try{
        const foundUser = await User.findById(id)
        if(!foundUser){
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json(foundUser)

    }catch(error){

        res.status(500).json({ error: error.message });

    }


})

router.patch('/:id' , async (req, res) =>{
    const updates = req.body;
    const {id} = req.params
    try {
      
        const foundUser = await User.findByIdAndUpdate(id,updates , {new: true , runValidators: true})
        if (!foundUser) {
            // Handle the case where the user with the specified ID is not found
            return res.status(404).send("User not found");
        }
        res.status(200).json(foundUser)

    

    } catch (error) {
        res.status(400).json({ error: error.message });
        
    }


})


router.put('/:id' , async (req, res) =>{
    const {name, email , password , age} = req.body;
    const {id} = req.params
    try {
        const foundUser = await User.findByIdAndUpdate(id , {name  , email , password , age } , {new: true , runValidators: true})
        if(!foundUser){
            res.status(404).send("user not found")
        }
        res.status(200).json(foundUser)
        
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

    
})


router.delete('/:id' , async (req, res)=>{
    const {id} = req.params

   try {

    const deletedUser = User.findByIdAndDelete(id) 
    if(!deletedUser){
        res.status(404).send("user not found")
    }
    res.status(200).json({message: "user has been deleted"})
    
} catch (error) {
    res.status(400).json({ error: error.message });
}



})

export default router