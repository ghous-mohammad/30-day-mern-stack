import express from 'express'
import bodyParser from 'body-parser'
import userroutes from './routes/index.js'

const app = express()
app.use(bodyParser.json())
app.use('/users' , userroutes)

const port = 3001 ||  port.process.env



app.get("/" , (req, res) =>{
    res.send('welcome to mern-stack-day-03')
})






app.listen(port , () => console.log(`server is successfully running on port ${port}`))