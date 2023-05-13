// import { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { dittoTheme } from './themes/themes'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import PokeRating from './components/PokeRating'
import './App.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "@fontsource/aladin"

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
