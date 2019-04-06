import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Image from '../presenters/Image';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getObjectValues, areArraysEqual, countObjectValues } from '../utils/utils'
import {Spinner} from 'reactstrap'
import { getImagesStarted, getImagesSuccess, getImagesFailure, getImagesEnded } from '../actions/actionCreators'

export class Stream extends Component {

    getImagesFromServer(dispatch){
        dispatch(getImagesStarted())
        const configFetch = {
            method: 'GET'
        };
        const url = SERVER.config.BASE_URL+'/images';
        fetch(url, configFetch)
            .then(res => {
                if(res.ok) {
                    return res.json();
                } else {
                    throw new Error('Unable to get images from server');
                }
            }).then(json => {
                console.log('Fetch get images: ', json);
                dispatch(getImagesSuccess(json))
            })
            .catch(error => {
                console.error(error)
                dispatch(getImagesFailure(error))
            })
            .finally(() => dispatch(getImagesEnded()));
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

const getImages = (images, country) => {
    // All images if no country defined 
    if(images && Object.keys(images).length){
        return !!country
            ? getObjectValues(images[country])
            : getObjectValues(images)
    } else {
        return []
    }
}

const mapStateToProps = (state, props) => {
    const {images} = state;
    const visibleImages = getImages(images.data, props.match.params.country);
    console.log('mapStateToProps', {
        ...images, data: visibleImages
    })
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
