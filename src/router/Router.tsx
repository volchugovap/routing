import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Favorites } from '../screens/favorites/Favorites'
import { Home } from '../screens/home/Home'
import { Shop } from '../screens/shop/Shop'

export function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/shop' element={<Shop />} />
				<Route path='/favorites' element={<Favorites />} />
			</Routes>
		</BrowserRouter>
	)
}
