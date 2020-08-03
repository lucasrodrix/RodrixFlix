import React from 'react';

function FormField({label, name, onChange, type, value}){
    return(
        <div>
            <label>
                {label}:
                <input 
                    type={type} 
                    value={value} 
                    name={name} 
                    onChange={onChange}
                />
            </label>
        </div>
    )
}

export default FormField;