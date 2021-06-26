import React, { useState } from 'react'
import { createContext } from 'react'
 
export const NavbarContext = createContext()

const Context = (props) => {
 
    const [Auth, setAuth] = useState([]);
    return (
         <NavbarContext.Provider value={{Auth, setAuth}} >
          {props.children}
         </NavbarContext.Provider>
    )
}

export default Context
