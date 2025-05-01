import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img className="logoimage" src="logo3.png" alt="logoimage"></img>
        <span>EnglishSeed</span>
      </div>
      <div className="icons">
          <img src="/search.svg" alt="search" className="icon" />
          <img src="/app.svg" alt="app" className="icon" />
          <img src="/expand.svg" alt="expand" className="icon" />
          <div className="notification">
            <img src="/notifications.svg" alt="" className="notification" />
            <span className="span">1</span>
          </div>
          <div className="user">
            <img src="https://images.pexels.com/photos/30150603/pexels-photo-30150603/free-photo-of-contemplative-woman-in-urban-setting.jpeg?auto=compress&cs=tinysrgb&w=600" alt="user" />
            <div className="span">Liz</div>
          </div>
          <img src="/settings.svg" alt="settings" className="icon" />
      </div>
    </div>
  )
}

export default Navbar
