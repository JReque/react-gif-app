//Funcional Component
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
// import PropTypes from 'prop-types';

const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['Samurai X']);

    // const handleAdd = () => {
    //     setCategories( [ 'Hunter X Hunter', ...categories ]);
    //     console.log(categories);

    // }

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories= { setCategories } />
            <hr />
            
            <ol>
                {
                    categories.map( category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    );
}

// GifExpertApp.propTypes = {
//     saludo: PropTypes.string.isRequired,
// }

// GifExpertApp.defaultProps = {
//     subtitle : 'I am a default prop'
// }

export default GifExpertApp;