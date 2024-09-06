import userroute from "./routes/index.js"
import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import connectdb from "./db/connection.js"

let app = express()
let port = 5000 
app.use(bodyParser.json())
app.use(cors())
app.use("/user" , userroute)




app.get("/" , (req, res) =>{
    res.send('welcome to mern-stack-day-07')
})
connectdb()



app.listen(port , () => console.log(`server is successfully running on port ${port}`))