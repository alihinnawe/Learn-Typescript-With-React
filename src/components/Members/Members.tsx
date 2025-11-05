import React, { useRef , useState} from "react";
import Member   from "./Member.tsx" 

export type MemberType = {
        name : string;
        address: string
    }

export default function Members () {
   
    let nameRef = useRef <HTMLInputElement | null> (null);
    let addressRef = useRef <HTMLInputElement | null> (null);
    const [members, setMembers] =  useState <MemberType []> ([]);

    function handleAddNewMember (event : React.FormEvent) {
            event?.preventDefault();
            const name1 = nameRef.current?.value || '';
            const address1 = addressRef.current?.value.trim() || "";
               if (!name1 || !address1) {
                    alert("Please fill in both fields.");
              return;                  
                }
            setMembers((prev) => [...prev, { name: name1, address: address1 }]);

    }
    return (
        <>
            <p>Fill in the Form: </p>
            <form action="" onSubmit= {handleAddNewMember}>
                <label htmlFor="name" >Name: </label>
                <input id="name" ref= {nameRef} />
                
                <label htmlFor="address" >Name: </label>
                <input id="address" ref= {addressRef} />
                <button>Add a new Member: </button>
            </form>
            <Member membersList = {members} />
        </>
    )
}