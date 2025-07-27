import { Children, createContext, useContext } from "react"
import { useState } from "react"

const contextAsin = createContext()

export function AsinProvider({ children }) {

    const [selected, setSelected] = useState()

    return (
        <contextAsin.Provider value={{ selected, setSelected }}>

            {children}

        </contextAsin.Provider>
    )
}

export function UseAsin() {
    return useContext(contextAsin)
}