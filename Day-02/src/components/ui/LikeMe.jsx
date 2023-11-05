import { Heart }from 'lucide-react'
import { useState } from 'react'
const LikeMe = () => {

    const [count , setCount] = useState(0)


    function increament() {
        setCount(count+1)
    }

    function countNull(){
      setCount(0)
    }
  return (
    <div className='flex items-center justify-center space-x-5 pt-5' >
        
        <div>   
          <button onClick={increament} ><Heart className='text-red-400 hover:text-red-700 ' size={50}/></button>  
        </div>

        <div>
<p className='text-gray-300 text-lg'> Give Me Heart : {count}</p>
<button onClick={countNull} className='border rounded-3xl py-0 pb-1 pt-1 px-3 mt-2 text-sm  text-gray-400 border-gray-500' >Reset me</button>

        </div>
        
    </div>
  )
}

export default LikeMe