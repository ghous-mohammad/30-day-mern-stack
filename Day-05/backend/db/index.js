/* eslint-disable no-unused-vars */
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const connectdb = async () => {
    try {
       await mongoose.connect(`${process.env.mongo_db_url}`)
       console.log(`connected to db`);
    } catch (error) {
        console.error("error while connecting to database" , error)
        throw error
    }

}

export default connectdb