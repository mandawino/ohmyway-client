import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Image from '../presenters/Image';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import {Spinner} from 'reactstrap'

class Stream extends Component {
    getImages(dispatch){
        const configFetch = {
            method: 'GET'
        };
        const url = SERVER.config.BASE_URL+'/images';
        fetch(url, configFetch)
            .then(res => {
                if(res.ok) {
                    return res.json();
                } else {
                    throw new Error('Fetch to Nasa failed');
                }
            }).then(json => {
                console.log("json", json);
                dispatch({
                    type: 'SET_IMAGES',
                    images: json
                })
            })
            .catch(error => console.error(error));
    }

    componentDidMount() {
        const {dispatch} = this.props;
        this.getImages(dispatch);
    }

    componentDidUpdate(){
        const {images} = this.props;
    }

    shouldComponentUpdate(nextProps){
        // First render (no images) or new country
        return !this.props.images || 
            nextProps.match.params.country !== this.props.match.params.country
    }

    getVisibleImages(images, country){
        if(!!country){
            return this.getAllImagesFromCountry(images, country)
        } else {
            // All images if no country defined 
            let visibleImages = []
            for(const country in images){
                visibleImages = visibleImages
                    .concat(this.getAllImagesFromCountry(images, country))
            }
            return visibleImages;
        }
    }

    getAllImagesFromCountry(images, country){
        let imagesUrl = [];
        for(const location in images[country]){
            for(const image in images[country][location]){
                const imageUrl = images[country][location][image];
                imagesUrl.push(imageUrl)
            }
        }
        return imagesUrl;
    }

    render(){
        const {images} = this.props;
        if(images){
            const country = this.props.match.params.country || null;
            const visibleImages = this.getVisibleImages(images, country);
            return (<div className="stream">
                {visibleImages.map((url, index) =>
                    <Image key={index} image={url}></Image>)}
            </div>)
        } else {
            return (<div className="stream">
                <Spinner className= "spinner" color="primary"/>
            </div>)
        }
    }
}

Stream.propTypes = {
    images: PropTypes.object
}

const mapStateToProps = (state) => {
    return {
        images : state.images
    }
}
export { Stream }
export default withRouter(connect(mapStateToProps)(Stream));