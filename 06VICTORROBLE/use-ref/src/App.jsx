import { useState } from 'react'
import { Formularios } from './components/Formularios'



function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div className="container">
        <Formularios/>
      </div>
    
  )
}

export default App
