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

function App() {
	return (
		<>
			<MusicContextProvider>
				<NavBar />
				<TrackSelector />
			</MusicContextProvider>
			<Route exact path='/' component={Home} />
			<Route exact path='/services' component={Services} />
			<GoTopButton />
		</>
	)
}

export default App
