import { useEffect, useState } from "react"

import appLogo from "../../assets/app-logo.png"
import { NAV_ITEMS } from "../../constants"

const Navbar = ({ activeTab, onChangeTab }) => {
  const [ isHamburgerActive, setIsHamburgerActive ] = useState(false)
  const [ isMenuActive, setIsMenuActive ] = useState(false)

  useEffect(() => {
    const hamburgerBtn = document.getElementById("hamburger")
    const menu = document.getElementById("nav-menu")
    if (isHamburgerActive) {
      hamburgerBtn.classList.add("is-active")
      menu.classList.add("is-active")
    } else {
      hamburgerBtn.classList.remove("is-active")
      menu.classList.remove("is-active")
    }
  }, [isHamburgerActive])

  const onToggleHamburger = () => {
    setIsHamburgerActive(!isHamburgerActive)
    setIsMenuActive(!isMenuActive)
  }

  return (
    <nav className="navbar is-success" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src={appLogo} alt="App Logo" width="24" height="24" className="app-logo" />
          MY CRYPTOSYSTEM
        </a>

        <button 
          id="hamburger" 
          className="navbar-burger" 
          aria-label="menu" 
          aria-expanded={isHamburgerActive} 
          onClick={onToggleHamburger}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div id="nav-menu" className="navbar-menu is-active">
        <div className="navbar-start">
          {
            NAV_ITEMS.map((item) => (
              <a 
                key={item.name} 
                href={item.path}
                className={item.value === activeTab ? "navbar-item is-active" : "navbar-item"} 
                onClick={() => {
                  onToggleHamburger()
                  onChangeTab(item.value)
                }}
              >
                {item.name}
              </a>
            ))
          }
        </div>
      </div>
      
      <div className="horizontal-line"/>
    </nav>
  )
}

export default Navbar