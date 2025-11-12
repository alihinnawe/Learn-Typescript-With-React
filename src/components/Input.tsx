import { forwardRef, type ComponentPropsWithoutRef } from "react"
type InputProps = {
    label : string,
    id: number} & ComponentPropsWithoutRef <'input'>;

const Input = forwardRef<HTMLInputElement, InputProps>(function Input ({label, id, ...props} : InputProps, ref) {

    return (
        <p>
        <label htmlFor="button">{label}</label>
        <input id="button" {...props} ref={ref}/>
        </p>
    );
});

export default Input;