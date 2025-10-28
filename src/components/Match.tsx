import { type singleMatch as sm}  from "./Matches"

export default function OneMatch ({id, title , score} : sm) {

    return (
        <> {id}
            {title}
            {score}
        </>
    )
}