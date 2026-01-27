import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/ProductCard'
import Button from './components/Button';
import Alert from './components/Alert';
import LoginForm from './components/LoginForm';

function App() {
  const [alert, setAlert] = useState({ type: '', message: '' });

  const handleShowAlert = (type) => {
    let message = '';
    if (type === 'success') message = 'Thành công!';
    if (type === 'warning') message = 'Cảnh báo!';
    if (type === 'error') message = 'Có lỗi xảy ra!';
    setAlert({ type, message });
    setTimeout(() => setAlert({ type: '', message: '' }), 2000);
  };

  return (
    <>
      <ProductCard />
      <div style={{ marginTop: 24, display: 'flex', gap: 12, justifyContent: 'center' }}>
        <Button type="success" onClick={() => handleShowAlert('success')}>Success</Button>
        <Button type="primary" onClick={() => handleShowAlert('warning')}>Warning</Button>
        <Button type="danger" onClick={() => handleShowAlert('error')}>Error</Button>
      </div>
      <Alert type={alert.type} message={alert.message} />
      <LoginForm />
    </>
  )
}

export default App
