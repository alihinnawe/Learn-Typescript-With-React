import { useState } from "react";
import MatchesList from "./MatchesList";
import "../App.css";

// Export the type so other files can import it
export type singleMatch = {
    id: number;
    title: string;
    score: string;
};

export default function Matches() {
    const [matches, setMatches] = useState<singleMatch[]>([]);

    function handleAddMatch() {
        setMatches((prev) => [
            ...prev,
            { id: Math.random(), title: "RealMadrid vs Barcelona", score: "2-1" }
        ]);
    }

    function handleDeleteMatch(id: number) {
        setMatches((prev) => prev.filter((match) => match.id !== id));
    }

    return (
        <div className="matches-container">
            <button className="add-match-button" onClick={handleAddMatch}>
                Add a Match
            </button>
            <MatchesList matchesl={matches} onDeleteMatch={handleDeleteMatch} />
        </div>
    );
}
