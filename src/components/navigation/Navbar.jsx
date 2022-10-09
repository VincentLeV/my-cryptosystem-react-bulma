import { navItems } from "../../constants"

const Navbar = ({ activeTab, onChangeTab }) => {
  return (
    <nav className="navbar is-success" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          MY CRYPTOSYSTEM
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          {
            navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.path}
                className={item.value === activeTab ? "navbar-item is-active" : "navbar-item"} 
                onClick={() => onChangeTab(item.value)}
              >
                {item.name}
              </a>
            ))
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar