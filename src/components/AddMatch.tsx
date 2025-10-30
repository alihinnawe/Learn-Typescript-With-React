import type { FormEvent } from "react";
import { useRef } from "react";
export default function InsetMatch () {
    const matchTitle = useRef<HTMLInputElement>(null);
    const matchScore = useRef<HTMLInputElement>(null);
    function handleSubmit (event : FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const enteredTitle = matchTitle.current!.value;
        const enteredScore = matchScore.current!.value;
    }
    return (
        <form action="" onSubmit={handleSubmit}>
            <p>Add a Match:</p>
            <label htmlFor="titel">Title: </label>
            <input type="text" id="title" ref={matchTitle}/>
            
            <label htmlFor="score">Score: </label>
            <input type="text" id="score" ref={matchScore}/>
            <button>Add Match</button>
        </form>
    )
}