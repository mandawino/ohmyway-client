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
        fetch(SERVER.config.BASE_URL+'/images', configFetch)
            .then(res => {
                res.json().then(json => {
                    console.log("json", json);
                    this.setState(() => ({images: json}));
                });
            })
    }

    render(){
        console.log("state Stream", this.state);
        if(this.state && this.state.images){
            return (<div>
                {this.state.images.map((image, index) => <Image key={index} image={image}></Image>)}
            </div>)
        } else {
            return (<div>
                <span>Stream loading</span>
            </div>)
        }
    }
}

export default Stream;
