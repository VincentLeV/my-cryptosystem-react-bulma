import { useState } from "react"

import Navbar from "./components/navigation/Navbar"

const App = () => {
    const [ activeTab, setActiveTab ] = useState(0)

    const onChangeTab = (tabValue) => setActiveTab(tabValue)

    return (
        <>
            <Navbar activeTab={activeTab} onChangeTab={onChangeTab} />

            <main>
                <div className="container is-fluid">
                    <h1 className="title">
                        Hello World
                    </h1>
                    <p className="subtitle">
                        My first website with <strong>Bulma</strong>!
                    </p>
                </div>
            </main>
        </>
    )
}

export default App