import React from 'react'
import styled from 'styled-components'


const FooterWrapper = styled.footer`
    width: 100%;
    background: linear-gradient(183.41deg, #67C3F3 -8.57%, #5A98F2 82.96%);

    
`

const FooterContainer = styled.div`
width: 80%;
margin: 0 auto;
padding: 5rem 0 5rem 0 ;
display: grid;
grid-template-columns: 2fr 1fr 1fr 1fr;
`
const InfosTrafalgar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #fff;
    width: 59%;
    p{
        margin-top: 2rem;
    }

    h2::before{
        content: "T";
        background-color: #fff;
        border-radius: 50%;
        margin: 0 10px 0 0;
        height: 41px;
        width: 41px;
        padding: 0 7px;
        color: #62B4F3;
        font-family: "Mulish";
font-size: 26px;
font-weight: 700;
line-height: 33px;
letter-spacing: 0em;
text-align: left;
    }
`

const LinkContainer = styled.div`       
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 200px;
    color:#fff;

    h2{
        font-family: "Mulish";
        font-size: 20px;
        font-weight: 700;
        line-height: 60px;
        letter-spacing: 0em;
        text-align: left;

    }
    a{
        color: #fff;
        text-decoration: none;
        width: fit-content;font-family: "Mulish";
        font-size: 18px;
        font-weight: 300;
        line-height: 38px;
        letter-spacing: 0em;
        text-align: left;
    }
    a:hover{
        opacity: .5;
    }
   
`
export default function Footer() {
    return (
        <FooterWrapper>
            <FooterContainer>
                <InfosTrafalgar>
                    <h2>Trafalgar</h2>
                    <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
                    <p>©Trafalgar PTY LTD 2020. All rights reserved</p>
                </InfosTrafalgar>
                <LinkContainer>
                    <h2>Company</h2>
                    <a href="">About</a>
                    <a href="">Testimonials</a>
                    <a href="">Find a doctor</a>
                    <a href="">Apps</a>
                </LinkContainer>

                <LinkContainer>
                    <h2>Region</h2>
                    <a href="">Indonesia</a>
                    <a href="">Singapore</a>
                    <a href="">Hongkong</a>
                    <a href="">Canada</a>
                </LinkContainer>

                <LinkContainer>
                    <h2>Help</h2>
                    <a href="">Help center</a>
                    <a href="">Contact support</a>
                    <a href="">Instructions</a>
                    <a href="">How it works</a>
                </LinkContainer>
            </FooterContainer>
        </FooterWrapper>
    )
}
