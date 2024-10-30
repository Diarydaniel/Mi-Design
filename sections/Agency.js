import Banner from "@/components/Banner"
import Brand from "@/components/Brand"
import Testimonial from "@/components/Testimonial"
import { Title, TitleSm } from "@/components/common/Title"

const Agency = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='A PROPOS DE L AGENCE' /> <br />
            <br />
            <Title title='La dernère Agence Digitale dont vous aurez besoin !' className='title-bg' />
          </div>

          <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title='Transformez vos idées commerciales en produits numériques intelligents depuis 2022' />
              <p className='desc-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus eleifend magna, molestie iaculis sem pulvinar eu. Etiam non dui felis. Proin posuere dapibus magna laoreet posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim, sem eget sollicitudin tempor, libero velit aliquam enim, vel egestas tortor ante quis sem.</p>
              <div className='grid-3'>
                <div className='box'>
                  <h1 className='indigo'>+02</h1>
                  <h3>Années d'experience</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>+20</h1>
                  <h3>Cas Réusi</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>+05</h1>
                  <h3>Projets créer</h3>
                </div>
              </div>
            </div>
            <div className='right w-40 ml'>
              <img src='/images/s1.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
          </div>

          <div className='content flex'>
            <div className='left w-40 py'>
              <img src='/images/s4.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
            <div className='right w-60 ml'>
              <TitleSm title='NOTRE MISSION' />
              <br />
              <p className='misson-p' style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus eleifend magna, molestie iaculis sem pulvinar eu. Etiam non dui felis. Proin posuere dapibus magna laoreet posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim, sem eget sollicitudin tempor, libero velit aliquam enim, vel egestas tortor ante quis sem.</p>
            </div>
          </div>
        </div>
      </section>

      <Brand />
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default Agency
