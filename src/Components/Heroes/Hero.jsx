import './Hero.css'
import heroImage from '../../assets/images/hero-image.png'
import playIcon from '../../assets/images/watch-video.png'

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className="hero">
        <div className="hero-text">
          <h1>Best <span>IT</span> Solution.</h1>
          <h2>#1 IT Solution in Nigeria</h2>
          <p>We are a team of experienced developers and designers who are passionate about creating beautiful and functional websites.</p>
          <div className="hero-btn">
            <button className='get-started'>Get Started</button>
            <img src={playIcon} alt="play-icon" />
            <a href="#">Watch Video</a>
          </div>
        </div>

        <div className="hero-image">
          <img src={heroImage} alt="hero-image" />
        </div>
      </div>
    </div>
  )
}

export default Hero