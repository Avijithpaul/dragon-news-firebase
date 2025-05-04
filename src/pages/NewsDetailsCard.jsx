import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    console.log(news)
    return (
        <div>
            <h2 className='text-2xl font-bold p-2'>{news.title}</h2>
            <img className='w-full shadow' src={news.image_url} alt="" />
            <p className='p-5 text-accent '>
                {news.details}
            </p>
            <Link className='btn btn-secondary' to={`/category/${news.category_id}`}>Back To Category</Link>
        </div>
    );
};

export default NewsDetailsCard;