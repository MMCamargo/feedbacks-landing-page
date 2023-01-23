import './config/styles/scrollbar.css'
import AppRoutes from './routes/Router'
import theme from './config/theme/theme'
import { ThemeProvider, CssBaseline } from '@mui/material'

function App(): JSX.Element {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<AppRoutes />
		</ThemeProvider>
	)
}

export default App
