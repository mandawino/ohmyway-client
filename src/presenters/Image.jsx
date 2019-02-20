import React from 'react';
import PropTypes from 'prop-types'


const Image = (props) => {
    const url = SERVER.config.BASE_URL+'/image?path='+props.image;
    return <img className="image" src={url}/>
}

Image.propTypes = {
    image: PropTypes.string.isRequired
}

export default Image;
