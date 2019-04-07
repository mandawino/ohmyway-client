import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Image from '../presenters/Image';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getObjectValues, areArraysEqual, countObjectValues } from '../utils/utils'
import {Spinner} from 'reactstrap'
import { getImagesStarted, getImagesSuccess, getImagesFailure, getImagesEnded } from '../actions/actionCreators'

export const Stream = ({data}) => (
    data && data.length 
        ? (<div className="stream">
            {data.map((url, index) => <Image key={index} image={url}></Image>)}
        </div>)
        : <h5 className="message">No image to display</h5>
)

const withFetch = (url) => (StreamComponent) => class extends Component {
    getImagesFromServer(dispatch){
        dispatch(getImagesStarted())
        const configFetch = {
            method: 'GET'
        };
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

    render(){
        return <StreamComponent {...this.props}/>
    }
}

export const withLoading = (Component) => ({loading, ...otherProps}) => {
    return loading ? <CustomSpinner/> : <Component {...otherProps}/>
}

export const CustomSpinner = (props) => <Spinner className= "spinner" color="primary"/>

export const withError = (Component) => ({error, ...otherProps}) => 
    error ? <Error error={error}/> : <Component {...otherProps}/>

export const Error = (props)  => 
    <h5 className="message error">{props.error.message}</h5>

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
    return {
        ...images, data: visibleImages
    }
}

export const HOCStream = withFetch(SERVER.config.BASE_URL+'/images')(withLoading(withError(Stream)))

export default withRouter(connect(mapStateToProps)(HOCStream));
