import { type ComponentPropsWithoutRef, type ElementType, type FormEvent, type HTMLElementType, type ReactNode, useRef } from "react";

import InputPlayers from "./InputPlayers";
import PolymorphicPropsContainer from "../PolyphormicPropsContainer";

type FormProps = ComponentPropsWithoutRef <'form'> & {
    onSave : (value: unknown) => void;
};

export default function Form ({onSave, children, ...otherProps} : FormProps) {
    function handleFormSubmission (event : FormEvent<HTMLFormElement>) {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            const finalData = Object.fromEntries(data);
            onSave(finalData);


    }
return (
    <form onSubmit={handleFormSubmission} {...otherProps}>
        {children}
    </form>
 )

}