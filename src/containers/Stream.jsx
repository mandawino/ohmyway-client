import React, {Component} from 'react';
import Image from '../presenters/Image.jsx';

class Stream extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.getImages(this.props.match.params.country);
    }

    componentDidUpdate(prevProps){
        if(this.props.match.params.country !== prevProps.match.params.country){
            console.log("NEW COUNTRY ", this.props.match.params.country)
            this.getImages(this.props.match.params.country)
        }
    }

    render(){
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

    getImages(country){
        const configFetch = {
            method: 'GET'
        };
        const url = country ? SERVER.config.BASE_URL+'/images/'+country : SERVER.config.BASE_URL+'/images/';
        console.log("Call ", url);
        fetch(url, configFetch)
            .then(res => {
                res.json().then(json => {
                    console.log("json", json);
                    this.setState(() => ({images: json}));
                });
            })

    }
}

export default Stream;
