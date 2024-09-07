import './Portfolio.css'
import portfolio1 from '../../assets/images/portfolio-1.png'
import portfolio2 from '../../assets/images/portfolio-2.png'
import portfolio3 from '../../assets/images/portfolio-3.png'
import portfolio4 from '../../assets/images/portfolio-4.png'
import portfolio5 from '../../assets/images/portfolio-5.png'
import portfolio6 from '../../assets/images/portfolio-6.png'


export default function Portfolio(){
    return(
        <div className='portfolio'>
            <h1>Our Portfolio</h1>
            <ul>
                <li>All</li>
                <li>Web Development</li>
                <li>App Development</li>
                <li>UI/UX Design</li>
                <li>SEO</li>
            </ul>
            <div className='portfolio-images'>
                <img src={portfolio1} alt='portfolio1' />
                <img src={portfolio2} alt='portfolio2' />
                <img src={portfolio3} alt='portfolio3' />
                <img src={portfolio4} alt='portfolio4' />
                <img src={portfolio5} alt='portfolio5' />
                <img src={portfolio6} alt='portfolio6' />
            </div>
            <button className='view-btn'>View More</button>
        </div>
    )
}