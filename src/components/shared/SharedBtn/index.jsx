import React from 'react'
import clsx from 'clsx'
import "./style.css"

export const ButtonShared = ({ title, id, className, variant, type = "button", disabled, children, ...props }) => {
    return (
        <button
            {...props}
            id={id}
            type={type}
            disabled={disabled}
            className={clsx("btn", variant, className)}
        >
            {title || children}
        </button>
    )
}
