import express from 'express'
import bodyParser from 'body-parser'
import userroutes from './routes/index.js'

const app = express()
app.use(bodyParser.json())
app.use('/user' , userroutes)

const port = 3000 ||  port.process.env



app.get("/" , (req, res) =>{
    res.send('heloo world')
})




app.listen(port , ()=>console.log(`server is successfully running on port ${port}`))