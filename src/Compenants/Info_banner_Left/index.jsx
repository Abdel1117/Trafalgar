import React from 'react'
import styled from 'styled-components'
import Arrow from "../../assets/icon/Arrow.png"



const BannerWrapper = styled.div`
    margin-top: 15rem;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);    
    width: 80%;
`
const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    width: 40rem;
    padding: 2rem;
    margin-left: 5rem;
    order: 1;

    h2{
        width: 60%;
        font-family: Mulish;
        font-size: 36px;
        font-weight: 700;
        line-height: 56px;
        letter-spacing: 0em;
        text-align: left;
        margin:3rem 0 3rem 0 3rem;
    }
    p{
        width: 70%;
        font-family: Mulish;
        font-size: 18px;
        font-weight: 300;
        line-height: 30px;
        letter-spacing: 0em;
        color: #7D7987;
        text-align: left;
        margin: 3rem 0 3rem 0 ;
    }

    
    span{
        width: 4rem;
        height: 2px;
        background-color: #000;
        margin: 2rem 0 0 0 ;
    }
    button{
        height: 60px;
        width: 200px;
        left: 922px;
        top: 2706px;
        border-radius: 55px;
        color: #458ff6;
        border: 1px solid #458ff6;
        background-color: #fff;
        cursor: pointer;
        font-family: Mulish;
        font-size: 18px;
        font-weight: 700;
        line-height: 60px;
        letter-spacing: 0em;
        
    }

    button::after{
        content: url(${Arrow});
        margin-left: 20px;
    }
`
const ImageWrapper = styled.div`
    order: 2;
    img{
    }
`


export default function index({ image_Source, title, text, button_text }) {
    return (
        <BannerWrapper >
            <ImageWrapper>
                <img src={image_Source} alt="" />
            </ImageWrapper>

            <TextWrapper>
                <h2>{title}</h2>
                <span></span>
                <p>{text}</p>
                <button>{button_text}</button>
            </TextWrapper>

        </BannerWrapper >
    )
}
