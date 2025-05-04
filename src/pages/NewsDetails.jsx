import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import RighAside from '../components/homelayout/RighAside';
import NewsDetailsCard from './NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data = useLoaderData()
    const { id } = useParams()
    const [news, setNews] = useState({})

    useEffect(() => {
        const newsDetails = data.find(singleNews => singleNews.id = id)
        setNews(newsDetails)
    }, [data, id])
    // console.log(news)

    return (
        <div>
            <header className='my-12'>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-4 gap-10 my-6'>
                <section className='col-span-3'>
                    <h2>News Details</h2>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-1'>
                    <RighAside></RighAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;