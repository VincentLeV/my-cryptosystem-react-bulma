import { useState } from "react"

import Navbar from "./components/navigation/Navbar"
import EncryptForm from "./components/forms/EncryptForm"
import DecryptForm from "./components/forms/DecryptForm"

const App = () => {
    const [ activeTab, setActiveTab ] = useState(0)

    const onChangeTab = (tabValue) => setActiveTab(tabValue)

    return (
        <>
            <Navbar activeTab={activeTab} onChangeTab={onChangeTab} />

            <main className="container is-fluid">
                <div className="columns" style={{ margin: "1.5rem 0" }}>
                    <EncryptForm />
                    <DecryptForm />
                </div>
            </main>
        </>
    )
}

export default App