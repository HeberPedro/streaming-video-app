import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'src/presentation/styles/global'
import defaultTheme from 'src/presentation/styles/theme'

import Routes from './routes'

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={defaultTheme}>
      <Routes />
      <GlobalStyles />
    </ThemeProvider>
  </BrowserRouter>
)

export default App
