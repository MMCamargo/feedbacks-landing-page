import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Matheus, Mauricio, Leo, Edyo, Rogerio } from '../pages'

function AppRoutes(): JSX.Element {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/matheus' element={<Matheus />} />
				<Route path='/mauricio' element={<Mauricio />} />
				<Route path='/leo' element={<Leo />} />
				<Route path='/edyo' element={<Edyo />} />
				<Route path='/rogerio' element={<Rogerio />} />
			</Routes>
		</BrowserRouter>
	)
}

export default AppRoutes
