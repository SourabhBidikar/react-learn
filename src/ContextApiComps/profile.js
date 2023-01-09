import React from 'react'
import { AppContext } from '../App'
import { useContext } from 'react'
import Changeprofile from './changeprofile'


const Profile = () => {
  
    const {username} =useContext(AppContext);
    return (
    <div>
      <h1>Profile of user : {username}</h1>
      <Changeprofile/>
    </div>
  )
}

export default Profile
