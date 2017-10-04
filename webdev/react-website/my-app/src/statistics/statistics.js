import React, {Component} from 'react'
import './statistics.css'

class Statistics extends Component {
    
    render() {
        return (
            <div className="card statistics">
                <img className="card-img-top img-fluid" src={this.props.imgUrl} alt="Statistics"></img>
                <div className="card-block">
                    <h4 className="card-title">shot views | likes | comments card</h4>
                    <p className="card-text">Price: ${this.props.city}</p>
                </div>
            </div>
        );
    }
}

export default Statistics;