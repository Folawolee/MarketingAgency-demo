
import './Card.css'

const Card = ({icon, title, description, text}) => {
  return (
    <div className='card'>
        <img className='card-icon' src={icon} alt={title} />
        <h3 className='card-title'>{title}</h3>
        <p className='card-description'>{description}</p>
        <p className='card-text'>{text}</p>
    </div>
  )
}

export default Card