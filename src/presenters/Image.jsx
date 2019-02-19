import React, {Component} from 'react';
import PropTypes from 'prop-types'


class Image extends Component {
    render(){
        const url = SERVER.config.BASE_URL+'/image?path='+this.props.image;
        return <img className="image" src={url}/>
    }
}

Image.propTypes = {
    image: PropTypes.string.isRequired
}

export default Image;
