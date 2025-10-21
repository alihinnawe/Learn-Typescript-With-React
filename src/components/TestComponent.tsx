
export default function TestComponent ({title, description }: {title: string; description: string}) {

    return (    
    <main>
        <p>{title}</p>
        <button>{description}</button>
    </main>
    )
}