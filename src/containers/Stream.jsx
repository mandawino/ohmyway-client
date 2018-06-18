import React, {Component} from 'react';
import Image from '../presenters/Image.jsx';

class Stream extends Component {
    constructor() {
        super();
    }

    componentWillMount() {
        const configFetch = {
            method: 'GET'
        };
        const url = SERVER.config.BASE_URL+'/images';
        fetch(url, configFetch)
            .then(res => {
                res.json().then(json => {
                    console.log("json", json);
                    this.setState(() => ({images: json}));
                });
            })
    }

    render(){
        console.log("Stream", this.state);
        if(this.state && this.state.images){
            return (<div className="stream">
                {this.state.images.map((image, index) =>
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
