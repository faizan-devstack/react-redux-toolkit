import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
      <div className='max-h-screen'>
        <h1 className='bg-gray-700 mx-auto w-1/2 text-2xl p-2 rounded text-white'>A simple TODO for understanding Redux-Toolkit</h1>
        <div className="bg-gray-900/30 p-5 my-10 rounded">
          <AddTodo />
          <Todos />
        </div>
      </div>
    </>
  )
}

export default App
