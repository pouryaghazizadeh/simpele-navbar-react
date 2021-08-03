import React from 'react'

const Navbar = () => {
    return (
        <div>
        <h1>Navbar</h1>
        <Nav>
            <Navelink to="/">
                Home
            </Navelink>
            <Bars/>
            <NavMenu>

            </NavMenu>
            <Navlink to ="/About" activeStyle>
                About
            </Navlink>
            <Navlink to ="/ services" activeStyle>
                services
            </Navlink>
            <Navlink to ="/contactUs" activeStyle>
                contactUs
            </Navlink>
            <Navlink to ="/signUp" activeStyle>
                signUp
            </Navlink>
            <NavBtn>
                <NavBtnLinl to="sign in">sign in</NavBtnLinl>
            </NavBtn>
        </Nav>

            
        </div>
    )
} 

export default Navbar
