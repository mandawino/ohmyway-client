import React, {Component, PropTypes} from 'react';

// import DevTools from 'containers/DevTools';

class Root extends Component {
    render() {
        // const devTools = !window.devToolsExtension ? <DevTools /> : null
        return (
                <div>
                    <p>Hello dev</p>
                    {/*{ devTools }*/}
                </div>
        );
    }
}

export default Root;
