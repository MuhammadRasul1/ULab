import React from "react"
import cls from "./styles.module.scss"
import clsx from "clsx"

export const Input = React.forwardRef((props, ref) => {
    const { error, ...rest } = props

    return <>
        <input
            className={clsx(cls.input, { [cls.error]: !!error?.message })}
            {...rest}
            ref={ref}
        />
        {error?.message && <p style={{ color: 'red' }}>{error?.message}</p>}
    </>

})

Input.displayName = "Input"