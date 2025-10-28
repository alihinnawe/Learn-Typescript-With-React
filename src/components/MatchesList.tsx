
import { type singleMatch as sm } from "./Matches"
import OneMatch from "./Match"
export default function MatchesList({
  matchesl,
  onDeleteMatch,
}: {
  matchesl: sm[];
  onDeleteMatch: (id: number) => void;
}) {
  return (
    <ul>
      {matchesl.map((match) => (
        <li key={match.id}>
          <OneMatch {...match} />
          <button onClick={() => onDeleteMatch(match.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}