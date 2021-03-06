import React from 'react'

import './CustomInput_master.css'

const CustomInput = ({
    icon: Icon, 
    inputType="text", 
    inputPlaceholder="Input Field", 
    placeholderAlign="placeholder-right",
    ...rest}) => {


    return (
        <div className="custom-input">
            {Icon !== undefined && 
            <span><Icon/></span>
            }
            <input className={`custom-input-field ${placeholderAlign}`} 
            type={inputType} placeholder={inputPlaceholder} {...rest}
            />
        </div>
    )
}

export default CustomInput
