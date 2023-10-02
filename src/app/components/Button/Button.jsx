import React from 'react';
import ui from './Button.module.scss'

const Button = ({type, children, className, onMouseLeave, onClick}) => {
    const mod = "button"
    const uiClassName = ui[`${mod}--${type}`]

    return <button 
        className={`${uiClassName} ${className}`}
        onClick={onClick} 
        onMouseLeave={onMouseLeave}
    >{children}</button>
}

export default Button;
