import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return( <>
    <div className="home">
      <main>
        <h1>TechVoyage</h1>
        <p>Solution to all your Problems</p>
      </main>
    </div>
    <div className="home2" >
        <img src={vg} alt="Graphics"/>
        <div>
            <p>
            Embark on a TechVoyage with us, where every challenge is an opportunity to innovate.
             At TechVoyage, we are your trusted guides through the ever-evolving landscape of technology.
              Our mission is to navigate the complexities of tech solutions, making them accessible and empowering for everyone.
               Join us on this exciting journey, where creativity and problem-solving skills thrive. 
               Welcome aboard TechVoyage, your gateway to a world of tech exploration and discovery.
            </p>
        </div>
    </div>

    <div className="home3" id='about'>
        <div>
            <h1>Who we Are?</h1>
            <p>
            At TechVoyage, we're a dynamic team of tech enthusiasts committed to driving innovation and solving challenges through cutting-edge solutions. 
            With expertise in software development, AI, and emerging technologies, we strive to make technology accessible and impactful for everyone. 
            Our core values of creativity, integrity, and collaboration guide us as we pioneer solutions that empower individuals and businesses in the digital age.

            We believe in pushing the boundaries of what's possible, turning ideas into reality, and creating a positive impact on society. 
            Join us on our journey as we continue to shape the future of technology and make meaningful contributions to a world that's increasingly driven by innovation and creativity.
                
            </p>
        </div>
    </div>

    <div className="home4" id='brands'>
      <div>
        <h1>Brands</h1>
        
        <article>
          <div style={{
            animationDelay:"0.3s",
          }}>
          <AiFillGoogleCircle/>
          <p>Google</p>
          </div>
          <div style={{
            animationDelay:"0.5s",
          }}>
          <AiFillAmazonCircle/>
          <p>Amazon</p>
          </div>
          <div style={{
            animationDelay:"0.7s",
          }}>
          <AiFillYoutube/>
          <p>YouTube</p>
          </div>
          <div style={{
            animationDelay:"1s",
          }}>
          <AiFillInstagram/>
          <p>Instagram</p>
          </div>
        </article>
      </div>
    </div>
    </>
  )
}

export default Home
