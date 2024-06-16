import express  from "express";
import { v4 as uuidv4 } from 'uuid';


const router = express.Router()
let Users = []   //local database


router.get('/' , (req, res ) => {
    
    res.send(Users)
})


router.post('/' , (req,res) =>{

        const {email , password , name , age} = req.body;
    
     
        if(!email || !name || !password){
         res.status(400).json({error:"missing properties"})
        }
        const userId = uuidv4();
     
        const newUser = {
          id : userId, email , name , password , age
        }    
        console.log(newUser)
     
        Users.push(newUser)
     
        res.status(201).send(`${name}, you have been successfully registered`)
     
     
     
})


router.get('/:id' , (req, res) => {

    const {id} = req.params
    const foundUser = Users.find((user) => user.id == id)
    res.send(foundUser)

})

router.patch('/:id' , (req, res) =>{
    const {name, email , password , age} = req.body;
    const {id} = req.params
    const foundUser = Users.find((user) => user.id === id)

    if (!foundUser) {
        // Handle the case where the user with the specified ID is not found
        return res.status(404).send("User not found");
    }

   


    if(age){
        foundUser.age = age
    }
    if(name){
        foundUser.name = name
    }
    if(password){
        foundUser.password = password
    }
    if(email){
        foundUser.email = email
    }

   

    
    res.send(foundUser)




})




router.put('/:id' , (req, res) =>{
    const {name, email , password , age} = req.body;
    const {id} = req.params
    const foundUser = Users.find((user) => user.id === id)

    if(name || email || password || age){
       foundUser.name = name
       foundUser.email = email
       foundUser.password = password
       foundUser.age = age

    }
res.send(`data have been successfully updated`)





})


router.delete('/:id' , (req, res)=>{
    const {id} = req.params


    Users =  Users.filter((user) => user.id !== id)

    res.send(`${id } has been successfully deleted`)

})

export default router