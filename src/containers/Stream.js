import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Image from '../presenters/Image';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import {Spinner} from 'reactstrap'

class Stream extends Component {
    getImagesFromServer(dispatch){
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
        this.getImagesFromServer(dispatch);
    }

    shouldComponentUpdate(nextProps){
        // First render (no image) or new country
        return !this.props.images || 
            nextProps.match.params.country !== this.props.match.params.country
    }

    getImages(images, initial = []){
        return Object.keys(images).reduce((result, key) => {
            if(typeof images[key] === 'string'){
                return [...result, images[key]]
            } else if (typeof images[key] === 'object') {
                return this.getImages(images[key], result)
            } else {
                throw new Error("Object can only be made up of objects and strings")
            }
          }, initial)
    }

    getVisibleImages(images, country){
        // All images if no country defined 
        return !!country
            ? this.getImages(images[country])
            : this.getImages(images)
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
