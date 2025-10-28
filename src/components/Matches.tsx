import { useState } from "react";
import OneMatch from "./Match";
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
    return <>
        <button onClick={handleAddMatch}>Add a Match</button>
        {matches.map((match) => <ul>
            <li key={match.id}>
                <OneMatch title={match.title} score={match.score}/>
            </li>
        </ul>)}
    </>
}