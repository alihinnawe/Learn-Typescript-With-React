
import { type PropsWithChildren, type ReactNode } from "react";

// type ComponentProps = {
//     title: string,
//     description: string,
//     children: ReactNode
// }
// As an alternative to the type ReactNode for the children pro; use a type PropsWithChildren.
type ComponentProps = PropsWithChildren<{title: string ; description: string}>
export default function TestComponent ({title, description, children }: ComponentProps) {

    return (    
    <main>
        <p>{title}</p>
        <h1>{children}</h1>
        <button>{description}</button>
    </main>
    )
}