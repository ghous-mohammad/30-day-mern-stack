import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()

const connectdb = async () => {
    try {
       await mongoose.connect(`${process.env.DB_URL}`)
       console.log(`connected to db`);
    } catch (error) {
        console.error("error while connecting to database" , error)
        throw error
    }

}

export default connectdb