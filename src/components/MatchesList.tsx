import OneMatch from "./Match";
import { type singleMatch } from "./Matches";

type MatchesListProps = {
    matchesl: singleMatch[];
    onDeleteMatch: (id: number) => void;
};

export default function MatchesList({ matchesl, onDeleteMatch }: MatchesListProps) {
    return (
        <>
            {matchesl.map((match) => (
                <OneMatch 
                    key={match.id} 
                    {...match} 
                    onDelete={onDeleteMatch} 
                />
            ))}
        </>
    );
}
