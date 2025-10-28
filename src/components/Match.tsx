import { type singleMatch as singlem}  from "./Matches"

export default function OneMatch ({id, title , score} : singlem) {

    return (
        <> {id}
            {title}
            {score}
        </>
    )
}