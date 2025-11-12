import { type ComponentPropsWithoutRef, type ReactNode, type ElementType} from "react";

type PolymorphicContainer <T extends ElementType> = {
    as? : T;
    children : ReactNode
} & ComponentPropsWithoutRef <T>;

export default function PolymorphicPropsContainer <C extends ElementType> ({as, children, ...props} : PolymorphicContainer<C>) {

    const Component = as || 'div';
    return <Component {...props}>{children}</Component>

}