import BlogCardData from '../../assets/BlogCardData'
import BlogCard from '../../Cards/BlogCard/BlogCARD.JSX'
import './Blog.css'

const Blog = () => {
  return (
    <div className='blog'>
        <div className='blog-text'><h1>See Our Blog Post</h1></div>
        <div className='blog-cards'>
            {BlogCardData.map((card, index) =>{
                return <BlogCard key={index} image={card.image} date={card.date} person={card.person} title={card.title} description={card.description} link={card.link} /> 
            })}
        </div>
    </div>
  )
}

export default Blog