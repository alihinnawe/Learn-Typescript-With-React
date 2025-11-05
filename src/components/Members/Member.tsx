
import  {type MemberType}  from "./Members";


export default function Member ({membersList} : {membersList : MemberType []}) {

    return (
        <>
            {membersList.map((member, index) => (
            <div key={index}>
            <p>Name: {member.name}</p>
            <p>Address: {member.address}</p>
            </div>
      ))}
        </>
    )

}