import { useState } from 'react'

export default function Counter () {
  const [count, setCount] = useState(0)

  const handleIncrease = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <h1>Counter</h1>
      <p>Curretn Value: {count}</p>
      <button onClick={handleIncrease}>Increaser</button>
    </div>
  )
}
