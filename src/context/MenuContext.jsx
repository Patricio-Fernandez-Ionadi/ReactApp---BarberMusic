import React, { createContext, useState } from "react"

const MenuContext = createContext()

export function MenuContextProvider({ children }) {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<MenuContext.Provider value={{ isOpen, setIsOpen }}>
			{children}
		</MenuContext.Provider>
	)
}

export default MenuContext
