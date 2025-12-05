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
        <h1 className='text-3xl text-stone-700 font-bold p-8 bg-stone-100 m-8 rounded-xl shadow shadow-lg'>My Spring Boot Page with React</h1>
      </header>

      <main>
        <div className="mx-10 mb-8 text-stone-600 p-8 rounded-xl shadow shadow-md bg-stone-50">
          <Hello />
        </div>
        <div className="mx-10 mb-8 text-stone-600 p-8  rounded-xl shadow shadow-md bg-stone-50">
          <Json />
        </div>
      </main>
    </>
  )
}

