import './index.css'

const Header = () => (
  <nav className="nav-con">
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="nav-logo"
      />
    </div>
    <div className="link-con">
      <ul className="ul">
        <li>Home</li>
        <li>Products</li>
        <li>Cart</li>
      </ul>
      <button type="button" className="logout-btn">
        Logout
      </button>
    </div>
  </nav>
)

export default Header
