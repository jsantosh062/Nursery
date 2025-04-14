import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import store from './Store/index.ts'
import { ThemeProvider, createTheme } from '@mui/material/styles'
const theme = createTheme({
  palette: {
    mode: 'light', // or 'dark'
    primary: {
      main: '#1976d2',
    },
  },
})
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
    <Provider store={store}>
        <App />
    </Provider>
    </ThemeProvider>
  </StrictMode>,
)
