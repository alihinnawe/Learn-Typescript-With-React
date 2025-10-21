
import { type ReactNode } from "react";

type ComponentProps = {
    title: string,
    description: string,
    children: ReactNode
}

export default function TestComponent ({title, description }: ComponentProps) {

    return (    
    <main>
        <p>{title}</p>
        <button>{description}</button>
    </main>
    )
}