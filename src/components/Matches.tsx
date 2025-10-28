import { useState } from "react";
import OneMatch from "./Match";
import MatchesList from "./MatchesList";

export type singleMatch = {
    id: number;
    title : string;
    score: string

}
export default function Matches () {


    const [matches, setMatches] =  useState<singleMatch[]>([]);
function handleAddMatch () {
    setMatches((previousMatches) => [...previousMatches, {id: Math.random() ,title: "RealMadrid vs Barcelona", score: "2-1"}] );
}

function handleDeleteMatch (id : number) {
    setMatches((prevMatches) => prevMatches.filter((match) => match.id !== id));
}
    return <>
        <button onClick={handleAddMatch}>Add a Match</button>
        < MatchesList matchesl={matches} onDeleteMatch={handleDeleteMatch}/>
    </>
}