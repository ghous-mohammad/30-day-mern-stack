import mongoose, { Schema } from "mongoose";

let registerationForm = new Schema({

    fname: {required:true , type: String},
    lname:{required:true , type: String},
    email: {required:true , type:String} , 
    address:{required:true , type: String },
    country: {required:true , type: String },
    phone:{required:true , type: Number}


})



let Form = mongoose.model("Form" , registerationForm)

export default Form