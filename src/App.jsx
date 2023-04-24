// import { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { Button } from '@mui/material'
import theme from './theme/theme'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Button variant='contained'>Hello</Button>
      </div>
    </ThemeProvider>
  )
}

export default App
