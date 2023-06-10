import React, { useState } from 'react'
import './style.css';
import UserDisplay from './UserDisplay';



function User() {

  const[username,setUserName] =useState("")

  const[userData,setUserData] =useState({})


const handlechange =(e)=>{

setUserName(e.target.value)
  
}
const handleSubmit =(e)=>{
  e.preventDefault()

  fetch(`https://api.github.com/search/users?q=${username}`)
  .then((result)=>{
    return result.json();
  }).then((data)=>{
    // console.log(data)
    setUserData(data)
  })

 
  

}


  return (
    <>
   
   <div className='container'>

   <div className='header font-color ds'>

    <h2>Github User</h2>
   </div>
     
     <form className='form-info' autoComplete='off' onSubmit={handleSubmit}>
          <div className='ds'>  <input className='form-data' type='text' placeholder='Search username' value={username} name='name' onChange={handlechange}/>  </div>
         
         <div className='ds'>
       <button className='form-data btn'>Search</button>
      </div>
  
    </form>   
  

    <UserDisplay userData ={userData}/>

   </div>



    </>
  )
}

export default User
