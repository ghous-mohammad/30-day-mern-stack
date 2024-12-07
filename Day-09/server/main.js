import express from "express"
import Auth from "./Auth/route.js"
import bodyParser from "body-parser"
import dotenv from 'dotenv'
import connectedb from "../server/config/db.js"

dotenv.config()
connectedb()

const port = 5000
const app = express()


app.use(bodyParser.json())
app.use("/auth" , Auth)




app.listen(port , () => {
  console.log("app is running")
})