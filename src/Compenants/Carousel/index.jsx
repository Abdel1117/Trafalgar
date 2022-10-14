import React from 'react'
import styled from 'styled-components'
import Arrow_Left from "../../assets/icon/LeftArrow.png"
import Arrow_Right from "../../assets/icon/RightArrow.png"

const CarouselWrapper = styled.div`
    background: linear-gradient(208.18deg, #67C3F3 9.05%, #5A98F2 76.74%);
    width: 70%;
    height: auto;
    margin: 15rem auto 0 auto;
    border-radius: 20px;
    padding: 5rem;
    color: #fff;


    h2{
        text-align: center;
    }
    span{
        display: block;
        height: 2px;
        width: 4rem;
        margin: 2rem auto 5rem auto;
        background-color: #fff;
        
    }
`
const TestimonialWrapper = styled.div`
    display: flex;
    
    align-items: center ;
    img{
    border-radius: 50%;
    border: 4px solid #fff;
    margin-left: 4rem;
}

`
const InfoWrapper = styled.div`
    display: block;
    width: 20rem;
    margin-left: 2rem;
    p{
        font-family: "Mulish";
        font-size: 22px;
        font-weight: 700;
        line-height: 48px;
        letter-spacing: 0em;
        text-align: left;

    }
    p:nth-child(2){
    font-family: "Mulish";
    font-size: 18px;
    font-weight: 400;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: left;
    }
`

const CommentWrapper = styled.div`
    width:30rem;
    margin-left: 10rem;
    p{
    font-family: "Mulish";
    font-size: 19px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    }
`
const DotContainer = styled.div`
    width: 30%;
    height: 40px;
    margin: 3rem auto 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`
const Dot = styled.div`
    width: 10px;
    height: 10px;
    background-color: #458FF6;
    border-radius: 100%;
    margin: 0 10px 0 10px;
`

const LeftArrow = styled.div`
    content: url(${Arrow_Left});
    cursor: pointer;
    width:29px;
height: 17px;
position: absolute;
left: 0;
`
const RightArrow = styled.div`
content: url(${Arrow_Right});
cursor:pointer;
width:29px;
height: 17px;
position: absolute;
right: 0;
`

export default function Carousel({ $src, $name, $abbr, $comments }) {
    return (
        <>
            <CarouselWrapper>
                <h2>What our customer are saying</h2>
                <span></span>
                <TestimonialWrapper>
                    <img src={$src} alt="" />
                    <InfoWrapper>
                        <p>{$name}</p>
                        <p>{$abbr}</p>
                    </InfoWrapper>
                    <CommentWrapper>
                        <p>{$comments}</p>
                    </CommentWrapper>
                </TestimonialWrapper>
            </CarouselWrapper>
            <DotContainer>
                <LeftArrow />
                <Dot />
                <Dot />
                <Dot />
                <RightArrow />
            </DotContainer>
        </>
    )
}
