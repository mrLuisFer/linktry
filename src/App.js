import { BrowserRouter } from 'react-router-dom'
import Router from './routes/Router.jsx'

function App() {
  return (
    <BrowserRouter>
      <main className='text-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-gray-50'>
        <Router />
      </main>
    </BrowserRouter>
  )
}

export default App
