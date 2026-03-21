import { useEffect, useState } from "react";
import Card from './Card'


export default function Bai5() {

    const [data, setData] = useState([])
    const [filter, setFilter] = useState([])

    const handleSearch = (e) => {
        const text = e.target.value
        console.log("day la text ", text)

        if (text === '') {
            setFilter(data)
        }
        else {
            const filter = data.filter((item) => item.name.toLowerCase().includes(text.toLowerCase()))
            console.log("else")
            setFilter(filter)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/data.json')
            const data = await res.json()
            console.log(data)
            setData(data)
            setFilter(data)
        }

        fetchData()
    }, [])

    const handleOnSelected = (e) => {
        const value = e.target.value
        console.log("da chon ", value)

        const filter = data.filter((item) => item.category.toLowerCase().includes(value.toLowerCase()))
        console.log("else")
        setFilter(filter)
        
    }

    return (
        <>
            <input type="text" onChange={handleSearch} /> <br />


            <label htmlFor="language">Choose a category:</label>
            <select name="language" id="language" defaultValue="DataVisualization" onChange={handleOnSelected}>
                <option value="Mobile App">Mobile App</option>
                <option value="Game Development">Game Development</option>
                <option value="Data Visualization">Data Visualization</option>
            </select>



            {filter.map((item) => {
                return <Card name={item.name} email={item.category} key={item.id}></Card>
            })}
        </>
    )

}
