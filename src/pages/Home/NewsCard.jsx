import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaEye, FaRegStar, FaStar, FaStarHalf } from 'react-icons/fa';
import Rating from 'react-rating';



const NewsCard = ({news}) => {
    const {_id,title,details,image_url,author,total_view,rating}= news;
    return (
        <div>
           <Card className="mb-4">
      <Card.Header className='d-flex'> 
        <Image style={{height:"50px"} } src={author.img} roundedCircle className='mx-4' />
      <p>   {author.name} <br />
       {author.published_date}</p></Card.Header>

      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
         { details.length < 250 ? <>{details}</> : <>{details.slice(0,250)}....<Link to={`/news/${_id}`}>ReadMore</Link></>}
        </Card.Text>
        
      </Card.Body>
      <Card.Footer className="text-muted text-center">
        <div className='d-flex justify-content-between'>
        <div >
        <Rating
  placeholderRating={rating.number}
  readonly
  emptySymbol={<FaRegStar />}
  placeholderSymbol={<FaStar className='text-warning'/>}
  fullSymbol={< FaStar />} 
/> {rating.number}
        </div>
          {/* <p>{rating.number}</p> */}
          <p><FaEye/>{total_view} </p>
        </div>
        
        </Card.Footer>
    </Card>
        </div>
    );
};

export default NewsCard;