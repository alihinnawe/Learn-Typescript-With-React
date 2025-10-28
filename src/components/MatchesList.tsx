
import { type singleMatch as sm } from "./Matches"
import OneMatch from "./Match"
export default function MatchesList  ({matchesl} : {matchesl :sm []}) {

    return (
        <>
      {matchesl.map((match) => (
    <ul key={match.id}>
        <li>
            <OneMatch id={match.id} title={match.title} score={match.score} />
        </li>
    </ul>
))}
</>
    )
}