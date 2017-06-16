// if (process.env.NODE_ENV === 'production') {
//     module.exports = require('containers/Root.prod');
// } else {
//     module.exports = require('containers/Root.dev');
// }


// import React from 'react'
//
// const Root = () => (
//     <div>Hello React Hot Loader!</div>
// );

import React, {Component, PropTypes} from 'react';

class Root extends Component {
    render() {
        return (
            <div>check</div>
        );
    }
}

export default Root