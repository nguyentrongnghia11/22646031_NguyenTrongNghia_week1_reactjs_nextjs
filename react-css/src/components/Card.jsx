

export default function Card({ name, email }) {

    return (
        <>
            <div className="wrap" style={{border: "white 1px solid", marginTop: "20px"}}>
                <h1>Title: {name} </h1>
                <h1>UserId: {email}</h1>
            </div>
        </>
    )

}
