import React from 'react'
import UserStatus from './Components/UserStatus'


const App = () => {
  return (
    <div>
      <UserStatus loggedIn={false} isAdmin={true}/> 
    </div>
  )
}

export default App

