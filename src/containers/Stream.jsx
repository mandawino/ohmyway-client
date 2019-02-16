import React, {Component} from 'react';
import Image from '../presenters/Image.jsx';

class Stream extends Component {
    constructor() {
        super();
    }


    
    componentDidMount() {
        const {store}= this.props;
        console.log("store present ?", store);
        // Call images
        this.getImages(store);
        // this.getImages(this.props.match.params.country);
    }

    getImages(store){
        const configFetch = {
            method: 'GET'
        };
        const url = SERVER.config.BASE_URL+'/images/';
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

    // componentDidUpdate(prevProps){
    //     // Compare countryFilter to rerender ?
    //     if(this.props.match.params.country !== prevProps.match.params.country){
    //         console.log("NEW COUNTRY ", this.props.match.params.country)
    //         this.getImages(this.props.match.params.country)
    //     }
    // }

    render(){
        const {store} = this.props;
        console.log("STOOORE in Stream", store.getState());
        if(store && store.getState()){
            return (<div className="stream">
                {store.getState().map((image, index) =>
                    <Image key={index} image={image}></Image>)}
            </div>)
        } else {
            return (<div>
                <span>Stream loading</span>
            </div>)
        }
    }


}

export default Stream;
