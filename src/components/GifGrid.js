// import React, { useState, useEffect } from 'react'
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifts';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    
    // const [images, setImages] = useState([])
    // 
    // useEffect( () => {
    //     getGifs(category)
    //         .then( setImages );
    //     // ret
    // }, [category])
    const { data: imgs, loading } = useFetchGifs( category );
    
    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> {category} </h3>
            {loading && <p className="animate__animated animate__flash">Loading</p>}
            <div className="card-grid">
                {
                    imgs.map( img => (
                        <GifGridItem
                            key={ img.id}
                            { ...img }
                        />
                    ))
                }
            </div>
        </>
    )
}
