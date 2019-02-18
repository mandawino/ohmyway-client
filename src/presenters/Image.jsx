import React, {Component} from 'react';


class Image extends Component {
    render(){
        const url = SERVER.config.BASE_URL+'/image?path='+this.props.image;
        return <img className="image" src={url}/>
    }
}

export default Image;
