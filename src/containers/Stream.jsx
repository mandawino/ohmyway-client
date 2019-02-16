import React, {Component} from 'react';
import Image from '../presenters/Image.jsx';
import { connect } from 'react-redux'

class Stream extends Component {
    constructor() {
        super();
    }

    getImages(dispatch){
        const configFetch = {
            method: 'GET'
        };
        const url = SERVER.config.BASE_URL+'/images';
        console.log("Call ", url);
        fetch(url, configFetch)
            .then(res => {
                res.json().then(json => {
                    console.log("json", json);
                    dispatch({
                        type: 'SET_IMAGES',
                        images: json
                    })
                });
            })
    }

    componentDidMount() {
        const {dispatch} = this.props;
        this.getImages(dispatch);

        // const {store}= this.props;
        // Call images
        // this.getImages(this.props.match.params.country);
    }



    getVisibleImages(images, country){
        // All images if no country defined
        const visibleImages = images[country] || images; 
        return visibleImages;
    }

    // componentDidUpdate(prevProps){
    //     // Compare countryFilter to rerender ?
    //     if(this.props.match.params.country !== prevProps.match.params.country){
    //         console.log("NEW COUNTRY ", this.props.match.params.country)
    //         this.getImages(this.props.match.params.country)
    //     }
    // }

    render(){
        const {images} = this.props;
        console.log("ISITTHEPROPS ?", images)
        if(images){
            const visibleImages = this.getVisibleImages(images, 'thailande');
            let imagesUrl = [];
            for(const location in visibleImages){
                for(const image in visibleImages[location]){
                    const imageUrl = visibleImages[location][image];
                    imagesUrl.push(imageUrl)
                }
            }
            console.log('imagesUrl', imagesUrl);
            return (<div className="stream">
                {imagesUrl.map((url, index) =>
                    <Image key={index} image={url}></Image>)}
            </div>)
        } else {
            return (<div>
                <span>Stream loading</span>
            </div>)
        }
    }
}

const mapStateToProps = (state) => {
    return {
        images : state.images
        // : this.getVisibleImages(
        //     state.images,
        //     state.country
        // )
    }
}

export default connect(mapStateToProps)(Stream);
