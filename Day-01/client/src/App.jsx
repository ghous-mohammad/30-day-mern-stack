
import {useState , useEffect} from 'react'
import axios from 'axios'

function App() {
const [data , setData] = useState([])

useEffect(()=>{
  axios.get('/api/data').then((res)=> {

    setData(res.data)


    console.log(data)
  }).catch((error) =>{
    console.log(error)
  })
})



console.log(data)

  return (
   
  <div className="bg-[#E7ECEF] h-[100vh] w-[100vw]">
       <h1 className='text-5xl font-bold  text-center  pt-2'>front end and backend conected</h1>
       <p className='text-xl   text-center  pt-1'>Using React.js , Node.js ,  express.js  </p>

 {
  (data.length === 0)?(
    <p>loading... </p>
  ):(
    
  
  data.map((Data , index) => {
    return (
      <div key={index} className='p-5 text-3xl font-bold text-[#274C77] '>
     

        <p className='pt-5'> Name : {Data.name}</p>
        <p>Positions : {Data.occupation}</p>
        </div>
    )
  
    
  })
   
  )
  
 }
    
    </div>
    
  )
}

export default App
