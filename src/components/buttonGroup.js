import React from 'react';
import { useState } from 'react';

const ButtonGroup = (props)=>{

const [active,setActive] = useState([])   
const BUTTONS = [ 'oral', 'inhalation', 'topical']

return props.items.map(key => {
   const isActive = active.includes(key)

   return (
     <button
       key={key}
       onClick={() => setActive(isActive
         ? active.filter(current => current !== key)
         : [...active, key]
       )}
       style={{
       background: isActive ? 'blue' : 'white',
       borderWidth:1,
       borderRadius:5,
       display:'inline-block',
       margin:5
       }}
     >
      {key}
     </button>
   )
 }) 

}

export default ButtonGroup;