/* eslint-disable no-unused-vars */
import React , {useState} from 'react'
import axios from 'axios'


function RegistrationForm() {
    let [formData , setFormdata] = useState({

    })



    let handlechange = (event) => {
        let fieldName = event.target.name;
        let fieldValue = event.target.value;
        
        setFormdata(prevFormDate =>({
            ...prevFormDate,
            [fieldName] : fieldValue
    
        }))
    
    
    }
    
let  handleSubmit = async (event) => {
    event.preventDefault()
    console.log(formData);
    try {
         await axios.post('http://localhost:5000/user/upload', formData).then(res=> console.log("good" + res))
        .catch(err => console.log(err+ "i am having trouble"))
         // Log the response data
    } catch (error) {
        console.log("There was an error submitting the form!", error);
    }
    
   setFormdata("")


}            

  return (
 
<>

<h1 id="heading">Registration Form</h1>

    <div className="main">

        <form onSubmit={handleSubmit} action='POST' >
            <label htmlFor="fname">
                First Name:
                <input id="fname" type="text" required  name="fname" value={formData.fname || "" } onChange={handlechange} />
            </label>

            <label htmlFor="lname">
                Last Name:
                <input id="lname" type="text" name="lname" value={formData.lname  || "" } onChange={handlechange}  />
            </label>

            <label htmlFor="email">
                Email:
                <input id="email" type="email" required name="email" value={formData.email  || ""} onChange={handlechange}  />
            </label>
            <label htmlFor="address">
                Address:
                <input id="address" type="text" required name="address"  value={formData.address  || ""} onChange={handlechange}  />
            </label>
            <label htmlFor="country">
                Country:
                <input id="country" type="text"  required name="country" value={formData.country  || ""} onChange={handlechange}  />
            </label>
         
            <label htmlFor="phone">
                Phone:
                 <input id="phone" type="number" required name="phone"  value={formData.phone  || ""} onChange={handlechange}  />
            </label>

            <input type="submit" value="Submit" />




        </form>


    </div>



</>
  )
}

export default RegistrationForm

















