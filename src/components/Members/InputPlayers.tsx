import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { forwardRef } from "react";

type InputProps = {
    label : string,
    id : string
} & ComponentPropsWithoutRef <'input'>

const InputPlayers =  forwardRef<HTMLInputElement, InputProps>(function Players ({label,id, ...props} : InputProps,ref) {

    return (
        <p>
            <label>{label}</label>
            <input id={id} name={id} ref={ref}  {...props} />

        </p>
    )

});

export default InputPlayers;