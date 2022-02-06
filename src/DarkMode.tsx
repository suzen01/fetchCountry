import React from 'react';
import './App.scss'
import ToRoutering from "./App"

export default function DarkMode() {
const [darkTheme, setDarkTheme]=React.useState(false)
React.useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkTheme))
  }, [darkTheme])

  return(  
 <>

<div>
    <div className={darkTheme ? 'dark-theme' : 'light-theme'}>
      <nav>
        <div className='button-container'>
          <button onClick={() => setDarkTheme(prevTheme => !prevTheme)}>
            theme
          </button>
        </div>
      </nav>
      <div className='content'>
        <h1>{darkTheme ? 'Dark Mode' : 'Light Mode'}</h1>
        </div>
        <p>
          
          <ToRoutering/>

        </p>
      
    </div>

  </div>
  </>
  )
}
