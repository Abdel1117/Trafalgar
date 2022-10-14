import React from 'react'
import styled from 'styled-components'
import blob from "../../assets/img/Vector.png"
import Box_Icon from '../Box_Icon'


const Wrapper = styled.div`
    width: 100%;
  
`
const TextWrapper = styled.div`
        margin-top: 12rem;
        h2{
            
            display: block;
            text-align: center;
            font-size: 36px;
            font-weight: 700;
            line-height: 56px;
            position: relative;
            margin-bottom: 4rem;
        }
        h2::before{
            content: "";
            width: 80px;
            height: 2px;
            display: block;
            background-color: black;
            position: absolute;
            left: 50%;
            top: 80px;
            transform: translate(-50%);
        }
        p{
            width: 60%;
            text-align: center;
            margin: 0 auto;
            color: #7D7987;
            font-size: 18px;
            font-weight: 300;
            line-height: 30px;
        }
      
`
const IconContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr );
    justify-items: center;
    grid-gap: 1.5rem;
    position: relative;

    ::before{
        z-index: -1;
        content: url(${blob});
        position: absolute;
        left: -200px;
    }
`
const ButtonWrapper = styled.div`
        
        display: block;
        margin: 0 auto;
        text-align: center;

        button{
            margin-top: 5rem;
            width: 200px;
            height: 60px;
            border-radius: 55px;
            color:#458FF6;
            background-color: #fff;
            border: #458FF6 1px solid ;
            font-size: 18px ;
            line-height: 60px;
            font-weight: 700;
            cursor: pointer;
            transition: 400ms ease-in;
        }
        button:hover{
            background-color: #458FF6;
            border: #fff 1px solid ;
            color:#fff;
            transition:  400ms ease-in;
        }
`

export default function Banner_promise() {



    return (
        <Wrapper>
            <TextWrapper>
                <h2>Our Service</h2>
                <p>We provide to you the best choices for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us wich type of service is suitable for your health</p>
            </TextWrapper>

            <IconContainer>
                <Box_Icon />
            </IconContainer>

            <ButtonWrapper>
                <button>Learn more</button>
            </ButtonWrapper>
        </Wrapper>
    )
}
