import React from 'react'
import styled from 'styled-components'
import ImagePlaceHolder from "../../assets/img/Undraw_Header.png"

const HerosWrapper = styled.div`

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    
`
const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 445px;
    margin-left: 20rem;
    .Title_header{
        
        font-size:48px ;
        font-weight: 700;
        line-height: 56px;
        margin-bottom: 25px;
    }
    .Para_header{
        width: 445px;
        font-size: 21px;
        font-weight: 300;
        line-height: 32px;
        color: #7D7987;
    }
    .Button_header{
        margin-top:3rem;
        width: 200px;
        height: 60px;
        border-radius: 55px; 
        cursor: pointer;
        background-color: #458ff6;
        border: none;
        color: white;
        font-size: 18px;
        line-height: 60px;
        transition: ease-in 400ms;
    }
    .Button_header:hover{
        background-color: white;
        color: #458ff6;
        border: #458ff6 1px solid;
        transition: ease-in 400ms;
    }
`
const ImageWrapper = styled.div`
    
    img{
       width: auto;
       height: 100%;
       object-fit: cover;
    }
`
export default function Heros() {
    return (
        <HerosWrapper>
            <TextWrapper>
                <h1 className='Title_header'>Virutal healtcare for you</h1>
                <p className='Para_header'>Trafalgar provides progressive, and affortable healthcare, accessible on mobile and online for everyone</p>
                <button className='Button_header'>Consult today</button>
            </TextWrapper>

            <ImageWrapper>
                <img src={ImagePlaceHolder} alt="" />
            </ImageWrapper>
        </HerosWrapper>
    )
}
