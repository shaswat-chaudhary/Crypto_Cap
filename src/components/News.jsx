import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Spinner } from './Spinner';

export const News = () => {

    const { news } = useContext(AppContext);

    const [loading, setLoading] = useState(false);


    return (
        <div className='flex flex-col gap-2'>
            {
                loading ? (<Spinner />) : (
                    news.splice(0, 4).map((article, index) => (
                        
                        <div key={index} article={article}>

                            <Link to={article?.url}>
                                <div
                                    className='w-full flex gap-5 items-center border border-[#808080] rounded-md overflow-hidden p-2'>
                                    <img
                                        src={article?.urlToImage ?? 'no image'}
                                        alt={article?.title}
                                        className='w-20 h-20 rounded-md object-cover'
                                    />
                                    <div className='flex flex-col text'>
                                        <p className='text-[16px]'>
                                            {article?.title.split("").slice(0, 50).join("") + ' '}<span className='text-blue-500 font-semibold'>read more...</span>
                                        </p>
                                        <span className='text-sm text-slate-600'>
                                            Published at {moment(article?.publishedAt ?? new Date).format('YY-DD-MM')}</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )))}
        </div>
    )
}
