import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <h1 className='bg-violet-600'>Hello World I Am Vivek Kumar Singh</h1>
     </div>
     <br />
     <br />
     <div className='animate-bounce text-7xl'>⚽</div>
    </>
  )
}

export default App
