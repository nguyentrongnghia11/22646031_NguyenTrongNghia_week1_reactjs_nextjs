import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/ProductCard'
import Button from './components/Button';
import Alert from './components/Alert';
import LoginForm from './components/LoginForm';
import ProductList from './components/ProductList';
import Header from './components/Header'
import CardInfor from './components/CardInfor'
import Footer from './components/Footer'
import CounterApp from './components/counterApp'
import Form from './components/Form'
import Card from './components/Card'
function App() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/usersa')
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

export default App
