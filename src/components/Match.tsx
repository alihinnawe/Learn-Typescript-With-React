import { type singleMatch as sm}  from "./Matches"

export default function OneMatch ({title , score} : sm) {

    return (
        <>
            {title}
            {score}
        </>
    )
}