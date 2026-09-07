import './App.css'
import Batter from './Batter'
// import Cart from './Cart'
import Counter from './Counter'

function App () {
  // const handleClick = () => {
  //   alert('Click me 3')
  // }

  // const handleAddToCart = id => {
  //   alert('Buying item ' + id)
  // }

  return (
    <>
      <Counter></Counter>
      <Batter></Batter>
      {/* <Cart></Cart> */}

      {/* <button onClick='handleClick()'>Click Me</button> */}
      {/* <button onClick={handleClick}>Click Me 2</button>
      <button onClick={handleClick}>Cleck Me 3</button>

      <button onClick={() => alert('Click me 4')}>Click Me 4</button> */}

      {/* <button onClick={() => handleAddToCart(100)}>Buy Now</button> */}
    </>
  )
}

export default App
