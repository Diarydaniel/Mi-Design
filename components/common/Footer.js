import Link from "next/link"
import { TitleLogo } from "./Title"
import { BsFacebook } from "react-icons/bs"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin, AiFillYoutube, AiOutlineWhatsApp } from "react-icons/ai"

const Footer = () => {
  return (
    <>
    <footer>
      <div className='container'>
        <div className='grid-4'>
          <div className='logo'>
            <TitleLogo title='Mi-Design' caption='' className='logobg' />
            <br />
            <span>
              Questions ? Contactez-nous <br /> du lundi au vendredi de 9 h à 18 h
            </span>
            <br />
            <br />
            <h3>+261 38 61 133 36</h3>
            <br />
            {/* <button className='button-primary'>Demander un devis</button> */}
          </div>
          <ul>
            <h3>ENTREPRISE</h3>
            <li>
              <Link href='/agency'>À propos de l'agence</Link>
            </li>
            <li>
              <Link href='/team'>Notre équipe</Link>
            </li>
            <li>
              <Link href='/services'>Services</Link>
            </li>
            <li>
              <Link href='/showcase'>Projet</Link>
            </li>
            <li>
              <Link href='/blogs'>Blog</Link>
            </li>
            <li>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
          <ul>
            <h3>SERVICES</h3>
            <li>
              <Link href='/'>Conception et Développement Web</Link>
            </li>
            <li>
              <Link href='/'>Conception Graphique & Design</Link>
            </li>
            <li>
              <Link href='/'>E-Commerce</Link>
            </li>
          </ul>
          <ul>
            <h3>CONNECTER</h3>
            <div className='connect'>
              <li>
                <Link href='/'>
                  <BsFacebook size={30} />
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <AiFillInstagram size={30} />
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <AiOutlineWhatsApp size={30} />
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <AiFillYoutube size={30} />
                </Link>
              </li>
            </div>
          </ul>
        </div>
        <div className='legal connect py'>
          <div className='text'>
            <span>©copyright 2024 MI-DESIGN. TOUS DROITS RÉSERVÉS.</span>
          </div>
          <div className='connect'>
            <span>Mi DESIGN</span>
            <span> &nbsp; | &nbsp; </span>
            <span>CONDITIONS GÉNÉRALES</span>
          </div>
        </div>
      </div>
    </footer>

    </>
  )
}

export default Footer
