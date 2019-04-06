import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Image from '../presenters/Image';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { areArraysEqual } from '../utils/util'
import {Spinner} from 'reactstrap'

export class Stream extends Component {

    getImagesFromServer(dispatch){
        dispatch({
            type: 'GET_IMAGES_STARTED',
        })
        const configFetch = {
            method: 'GET'
        };
        const url = SERVER.config.BASE_URL+'/images';
        fetch(url, configFetch)
            .then(res => {
                if(res.ok) {
                    return res.json();
                } else {
                    throw new Error('Fetch to get images failed');
                }
            }).then(json => {
                console.log('Get images: ', json);
                dispatch({
                    type: 'GET_IMAGES_SUCCESS',
                    images: json
                })
            })
            .catch(error => {
                console.error(error)
                dispatch({
                    type: 'GET_IMAGES_FAILURE',
                    error: error
                })
            })
            .finally( () => {
                dispatch({
                    type: 'GET_IMAGES_ENDED',
                })
            });
    }

    componentDidMount() {
        const {dispatch} = this.props;
        this.getImagesFromServer(dispatch);
    }


    shouldComponentUpdate(nextProps){
        return nextProps.loading !== this.props.loading
            || nextProps.error !== this.props.error
            || !areArraysEqual(nextProps.data, this.props.data)
            || nextProps.match.params.country !== this.props.match.params.country;
    }
 
    render(){
        const {data, loading, error} = this.props;
        if(loading){
            return <Spinner className= "spinner" color="primary"/>
        }
        if(error){
            return <h5 className="message error">{error.message}</h5>
        }
        if(!data || !data.length){ //  && Object.entries(images).length
            return <h5 className="message">No image to display</h5>
        }
        return <div className="stream">
                {data.map((url, index) => <Image key={index} image={url}></Image>)}
            </div>
    }
}

const getImages = (images, initial = []) => {
    return Object.keys(images).reduce((result, key) => {
        if(typeof images[key] === 'string'){
            return [...result, images[key]]
        } else if (typeof images[key] === 'object') {
            return getImages(images[key], result)
        } else {
            throw new Error("Object can only be made up of objects and strings")
        }
      }, initial)
}

const getVisibleImages = (images, country) => {
    // All images if no country defined 
    if(images && Object.keys(images).length){
        return images && !!country
            ? getImages(images[country])
            : getImages(images)
    } else {
        return []
    }

}

const mapStateToProps = (state, props) => {
    const {images} = state;
    const visibleImages = getVisibleImages(images.data, props.match.params.country);
    return {
        ...images, data: visibleImages
    }
}

Stream.propTypes = {
    images: PropTypes.exact({
        data: PropTypes.arrayOf(PropTypes.string),
        loading: PropTypes.bool.isRequired,
        error: PropTypes.object
    })
}

export default withRouter(connect(mapStateToProps)(Stream));
