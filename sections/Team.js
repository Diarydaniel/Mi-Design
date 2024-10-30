import { teamdata } from "@/assets/data/dummydata"
import { Card } from "@/components/common/Card"
import { Title, TitleSm } from "@/components/common/Title"
import team from "@/pages/team"
import React from "react"

const Team = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='RENCONTREZ NOTRE EQUIPE' /> <br />
            <br />
            <Title title='Une équipe créatifs & intelligents et passionnés' className='title-bg' />
          </div>
          <div className='grid-3 py'>
            {teamdata.map((item) => (
              <Card data={item} key={item.id} caption={item.post} path='teams'/>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Team
