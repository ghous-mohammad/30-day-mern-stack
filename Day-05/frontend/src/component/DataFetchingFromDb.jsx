/* eslint-disable no-unused-vars */
import React , {useState , useEffect } from 'react'
import axios from "axios"

function DataFetchingFromDb() {
     const [data  , setData ] = useState([])
     const [error , setError] =useState(null)
     const [loading , setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            setError(null)
            setLoading(true)
            try {
                const response = await axios.get("/user/data")
                setData(response.data)
                
    
            } catch (error) {
                setError(error.message)
            }finally{
                setLoading(false)
            }
    
         }

         fetchData()
     
       
     }, [])
     


  return (

    <div>
      <h2> Registration Form Data </h2>
{loading && <p>loading ...</p>}
{error && <p>Error While Fetching Data</p>}
{!loading && !error && (
    <div>
          {data.map((user ) => (
            <p key={user._id}>Fistname:  {user.fname}  </p>
          ))}
          
     </div>  )
        
        }
    </div>
  )
}

export default DataFetchingFromDb