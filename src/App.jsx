import { useState } from 'react'
import Nav from './Compenants/Navbar'
import Heros from './Compenants/Heros/Heros'
import Banner_promise from './Compenants/Promise'
import Info_Banner_Right from './Compenants/Info_banner_Right'
import Info_Banner_Left from './Compenants/Info_banner_Left'
import Carousel from './Compenants/Carousel'
import News from './Compenants/News'
import Footer from './Compenants/Footer'
import Image_draw_1 from './assets/img/undrawTrafalgar.png'
import Image_draw_2 from "./assets/img/trafalgar-illustration.png"
import Mark from "./assets/img/Mark.png"
function App() {

  return (
    <>
      <Nav />
      <Heros />
      <Banner_promise />
      <Info_Banner_Right image_Source={Image_draw_1} title={"Leading healthcare providers"} text={"Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it\’s not just work. We take pride in the solutions we deliver"} button_text={"Learn more"} />
      <Info_Banner_Left image_Source={Image_draw_2} title={"Download our mobile apps"} text={"Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"} button_text={"Download"} />
      <Carousel $src={Mark} $name={"Edward NewGate"} $abbr={"Founder Circle"} $comments={"“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”"} />
      <News />
      <Footer />
    </>

  )
}

export default App