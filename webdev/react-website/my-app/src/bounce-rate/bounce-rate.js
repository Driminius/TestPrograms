import React, {Component} from 'react'
import './bounce-rate.css'

class BounceRate extends Component {
    
    render() {
        return (
            <div className="card">
                <img className="card-img-top bounce" src={this.props.imgUrl} alt="bounce"></img>
                <div className="card-block">
                    
                    <p className="card-text">Price: ${this.props.city}</p>
                </div>
            </div>
        );
    }
}

export default BounceRate;