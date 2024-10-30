import { showcase } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import { Card } from "@/components/common/Card"
import { Title, TitleSm } from "@/components/common/Title"
import React from "react"

const ShowCase = () => {
  return (
    <>
      <section className='showcase bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='QUELQUES LISTE DE NOS PROJETS' /> <br />
            <br />
            <Title title='Des idées fraîches. Un design audacieux. Réalisation intelligente.' className='title-bg' />
          </div>
          <br />
          <br />
          <div className='grid-3'>
            {showcase.map((item) => (
              <Card data={item} key={item.id} caption={item.post} path='project'/>
            ))}
          </div> 
          {/* <div className='py btn'>
            <button className='secondary-button'>View More</button>
          </div> */}
        </div>
        <Banner />
        <br />

      </section>
    </>
  )
}

export default ShowCase
