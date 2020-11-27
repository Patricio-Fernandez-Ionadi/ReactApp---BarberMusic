import React from "react"
import { Route } from "react-router-dom"
// Components
import VolumeHandler from "./components/MusicHandler/VolumeHandler"
import TrackSelector from "./components/MusicHandler/TrackSelector"
// pages
import Home from "./pages/Home"
import Services from "./pages/Services"
// Context
import { MusicContextProvider } from "./context/MusicContext"

function App() {
	return (
		<>
			<MusicContextProvider>
				<VolumeHandler />
				<TrackSelector />
			</MusicContextProvider>
			<Route exact path='/' component={Home} />
			<Route exact path='/services' component={Services} />
		</>
	)
}

export default App
