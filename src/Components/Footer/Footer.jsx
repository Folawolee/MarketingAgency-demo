import NewsCardData from '../../assets/NewsCardData'
import { NewsCard } from '../../Cards/NewsCard/NewsCard'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer'>
        <div className='footer-top'>
          <div className='footer-text'>
            <h1>DesioTech.</h1>
            <p>We are a team of experienced developers and designers who are passionate about creating beautiful and functional websites.</p>
            <div className='footer-socials'>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>
          </div>
          <div className='footer-company'>
            <h3>Company</h3>
            <ul>
              <li>About Us</li> 
              <li>Our Services</li>
              <li>Our Team</li>
              <li>Our Blog</li>
            </ul>
          </div>
          <div className='footer-latestnews'>
            <h3 className='footer-latestnews-title'>Latest News</h3>
            {NewsCardData.map((news, index) => {
              return <NewsCard className="footer-news-card" key={index} image={news.image} title={news.title} description={news.description} date={news.date} />
            })}
          </div>
        </div>

        <div className='footer-bottom'>
          <p>© 2024 DesioTech. All rights reserved.</p>
          <p><span>Privacy</span> | Terms of Service</p>
          
        </div>
      </div>
    </div>
  )
}

export default Footer