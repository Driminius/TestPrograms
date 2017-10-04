import React, {Component} from 'react'
import './traffic.css'

class Traffic extends Component {
    
    render() {
        return (
            <div className="card">
                <img className="card-img-top traffic" src={this.props.imgUrl} alt="Traffic"></img>
                <div className="card-block">
                    <h4 className="card-title">Traffic</h4>
                    <p className="card-text">Price: ${this.props.city}</p>
                </div>
            </div>
        );
    }
}

export default Traffic;