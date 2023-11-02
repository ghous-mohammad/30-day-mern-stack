/* eslint-disable no-unused-vars */
import  express  from "express";


const app = express()
const port = 5000  || process.env.PORT 

app.get('/api/data' , (req, res)=>{

    const corporateStructure = [
        {
            id:1,
            name:"ghous",
            occupation:"software engineer , AI Developer ,  CEO , CTO",

        },
        {
            id:2,
            name:"ghaniya",
            occupation:"chief product manager , fashion designer ",
            
        },
        {
            id:3,
            name:"kashif",
            occupation:"vice pressident , COO , CMO",
            
        },
        {
            id:4,
            name:"kamran ahmad",
            occupation:"professor , CFO",
            
        }
    ]

    res.send(corporateStructure)

})


app.listen(port , () => console.log("port listening at port on 5000"))