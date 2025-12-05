import { useState } from 'react'

//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Hello from './components/Hello'
import Json from './components/Json'

export default function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1 className='text-3xl font-bold underline m-8'>My Spring Boot Page</h1>
      </header>

      <main>

        <Hello />
        <Json />
       
      </main>
    </>
  )
}

