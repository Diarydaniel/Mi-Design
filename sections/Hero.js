import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import ShowCase from "@/components/ShowCase"
import Testimonial from "@/components/Testimonial"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import { BlogCard, Brand } from "@/components/router"
import React from "react"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <TitleLogo title='Mi-Design' caption='' className='logobg' />
          <h1 className='hero-title'>NOUS CONSTRUISONS DES EXPÉRIENCES NUMÉRIQUES</h1>

          <div className='sub-heading'>
            <TitleSm title='SITES WEB' /> <span>.</span>
            <TitleSm title='LOGO' /> <span>.</span>
            <TitleSm title='DESIGN' />
          </div>
        </div>  
      </section>
      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='La dernière agence numérique dont vous aurez besoin' />
            <p>Chez Mi-Design, nous croyons qu'une approche innovante et personnalisée est essentielle pour propulser votre entreprise vers de nouveaux sommets. En tant qu'agence numérique, nous nous engageons à fournir des solutions sur mesure qui s'adaptent parfaitement à vos besoins</p>
          </div>
          <div className='hero-content grid-4'>
            {home.map((item, i) => (
              <div className='box' key={i}>
                <span className='green'>{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
      <Testimonial />
      <ShowCase />
      <Brand />

      <div className='text-center'>
        <Title title='Dernières nouvelles et articles' />
      </div>
      <BlogCard />
    </>
  )
}

export default Hero
