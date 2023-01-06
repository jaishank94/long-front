import React from 'react';
import { useState } from 'react';
import { useTable,useFilters} from "react-table";


const Dropdown = ({options})=> {
    const [value,setValue] = useState('')
   
    const handleChange = (event) => {
        const value = event.target.value || undefined;
        setValue(event.target.value);
    };  

return(
        <select value={value} onChange={handleChange}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
        </select>
)
}

export default Dropdown;