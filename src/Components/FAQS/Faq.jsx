import './Faq.css'
import Card from '../../Cards/Card/Card'
import cardData from '../../assets/CardData'
const Faq = () => {
  return (
    <div className='faq-container'>
        <div className='faq'>
            <div className='faq-text'>
                <h1>HOW PAGETRAFFIC CREATES HYPER BUSINESS GROWTH</h1>
                <p>PageTraffic offers top-notch SEO and digital marketting solutions to help you rank high on search results, connect with.</p>
                <ul>
                    <li>PageTraffic offers top-notch SEO and digital</li>
                    <li>PageTraffic offers top-notch SEO and digital</li>
                    <li>PageTraffic offers top-notch SEO and digital</li>
                    <li>PageTraffic offers top-notch SEO and digital</li>
                </ul>
                <div className='faq-text-data'>
                    <div className='faq-text-data-item'>
                        <h3>1.9k</h3>
                        <p>Total Audience</p>
                    </div>
                    <div className='faq-text-data-item num'>
                        <h3>5.7k</h3>
                        <p>Complete Project</p>
                    </div>
                </div>
                <button className='explore-btn'>Explore Now</button>
            </div>
            <div className='faq-image'>
                <div className='card-container'>
                        {cardData.map((card, index) =>{
                            return <Card className={`card card-${index + 1}`} key={index} icon={card.icon} title={card.title} description={card.description} text={card.text} />
                        })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Faq