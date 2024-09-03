import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button className="button">See all reviews</button>
      <h2 className='heading'>Liposomal Vitamin C</h2>
      <p className="paraOne">Liposomal Vitamin C is an advanced form of Vitamin C encapsulated within liposomes, which are tiny fat-like particles that enhance its absorption and bioavailability in the body. </p>
      <p className="paraTwo">This delivery method allows for more efficient cellular uptake, ensuring that higher levels of Vitamin C reach the bloodstream and tissues.</p>
      <p className="paraThree">It provides potent antioxidant support, boosts the immune system, promotes collagen production, and enhances skin health. Liposomal Vitamin C is ideal for those seeking maximum benefits from their Vitamin C supplementation.</p>
    </>
  )
}

export default App
