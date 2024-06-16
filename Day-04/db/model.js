import mongoose, { Schema } from "mongoose";


const UserSchema = new Schema({
    name: { type: String, required: true },
    email:{ type: String, required: true },
    password: { type: Number, required: true },
    age:{ type: Number, required: false }


});

// Create the model from the schema
const User = mongoose.model("User", UserSchema);


export default User;
