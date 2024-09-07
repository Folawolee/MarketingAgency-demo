import './BlogCard.css'

export default function BlogCard({image,date,person,title,description,link}){
    return(
        <div className='blog-card'>
            <img src={image} alt={title} />
            <div className='blog-card-info'>
                <p className='blog-card-info-p'>{date}/{person}</p>
                <h3>{title}</h3>
                <p className='blog-card-info-q'>{description}</p>
                <a href={link}>{link}</a>
            </div>
        </div>

    )
}
