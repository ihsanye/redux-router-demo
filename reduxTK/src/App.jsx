import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './redux/counterSlice'
import UserList from './UserList'

function App() {

  const { value } = useSelector(store => store.counter)
  const dispatch = useDispatch()

  return (
    <div className='container'>
      <p>{value}</p>
      <div>
        <button onClick={() => dispatch(increment())}>Arttir</button>
        <button onClick={() => dispatch(decrement())}>Azalt</button>
      </div>
      <div className="aksios">
        <UserList />
      </div>
    </div>
  )
}

export default App
