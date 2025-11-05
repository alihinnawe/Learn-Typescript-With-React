
import  {type MemberType}  from "./Members";

type props = {
membersList : MemberType [],
  onDelete: (id: number) => void;
}

export default function Member ({membersList, onDelete} : props) {

    return (
        <>
            {membersList.map((member) => (
            <div key={member.id}>
            <p>id: {member.id}</p>
            <p>Name: {member.name}</p>
            <p>Address: {member.address}</p>
            <button onClick={() => onDelete(member.id)}>Delete Member</button>
            </div>
      ))}
        </>
    )

}