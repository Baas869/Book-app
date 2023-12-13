
function Header() {
  return (
    <>
        <header id="navigation-bar__header" className="navigation-bar">
            <div className="logo-section">
                <a href="index.html">
                    ARSHA
                </a>
            </div>
            <div className="hambuger-tab">
                <button className="toggle-button">
                    <span className="toggle-button__bar"></span>
                    <span className="toggle-button__bar"></span>
                    <span className="toggle-button__bar"></span>
                </button>
            </div>
            <nav className="nav-bar__section">
                <ul className="nav-bar__items">
                    <li className="nav-bar__link nav-bar__link--cta">
                        <a href="#">Home</a>
                    </li>
                    <li className="nav-bar__link">
                        <a href="#about">About</a>
                    </li>
                    <li className="nav-bar__link">
                        <a href="#services">Services</a>
                    </li>
                    <li className="nav-bar__link">
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li className="nav-bar__link">
                        <a href="#team">Team</a>
                    </li>
                    <li className="nav-bar__link drop-lists"><a href="start-hosting/index.html">Drop Down<i className="fa-solid fa-chevron-down"></i></a>
                        <ul className="drop-lists--items">
                            <li className="drop-list--item"><a href="#">Drop Down 1</a></li>
                            <li className="drop-list--item deep-drop-lists"><a href="#">Deep Drop Down</a></li>
                                <ul className="deep-drop--down__lists">
                                    <li className="deep-drop--down__list"><a href="#">Deep Drop Down 1</a></li>
                                    <li className="deep-drop--down__list"><a href="#">Deep Drop Down 2</a></li>
                                    <li className="deep-drop--down__list"><a href="#">Deep Drop Down 3</a></li>
                                    <li className="deep-drop--down__list"><a href="#">Deep Drop Down 4</a></li>
                                </ul>
                            <li className="drop-list--item"><a href="#">Drop Down 2</a></li>
                            <li className="drop-list--item"><a href="#">Drop Down 3</a></li>
                            <li className="drop-list--item"><a href="#">Drop Down 4</a></li>
                        </ul>
                    </li>
                    <li className="nav-bar__link">
                        <a href="#contact">Contact</a>
                    </li>
                    <li className="nav-bar__link getstarted"><a href="">Get Started</a>
                    </li>
                </ul>
            </nav>
        </header>
        <div className="mobile-nav--bar">
            <ul className="mobile-nav--bar__items">
                <li className="mobile-nav--bar__link nav-bar__link--cta">
                    <a href="home.html">Home</a>
                </li>
                <li className="mobile-nav--bar__link">
                    <a href="#about">About</a>
                </li>
                <li className="mobile-nav--bar__link">
                    <a href="#services">Services</a>
                </li>
                <li className="mobile-nav--bar__link">
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li className="mobile-nav--bar__link">
                    <a href="#team">Team</a>
                </li>
                <li className="mobile-nav--bar__link mobile-drop--lists"><a href="start-hosting/index.html">Drop Down</a>
                    <ul className="">
                        <li className="drop-list--item"><a href="#">Drop Down 1</a></li>
                        <li className="drop-list--item "><a href="#">Drop Down 2</a></li>
                            <ul className="mobile-drop--lists mobileDeep-drop--down__lists">
                                <li className="deep-drop--down__list"><a href="#">Deep Drop Down 1</a></li>
                                <li className="deep-drop--down__list"><a href="#">Deep Drop Down 2</a></li>
                                <li className="deep-drop--down__list"><a href="#">Deep Drop Down 3</a></li>
                                <li className="deep-drop--down__list"><a href="#">Deep Drop Down 4</a></li>
                            </ul>
                        <li className="drop-list--item"><a href="#">Drop Down 3</a></li>
                        <li className="drop-list--item"><a href="#">Drop Down 4</a></li>
                        <li className="drop-list--item"><a href="#">Drop Down 5</a></li>
                    </ul>
                    <li className="mobile-nav--bar__link">
                        <a href="#contact">Contact</a>
                    </li>
                </li>
                <li className="mobile-nav--bar__link-btn mobile-getstarted--btn"><a href="">Get Started</a>
                </li>
            </ul>
        </div>
    </>
   
  )
}

export default Header
