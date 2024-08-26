import React from 'react'
import Negative from '../assets/Client-First - icons/Negative.svg';
import Negativea from '../assets/Client-First - icons/Negative (2).svg';
import Negativeb from '../assets/Client-First - icons/Negative (3).svg';
import Negativec from '../assets/Client-First - icons/Negative (4).svg';
import Logo from '../assets/Client-First - IMAGES/Logo 1.svg';
import Logoa from '../assets/Client-First - IMAGES/Logo 2.svg';
import Logob from '../assets/Client-First - IMAGES/Logo 3.svg';
import Logoc from '../assets/Client-First - IMAGES/Logo 4.svg';
import Logod from '../assets/Client-First - IMAGES/Logo 5.svg';


export default function Home() {
  return (
    <>
    {/* ####################################HEADER##################################### */}
    <header>
        <nav className='navbar'>
          <div className='logo font-inter'><span>&#10100;</span>Finsweet</div>
          <div className='flexbox'>
            <ul className='pages-opt'>
              <li className='page-tag font-inter'>Home</li>
              <li className='page-tag font-inter'>Blog</li>
              <li className='page-tag font-inter'>About Us</li>
              <li className='page-tag font-inter'>Contact Us</li>
              <li className='subscribe-btn page-tag font-inter'><a className='anchor-subscribe' href="..">Subscribe</a></li>
            </ul>
          </div>
        </nav>    
    </header>

    {/* ####################################MAIN##################################### */}
    <main>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div className='feature-all'>
        <ul className='flexbox ul-feature'>
          <li className='li font-san'><p className='feature-p'>We are<br /><span className='feature-span'>Featured in</span></p></li>
          <li className='li'><img src={Logo} alt="" /></li>
          <li className='li'><img src={Logoa} alt="" /></li>
          <li className='li'><img src={Logob} alt="" /></li>
          <li className='li'><img src={Logoc} alt="" /></li>
          <li className='li'><img src={Logod} alt="" /></li>
        </ul>
      </div>
      <div></div>
      <div></div>
    </main>





    {/* ####################################FOOTER##################################### */}
    <footer id='page-bottom'>
      <div className='footer-main'>
        <nav className='navbar-f'>
          <div className='logo font-inter'><span>&#10100;</span>Finsweet</div>
          <div className='flexbox'>
            <ul className='pages-opt'>
              <li className='page-tag font-inter'>Home</li>
              <li className='page-tag font-inter'>Blog</li>
              <li className='page-tag font-inter'>About&nbsp;Us</li>
              <li className='page-tag font-inter'>Contact&nbsp;Us</li>
              <li className='page-tag font-inter'>Privacy&nbsp;Policy</li>
            </ul>
          </div>
        </nav>
        <div className='subscribe-form'>
          <div className='info-text-div inline-blck'>
            <p className='info-text font-san'>Subscribe to our news letter to get latest updates and news</p>
          </div>
          <div className='inline-blck'>
            <ul className='flexbox foot-form'>
              <li className='li foot-form-li'>
                <form action="">
                  <input className='input-mail font-inter' type="email" name="gmail" placeholder='Enter Your Email'/>
                </form>
              </li>  
              <li className='li subscribe-btn page-tag font-san'><a className='anchor-subscribe' href="..">Subscribe</a></li>
            </ul>
          </div>
          
        </div>
        <div className='flexbox contact-info'>
          <div>
            <p className='font-inter basic-info'>Finstreet 118 2561 Fintown</p>
            <p className='font-inter basic-info'>Hello@finsweet.com 020 7993 2905</p>
          </div>
          <div>
            <ul className='flexbox ul-socio-icon'>
              <li className='li soc-icon'><a href=".."><img className='invert' src={Negative} alt="Negative" /></a></li>
              <li className='li soc-icon'><a href=".."><img className='invert' src={Negativea} alt="Negative" /></a></li>
              <li className='li soc-icon'><a href=".."><img className='invert' src={Negativeb} alt="Negative" /></a></li>
              <li className='li soc-icon'><a href=".."><img className='invert' src={Negativec} alt="Negative" /></a></li>
            </ul>
          </div>
        </div>

        

      </div>

    </footer>
    </>
  )
}

// export default Home;
