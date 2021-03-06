import React, { createContext, useEffect, useRef, useState } from "react"

const MusicContext = createContext({})

export function MusicContextProvider({ children }) {
	const [isPlaying, setIsMusicPlaying] = useState(false)

	const hardcore = useRef()
	const relax = useRef()
	const [trackSelected, setTrackSelected] = useState(1)
	const [currentTrack, setCurrentTrack] = useState(hardcore)

	useEffect(() => {
		if (trackSelected === 1) {
			setCurrentTrack(hardcore)
			if (isPlaying) {
				currentTrack.current.load()
				currentTrack.current.play()
				relax.current.pause()
			} else {
				currentTrack.current.pause()
			}
		}
		if (trackSelected === 2) {
			setCurrentTrack(relax)
			if (isPlaying) {
				currentTrack.current.load()
				currentTrack.current.play()
				hardcore.current.pause()
			} else {
				currentTrack.current.pause()
			}
		}
	}, [trackSelected, setCurrentTrack, isPlaying, currentTrack])

	return (
		<MusicContext.Provider
			value={{ isPlaying, setIsMusicPlaying, setTrackSelected, trackSelected }}
		>
			<audio
				ref={hardcore}
				src='./assets/media/hardcore.mp3'
				attrvalue={1}
			></audio>
			<audio ref={relax} src='./assets/media/relax.mp3' attrvalue={2}></audio>
			{children}
		</MusicContext.Provider>
	)
}

export default MusicContext
