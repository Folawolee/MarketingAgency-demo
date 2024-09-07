import './CardProfile.css'

export default function CardProfile({image,title,rating}) {
    return(
        <div className='cardprofile'>
            <img className='cardprofile-image' src={image} alt={name} />
            <div className='cardprofile-info'>
                <h3>{title}</h3>
                <button className='rating-btn'><p>{rating}</p></button>
            </div>

        </div>
    )
}
