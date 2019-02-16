import React, {Component} from 'react';
import Image from '../presenters/Image.jsx';

class Stream extends Component {
    constructor() {
        super();
    }


    
    componentDidMount() {
        const {store}= this.props;
        // Call images
        this.getImages(store);
        // this.getImages(this.props.match.params.country);
    }

    getImages(store){
        const configFetch = {
            method: 'GET'
        };
        const url = SERVER.config.BASE_URL+'/images';
        console.log("Call ", url);
        fetch(url, configFetch)
            .then(res => {
                res.json().then(json => {
                    console.log("json", json);
                    store.dispatch({
                        type: 'SET_IMAGES',
                        images: json
                    })
                    // this.setState(() => ({images: json}));
                });
            })
    }

    getVisibleImages(store, country){
        const visibleImages = (store.getState().images || {})[country] || {};
        console.log('visibleImagessssss', visibleImages)
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
        const {store} = this.props;
        if(store && store.getState() && store.getState().images){
            const visibleImages = this.getVisibleImages(store, 'thailande');
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

export default Stream;
