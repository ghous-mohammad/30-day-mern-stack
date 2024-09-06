import mongoose, { Schema } from "mongoose";

let FormApi = new Schema(
    {
        fullname : {required : true  , type : String},
        email:  {required : true  , type : String},
        password:  {required : true  , type : Number},
        confirmPassword :  {required : true  , type : Number},
    }
)

let registrationForm = mongoose.model("FormApi" , FormApi)
export default registrationForm


