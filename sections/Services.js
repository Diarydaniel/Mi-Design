import { expertise } from "@/assets/data/dummydata"
import { Card } from "@/components/common/Card"
import { Title, TitleSm } from "@/components/common/Title"
import React from "react"

const Services = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='SERVICES' /> <br />
            <br />
            <Title title='Technologies uniques et approche moderne' className='title-bg' />
          </div>
          <div className='grid-3 py'>
            {expertise.map((item) => (
              <Card data={item} key={item.id} caption={item.post} show={true} path='expertise'/>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
