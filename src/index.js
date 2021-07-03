import { StrictMode } from 'react'
import { render } from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
/* 
  Have to use the index.css inside /src 
  since when using tailwindCss the utils must be imported
*/
import './index.css'

const root = document.getElementById('root')

render(
  <StrictMode>
    <App />
  </StrictMode>,
  root
)

reportWebVitals()
