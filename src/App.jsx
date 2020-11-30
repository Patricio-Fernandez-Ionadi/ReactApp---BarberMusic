import React from "react"
import { Route } from "react-router-dom"
// Components
import NavBar from "./components/NavigationBar/NavBar"
import TrackSelector from "./components/MusicHandler/TrackSelector"
import GoTopButton from "./components/goTopButton/GoTopButton"
// pages
import Home from "./pages/Home"
import Services from "./pages/Services"
// Context
import { MusicContextProvider } from "./context/MusicContext"
import { MenuContextProvider } from "./context/MenuContext"

function App() {
	return (
		<>
			<MenuContextProvider>
				<MusicContextProvider>
					<NavBar />
					<TrackSelector />
				</MusicContextProvider>
				<Route exact path='/' component={Home} />
				<GoTopButton />
			</MenuContextProvider>
		</>
	)
}

export default App
