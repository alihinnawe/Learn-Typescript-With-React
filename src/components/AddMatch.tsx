import type { FormEvent } from "react";
import { useRef, useState } from "react";
import MatchesList from "./MatchesList";
import {type singleMatch } from "./Matches";
export default function AddMatch () {
    const matchTitle = useRef<HTMLInputElement>(null);
    const matchScore = useRef<HTMLInputElement>(null);

    const [matchesList, setMatchesList] = useState <singleMatch []>([]);
    
    function handleAddMatch (event : FormEvent<HTMLFormElement>) {
        event.preventDefault();
        
        const enteredTitle = matchTitle.current!.value;
        const enteredScore = matchScore.current!.value;
        setMatchesList((previousMatches) => [...previousMatches, {id: Math.random(), title: enteredTitle, score: enteredScore}])
        
    }
    function handleDeleteMatch(id: number) {
        setMatchesList((prev) => prev.filter((match) => match.id !== id));
    }
    return ( 
        <>
        <form action="" onSubmit={handleAddMatch}>
            <p>Add a Match:</p>
            <label htmlFor="titel">Title: </label>
            <input type="text" id="title" ref={matchTitle}/>
            
            <label htmlFor="score">Score: </label>
            <input type="text" id="score" ref={matchScore}/>
            <button>Add Match</button>
        </form>
        <MatchesList matchesl={matchesList} onDeleteMatch={handleDeleteMatch}/>
        </>
    )
}