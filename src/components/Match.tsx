type singleMatch1 ={
    title: string;
    score :string
}

export default function OneMatch ({title , score} : singleMatch1) {

    return (
        <>
            {title}
            {score}
        </>
    )
}