import React from "react"
import { Route } from "react-router-dom"
// Components
import NavBar from "./components/NavigationBar/NavBar"
import TrackSelector from "./components/MusicHandler/TrackSelector"
import GoTopButton from "./components/goTopButton/GoTopButton"
// pages
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Branches from "./pages/Branches"
import Contact from "./pages/Contact"
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
				<Route exact path='/about' component={About} />
				<Route exact path='/services' component={Services} />
				<Route exact path='/branches' component={Branches} />
				<Route exact path='/contact' component={Contact} />
				<GoTopButton />
			</MenuContextProvider>
		</>
	)
}

export default App
