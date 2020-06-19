import React, { Component } from 'react';
import './Temp.css'

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
            <div>
                <p>It's warm outside.</p>
            </div>
        )
    }

}

export default WarmTemp;