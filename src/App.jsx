import { useState } from "react"

import Navbar from "./components/navigation/Navbar"
import EncryptForm from "./components/forms/EncryptForm"
import DecryptForm from "./components/forms/DecryptForm"
import Info from "./components/Info"

const App = () => {
    const [ activeTab, setActiveTab ] = useState(0)

    const onChangeTab = (tabValue) => setActiveTab(tabValue)

    return (
        <>
            <Navbar activeTab={activeTab} onChangeTab={onChangeTab} />

            <main className="container content is-fluid">
                {
                    activeTab === 0 ? (
                        <div className="columns section">
                            <EncryptForm />
                            <hr className="horizonal-line"/>
                            <DecryptForm />
                        </div>
                    ) : (
                        <div className="section" style={{ minHeight: "77vh" }}>
                            <Info />
                        </div>
                    )
                }
            </main>

            <footer className="footer">
                <div class="has-text-centered">
                    Designed & developed by <a href="https://www.vincentle.me/">Vincent Le</a> © 2022
                </div>
            </footer>
        </>
    )
}

export default App