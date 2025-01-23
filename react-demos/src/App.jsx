import React, { useEffect, useState } from 'react'
import UserProfile from './ComponentUseContext/UserProfile'
import { UserProvider } from './ComponentUseContext/UserContext'
import UpdateUser from './ComponentUseContext/UpdateUser'



const App = () => {
  return (
    <UserProvider>
      <UserProfile />
      <UpdateUser/>
    </UserProvider>
  )
}

export default App

