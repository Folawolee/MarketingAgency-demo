import './NewsCard.css'

export const NewsCard = ({image, title, description, date}) => {
    return (
        <div className='news-card'>
            <img src={image} alt="" />
            <div className='news-card-content'>
                <h3>{title}</h3>
                <p className='news-card-description'>{description}</p>
                <p className='news-card-date'>{date}</p>
            </div>
        </div>
    )
}