import React, { useState } from 'react'
import { ThemeContext } from './Mycontext'
import Hooks from './Hooks'

function ThemeProvider({children}) {
    const [theme,setTheme]=useState('light');
    const toggleTheme=()=>setTheme(pre => (pre ==='light' ? 'dark' :'light'));
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
        <Hooks/>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider