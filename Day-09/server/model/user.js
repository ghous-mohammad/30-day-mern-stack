import mongoose from "mongoose";
import bcrypt from "bcryptjs"

const User = new mongoose.Schema({
    username: {
     type : String,
     required : true,
     trim : true,
     unique : true,
    },
    email:{
      type : String,
      required:true,
      unique : true,

    },

    password : {
        type : String,
        required : true,
    },


} ,{timestamps : true})



User.pre("save" , async function(next) {
    if(!this.isModified('password')){
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password , salt);
    next()
} )


User.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword , this.password)
}



const Usermodel = mongoose.model("User" , User)
export default Usermodel