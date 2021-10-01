import Home from './views/Home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <main className='App bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-50'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </main>
    </Router>
  )
}

export default App
