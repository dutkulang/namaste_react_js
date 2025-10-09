import {LOGO_URL} from  "../utils/constants.jsx"


const Header  = ()=>{
    return (
        <header>
            <img className="logo" src={LOGO_URL} />
        
            <nav>
                <ul className="navbar-nav">
                    <li>Software</li>
                    <li>Videos</li>
                    <li>Jokes</li>
                    <li>Movies</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header