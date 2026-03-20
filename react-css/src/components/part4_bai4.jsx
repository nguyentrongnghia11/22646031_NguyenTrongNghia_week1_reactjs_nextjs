import { useEffect, useState } from "react"
import Card from "./Card"


// Bài 4 – Fetch + Search + Filter (THỰC TẾ)
// Mục tiêu
// ●	Xử lý dữ liệu phía client

// Đề bài
// Fetch danh sách posts:
// https://jsonplaceholder.typicode.com/posts
// Chức năng:
// ●	Search theo title
// ●	Hiển thị danh sách đã lọc
// Yêu cầu
// ●	Fetch 1 lần
// ●	Search không gọi lại API
// ●	Không mutate data gốc


export default function Bai4() {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState([])
    
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [textSearch, setTextSearch] = useState('')

    const handleFilter = (text) => {
        console.log ("text ", text)
        if (text === '') {
            setFilter(data)
        }
        else {
            const filtred = data.filter((t) =>t.title.toLowerCase().includes(text.toLowerCase() ))
            setFilter(filtred)
        }
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                console.log("day la data ", data);
                setData(data); 
                setFilter(data); 
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
                    ) : filter.map((item) => {
                        return <Card name={item.title} email={item.id} key={item.id} ></Card>
                    })

            }
        </>
    )
}