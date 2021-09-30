import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import PhotoList from '../PhotoList/index';

function Gallery(props) {
    const { currentCategory } = props;

    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p>
            <PhotoList />
        </section>
    );
}

export default Gallery;