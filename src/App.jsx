// import { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { dittoTheme } from './themes/themes'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import PokeRating from './components/PokeRating'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={dittoTheme}>
      <div className="App">
        <PokeRating />
      </div>
    </ThemeProvider>
  )
}

export default App
