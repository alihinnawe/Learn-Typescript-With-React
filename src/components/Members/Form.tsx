import { type ComponentPropsWithoutRef, type ElementType, type FormEvent, forwardRef, type HTMLElementType, type ReactNode, useImperativeHandle, useRef } from "react";

import InputPlayers from "./InputPlayers";
import PolymorphicPropsContainer from "../PolyphormicPropsContainer";

type FormProps = ComponentPropsWithoutRef <'form'> & {
    onSave : (value: unknown) => void;
};

const FinalForm = forwardRef  (function Form({onSave, children, ...otherProps} : FormProps, ref) {
    const formRef =  useRef<HTMLFormElement>(null);
    
    useImperativeHandle(ref, () => {
                return {
                        clear () {
                            console.log("Clearing");
                            formRef.current?.reset();
                        }

                };
            });
    function handleFormSubmission (event : FormEvent<HTMLFormElement>) {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            const finalData = Object.fromEntries(data);
            onSave(finalData);
            formRef.current?.reset();



    }
return (
    <form onSubmit={handleFormSubmission} {...otherProps} ref={formRef}>
        {children}
    </form>
 )

});
export default FinalForm;