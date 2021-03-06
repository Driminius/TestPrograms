import React, {Component} from 'react'
import './new-visitors.css'

class NewVisitors extends Component {
    
    render() {
        return (
            <div className="card">
                <img className="card-img-top visitors" src={this.props.imgUrl} alt="Product"></img>
                <div className="card-block">
                    <h4 className="card-title">18</h4>
                    <p className="card-text">Price: ${this.props.city}</p>
                </div>
            </div>
        );
    }
}

export default NewVisitors;