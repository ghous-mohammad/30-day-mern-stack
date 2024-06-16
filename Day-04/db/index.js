import mongoose from "mongoose";



const connectdb = async () => {
    try {
       await mongoose.connect(`${process.env.MONGODB_URL}`)
       console.log(`connected to db`);
    } catch (error) {
        console.error("error while connecting to database" , error)
        throw error
    }

}

export default connectdb