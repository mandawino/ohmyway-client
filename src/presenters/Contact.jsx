import React, {Component} from 'react';

import { Button } from 'reactstrap';


class Contact extends Component {
    // componentWillMount() {
    //     const configFetch = {
    //         method: 'GET'
    //     };
    //     console.log("url", SERVER.config.BASE_URL+'/image?path='+this.props.image);
    //     fetch(SERVER.config.BASE_URL+'/image?path='+this.props.image, configFetch)
    //         .then(res => {
    //             res.json().then(json => {
    //                 console.log("Image json", json);
    //                 this.setState(() => ({image: json}));
    //             });
    //         })
    // }
    render(){
        return <div>
            <div>Théo Guérin</div>
            <div>Marion Boissières</div>
        </div>
        // if(this.state && this.state.image){
        //     return <div>
        //         <span>{this.props.image}</span>
        //     </div>
        // } else {
        //     return <span>Image loading</span>
        // }
    }
}

export default Contact;
