import { teamdata } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import { Title, TitleSm } from "@/components/common/Title"
import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"

const SinglePost = () => {
  const router = useRouter()
  const { id } = router.query
  const post = teamdata.find((post) => post.id === parseInt(id))
  if (!post) {
    return <p>Loading...</p> // You can customize this loading message
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <section className='post-details bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title={post.title} /> <br />
            <br />
            <Title title={post.post} className='title-bg' />
            <div className='img py'>
              <img src={post.cover} alt={post.title} width='50%' height='50%' className='round' />
            </div>
            <div className='desc'>
              <TitleSm title={post.title_desc} />
              <p className='desc-p' style={{textAlign:'justify'}}> {post.desc }</p>
            </div>
          </div>
          <Banner />
          <br/>
        </div>
      </section>
    </>
  )
}

export default SinglePost
