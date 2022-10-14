import React from 'react'
import styled from 'styled-components'
import Loupe from "../../assets/icon/Loupe.png"
import Medicament from "../../assets/icon/Medicaments.png"
import Dossier from "../../assets/icon/Frame.png"
import Dossier_2 from "../../assets/icon/Dossier.png"
import Malette from "../../assets/icon/Malette.png"
import Frame from "../../assets/icon/Dossier_2.png"

const Box = styled.div`
    margin-top: 5rem;
    padding-left: 2rem;
    width:350px;
    height: 350px;
    box-shadow: 10px 40px 50px rgba(229, 233, 246, 0.4);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    justify-content: center;
    background-color: #fff;
   
    h2, p , img{
        margin-bottom: 2rem;
    }

`

export default function Box_Icon() {


    const icons_box = [
        { img: Loupe, title: "Search doctor", para: "Choose your doctor from thousands of specialist, general, and trusted hospitals" },
        { img: Medicament, title: "Online pharmacy", para: "Buy  your medicines with our mobile application with a simple delivery system" },
        { img: Dossier, title: "Consultation", para: "Free consultation with our trusted doctors and get the best recomendations" },
        { img: Dossier_2, title: "Details info", para: "Free consultation with our trusted doctors and get the best recomendations" },
        { img: Malette, title: "Emergency care", para: "You can get 24/7 urgent care for yourself or your children and your lovely family" },
        { img: Frame, title: "Tracking", para: "Track and save your medical history and health data" }
    ]
    return (
        icons_box.map(({ img, title, para }) => (
            <Box>
                <img src={img} alt="" />
                <h2>{title}</h2>
                <p>{para}</p>
            </Box>
        ))
    )
}
