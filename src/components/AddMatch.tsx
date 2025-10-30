import type { FormEvent } from "react";

export default function InsetMatch () {
    function handleSubmit (event : FormEvent) {
        event.preventDefault();
    }
    return (
        <form action="" onSubmit={handleSubmit}>
            <p>Add a Match:</p>
            <label htmlFor="titel">Title: </label>
            <input type="text" id="title" />
            
            <label htmlFor="score">Score: </label>
            <input type="text" id="score"/>
            <button>Add Match</button>
        </form>
    )
}