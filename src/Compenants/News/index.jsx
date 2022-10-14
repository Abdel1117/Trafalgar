import React from 'react'
import styled from 'styled-components'
import News_1 from "../../assets/img/image 2.png"
import News_2 from "../../assets/img/image 2(1).png"
import News_3 from "../../assets/img/image 3.png"
import Arrow from "../../assets/icon/RightArrow.png"
const NewsWrapper = styled.div`
    width: 80%;
    margin: 4rem auto 0 auto;
    padding: 2rem;
    h2:nth-child(1){
        margin: 0 auto;
        text-align: center;
    }
`
const NewsContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 2rem;
padding: 2rem;
`

const News_Article_PlaceHolder = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    background-color: #fff;
    box-shadow: 10px 40px 50px 0px #E5E9F666;

    img {
        border-radius: 20px 20px 0 0 ;
    }
    h2{
        font-family: "Mulish";
        font-size: 21px;
        font-weight: 700;
        line-height: 32px;
        letter-spacing: 0em;
        text-align: left;
        margin: 20px 0 20px 0;
    }
    p{
        width: 20rem;
        font-family: "Mulish";
        font-size: 16px;
        font-weight: 300;
        line-height: 28px;
        letter-spacing: 0em;
        text-align: left;
        margin: 20px 0 20px 0;
        color: #7D7987;
    }
   
 
`

const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 8rem;
    
a{      
        margin-left: -20px;
        text-decoration: none;
        font-family: "Mulish";
        font-size: 17px;
        font-weight: 600;
        line-height: 28px;
        letter-spacing: 0em;
        text-align: left;
        color: #458FF6;
    }
    img{
        cursor: pointer;
        width: 15px;
        height: auto;
    }
`
const ButtonViewAll = styled.button`
    display: block;
    margin: 0 auto;
    width: 200px;
    height: 60px;
    border: 1px solid #458FF6;
    background-color: #fff;
    color: #458FF6;
    border-radius: 50px;
    font-family: "Mulish";
    font-size: 18px;
    font-weight: 700;
    line-height: 60px;
    letter-spacing: 0em;
    text-align: center;
    cursor: pointer;
    margin-top: 5rem;
`


export default function News() {
    return (
        <NewsWrapper>
            <h2>Check out our latest article</h2>
            <span></span>

            <NewsContainer>
                <News_Article_PlaceHolder>
                    <img src={News_1} alt="" />
                    <h2>Disease detection, check
                        up in the laboratory</h2>
                    <p>In this case, the role of the health laboratory is very important to do
                        a disease detection...</p>
                    <LinkContainer>

                        <a href="">Read more
                            <img src={Arrow} alt="" />
                        </a>
                    </LinkContainer>                </News_Article_PlaceHolder>
                <News_Article_PlaceHolder>
                    <img src={News_2} alt="" />
                    <h2>Herbal medicines that are
                        safe for consumption</h2>
                    <p>Herbal medicine is very widely used at this time because of its very good for your health...</p>
                    <LinkContainer>

                        <a href="">Read more
                            <img src={Arrow} alt="" />
                        </a>
                    </LinkContainer>                </News_Article_PlaceHolder>
                <News_Article_PlaceHolder>
                    <img src={News_3} alt="" />
                    <h2>Natural care for healthy
                        facial skin</h2>
                    <p>A healthy lifestyle should start from now and also for your skin health.
                        There are some...</p>
                    <LinkContainer>

                        <a href="">Read more
                            <img src={Arrow} alt="" /> </a>
                    </LinkContainer>
                </News_Article_PlaceHolder>



            </NewsContainer>
            <ButtonViewAll>View All</ButtonViewAll>
        </NewsWrapper>
    )
}
