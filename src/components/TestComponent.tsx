
import { type ReactNode } from "react";

type ComponentProps = {
    title: string,
    description: string,
    children: ReactNode
}

export default function TestComponent ({title, description, children }: ComponentProps) {

    return (    
    <main>
        <p>{title}</p>
        <h1>{children}</h1>
        <button>{description}</button>
    </main>
    )
}