import React from "react"
import { Title } from "./common/Title"
import { showcase } from "@/assets/data/dummydata"
import { Card } from "./common/Card"
import Link from "next/link"
import { HiOutlineArrowRight } from "react-icons/hi"

const ShowCase = () => {
  return (
    <>
      <section className='showcase'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Notre projets' />
          </div>
          <div className='hero-content grid-3 py'>
            {showcase.map((item) => (
              <Card data={item} key={item.id} path='project'/>
            ))}
          </div>
          <div className='card links'>
            <Link href='/showcase'>
              Voir Tous <HiOutlineArrowRight className='link-icon' />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default ShowCase
