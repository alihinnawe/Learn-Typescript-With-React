import type { ComponentPropsWithoutRef } from "react";
    type InputButton = {
        el : 'button';
    } & ComponentPropsWithoutRef<'button'>;

    type InputAnchor = {
        el : 'anchor';
    } & ComponentPropsWithoutRef<'a'>;

export default function ComponentsType (props : InputButton | InputAnchor) {
    if (props.el === 'button') 
    return (
        <button {...props}>Click</button>)
    return <a {...props} href="www.google.com" >Link</a>

}
