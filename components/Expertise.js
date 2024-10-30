import React from "react"
import { Title } from "./common/Title"
import { expertise } from "@/assets/data/dummydata"
import { Card } from "./common/Card"

const Expertise = () => {
  return (
    <>
      <section className='expertise'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Notre expertise' />
            <p>Chez Mi-Design, nous maîtrisons l'art d'allier créativité et technologie pour répondre à vos besoins numériques. Nous mettons à votre disposition une équipe d'experts passionnés, spécialisés dans les domaines suivants :</p>
          </div>
          <div className='hero-content grid-3'>
            {expertise.map((item) => (
              <Card data={item} key={item.id} caption='En savoir plus' path='expertise'/>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Expertise
