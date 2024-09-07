import './CaseStudy.css'
import CardProfile from '../../Cards/CardProfile/CardProfile'
import CardProfileData from '../../assets/CardProfileData'


export default function CaseStudy(){
    return(
        <div className='case-study'>
            <div className='case-study-text'>
                <h2>CASE STUDY</h2>
                <h1>OUR CLIENT GETS RESULTS</h1>
                <p>PageTraffic offers top-notch SEO and digital marketting solutions.</p>
            </div>
            <div className='case-study-cards'>
               {CardProfileData.map((card, index) => (
                <CardProfile className={`cardp cardp-${index + 1}`}
                key={index}
                image={card.image}
                title={card.title}
                rating={card.rating}
                />
               ))}
            </div>
        </div>
    )
}
