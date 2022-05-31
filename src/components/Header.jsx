import React, {useState} from 'react';

function Header(){
    const [mobile, setMobile] = useState(false);

    return (
        <header>
            <a href="#" className="logo">
                <h1>A|A</h1>
            </a>

            <div id="menu-icon" onClick={()=>{setMobile((mobile)=>mobile?false:true)}}> 
                {
                    !mobile ? <i className="fa-solid fa-bars"></i> : <i className="fa-solid fa-x"></i>
                }
            </div>

            <nav style={{display: mobile?'block':'none'}}>
                <ul className="navlist">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#portfolio">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;