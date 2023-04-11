import React from 'react'
import {  MoonIcon } from './assets12/icons'
// import {ThemeContext} from '../App'
import './editor.css'

const EditHeader = () => {

  // const [isDark, setIsDark] = useState(ThemeContext); 
  return (
    <header className='header'>
      <div className='container'>
        <div className='logo-wrapper'>
          <div className='logo'>
            <span>JsSnipets</span>
          </div>
          {/* <button onClick={() => setIsDark(!isDark)} className='icon'>
            {isDark ? <MoonIcon/> : <SunIcon/>}
          </button> */}

          <button className='icon'>
           <MoonIcon/> 
          </button>
        </div>
        
      </div>
    </header>
  )
}

export default EditHeader
