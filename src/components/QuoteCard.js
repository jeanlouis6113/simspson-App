  
import React from 'react';
import './QuoteCard.css';



const QuoteCard = ({simpsonPers}) => {
    return (
        <figure className="QuoteCard">
            <img
            src={simpsonPers.image}
            alt={simpsonPers.character} />
            <figcaption>
                <blockquote>{simpsonPers.quote}</blockquote>
                <p>
                    <cite>{simpsonPers.character}</cite>
                </p>
            </figcaption>
        </figure>
    )
}



export default QuoteCard;