import { useEffect, useState } from "react"
import Card from "./Card"

export default function Bai3() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [textSearch, setTextSearch] = useState('')

    const handleFilter = (text) => {
        console.log("text ", text)

        fetch(`https://jsonplaceholder.typicode.com/users/${text}`)
            .then((res) => res.json()).then((data) => { console.log("data ", data), setData([data]) })
            .catch((error) => {
                setError(error)
            })
    }



    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                console.log("day la data ", data);
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                console.log("day la err ", error);
                setError(error.message);
                setLoading(false);
            });

        setLoading(true);
    }, []);

    return (
        <>
            <input type="text" onChange={(e) => handleFilter(e.target.value)} />
            {
                error !== '' ? (<h4> `${error}`</h4>) :
                    loading ? (
                        <h4>Loading</h4>
                    ) : data.map((item, key) => {
                        return <Card name={item.name} email={item.email} key={item.id} ></Card>
                    })

            }
        </>
    )
}