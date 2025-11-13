import { type ComponentPropsWithoutRef, type ElementType, type FormEvent, type HTMLElementType, type ReactNode, useRef } from "react";

import InputPlayers from "./InputPlayers";
import PolymorphicPropsContainer from "../PolyphormicPropsContainer";

type FormProps = ComponentPropsWithoutRef <'form'> & {
    onSave : (value: unknown) => void;
};

export default function Form ({onSave, children, ...otherProps} : FormProps) {
    const formRef =  useRef<HTMLFormElement>(null);
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

}