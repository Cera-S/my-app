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
                <p>It's warm outside.</p>
            </div>
        )
    }

}

export default WarmTemp;