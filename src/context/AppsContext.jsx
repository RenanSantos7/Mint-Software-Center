import { createContext, useState } from "react"
import appData from '@/data/apps'

export const AppsContext = createContext()

export function AppsProvider({children}) {

    const [apps, setApps] = useState(appData)

    return (
        <AppsContext.Provider value={{apps, setApps}}>
            {children}
        </AppsContext.Provider>
    )
}
