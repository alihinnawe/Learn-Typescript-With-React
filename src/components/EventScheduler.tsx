import { useState } from "react";
import Event from "./Event";
export default function EventScheduler () {
    type Event = {
        id: number;
        name: string;
        date: string

    }
    const [events, setEvent] = useState<Event[]>([]);

    function eventHandler () {
        const newEvent : Event = {
            id : Math.random(),
            name: "New Event",
            date: "today"       

        }              
        setEvent((previousEvents) => [...previousEvents, newEvent] );
 }



    return (
        <>
        <button onClick={eventHandler}>click to add event</button>
            
        {events.map((event) => (
            <div key={event.id}>
                <Event name={event.name} date={event.date} />
            </div>))};
        </>
    );
}