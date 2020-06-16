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
        const isBackgroundNormal = true;
        return (
            <div className={isBackgroundNormal ? 'background-hot' : null}>
                <div className="loading-data">
                    {this.state.loading 
                    ? <p>.</p>
                    : <div>
                    </div> }
                </div>
            </div>
        )
    }

}

export default WarmTemp;