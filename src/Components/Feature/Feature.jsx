import './Feature.css'
import forbes from '../../assets/images/forbes-logo.png'
import netflix from '../../assets/images/netflix-logo.png'
import amazon from '../../assets/images/amazon-logo.png'
import sej from '../../assets/images/sej-logo.png'
import entrepreneur from '../../assets/images/entrepreneur-logo.png'

const Feature = () => {
  return (
    <div className='feature-container'>
        <div className='feature'>
            <div className='feature-text'>
                <h1>Our work featured on</h1>
            </div>
           
            <div className='feature-image'>
                <img src={forbes} alt="forbes-logo" />
                <img src={netflix} alt="natflix-logo" />
                <img src={amazon} alt="amazon-logo" />
                <img src={sej} alt="sej-logo" />
                <img src={entrepreneur} alt="entrepreneur-logo" />
            </div>
        </div>
    </div>
  )
}

export default Feature