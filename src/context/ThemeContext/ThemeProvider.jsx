import  { useEffect, useState } from 'react'

import { ThemeContext } from './ThemeContext'

export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState('light')

    useEffect(() => {
      document.documentElement.classList.toggle("dark", theme=="dark")
    }, [theme])
    

    const ToggleTheme =()=>{
        setTheme((prev)=> prev === "light"? "dark": "light")
    }

    const value = {
        theme,
        ToggleTheme
    }
        
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    
  
}
