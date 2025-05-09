import React, { useState } from 'react'
import { AuthorizeContext } from './Mycontext'
import Hooks from './Hooks'

// function AuthorizeProvider(Hooks) {
//     const [isLoggedIn,setIsLoggedIn]=useState(false);
//    const login =()=>setIsLoggedIn(true);
//    const logOut=()=>setIsLoggedIn(false);
//   return (
//     <AuthorizeContext.Provider value={{isLoggedIn,login,logOut}}>
//         <Hooks/>
//     </AuthorizeContext.Provider>
//   )
// }

// export default AuthorizeProvider

const AuthorizeProvider = (Hooks) => {
  const [isLoggedIn,setIsLoggedIn]=useState(false);
     const login =()=>setIsLoggedIn(true);
     const logOut=()=>setIsLoggedIn(false);

  return (
    <AuthorizeContext.Provider value={{isLoggedIn,login,logOut}}>
            <Hooks/>
        </AuthorizeContext.Provider>
  )
}

export default AuthorizeProvider