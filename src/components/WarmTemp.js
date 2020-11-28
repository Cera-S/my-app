import React, { Component } from 'react';

class WarmTemp extends Component {
    state = {
        warmTemp: null,
        loading: false,
        data: [],
    }

    componentDidMount() {
        this.setState({loading: true})
    }


    render () {
        return (
            <div className="warm">
                <p><b>It's warm outside.</b></p>
            </div>
        )
    }

}

export default WarmTemp;