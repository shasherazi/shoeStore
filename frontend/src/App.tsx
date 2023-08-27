import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [res, setRes] = useState("");

  useEffect(() => {
    fetch('http://localhost:6969/shoes')
      .then(res => res.json())
      .then(data => setRes(data.message))
  }, [])

  return (
    <>
      <h1 className='text-4xl font-bold'> {res} </h1>
    </>
  )
}

export default App
