import { useState } from 'react'
import Calendar from "./components/Calednar.jsx"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Calendar />
    </>
  )
}

export default App