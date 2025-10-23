export default function Event ({name, date} : {name: string; date: string}) {

    return (
    <>
        <p>{name}</p>
        <p>{date}</p>
    </>
    )
}