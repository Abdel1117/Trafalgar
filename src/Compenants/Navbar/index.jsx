import React from 'react'
import styled from "styled-components";

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 160px;
`



const LogoContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 160px;
font-size: 24px;
padding: 10px 0;
position:relative;
`
const Logo = styled.div`
    background-color: #458ff6;
    width: 41px;
    height: 41px;
    border-radius: 100%;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    

`
const LogoPlaceHolder = styled.p`
    margin-right: 10px;
`
const NavBarr = styled.nav`
    width: 545px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Link = styled.a`
    opacity: .5;
    font-size: 18px;
    color: black;
    text-decoration: none;
    cursor: pointer;

    &:hover{
        opacity: 1;
    }

`


export default function Nav() {
    return (
        <Header>
            <LogoContainer>
                <Logo>
                    T
                </Logo>
                <LogoPlaceHolder>Trafalgar</LogoPlaceHolder>
            </LogoContainer>

            <NavBarr>
                <Link to="/Home" >Home</Link >
                <Link to="/Find_A_Doctor" >Find a doctor</Link >
                <Link to="/Apps" >Apps</Link >
                <Link to="/Testimonials" >Testimonials</Link >
                <Link to="/About_us" >About us</Link >
            </NavBarr>
        </Header>
    )
}
