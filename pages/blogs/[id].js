import { blogdata } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import { Title, TitleSm } from "@/components/common/Title"
import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"

const SinglePost = () => {
  const router = useRouter()
  const { id } = router.query
  const post = blogdata.find((post) => post.id === parseInt(id))
  if (!post) {
    return <p>Loading...</p>
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <section className='post-details bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title={`${post.catgeory} - ${post.date}`} /> <br />
            <br />
            <Title title={post.title} className='title-bg' />
            <div className='img py'>
              <img src={post.cover} alt={post.title} width='80%' height='100%' className='round' />
            </div>
            <div className='desc'>
              <TitleSm title={post.title} />
              <p className='desc-p' style={{textAlign:'justify'}}> { post.desc}</p>
              <p className='desc-p' style={{textAlign:'justify'}}> { post.desc}</p>
            </div>
          </div>
          <Banner />
        </div>
      </section>
    </>
  )
}

export default SinglePost
