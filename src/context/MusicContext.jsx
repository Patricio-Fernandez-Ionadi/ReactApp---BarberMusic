import React, { createContext, useState } from "react"

const MusicContext = createContext({})

export function MusicContextProvider({ children }) {
	const [isPlaying, setIsMusicPlaying] = useState(false)

	return (
		<MusicContext.Provider value={{ isPlaying, setIsMusicPlaying }}>
			{children}
		</MusicContext.Provider>
	)
}

export default MusicContext
