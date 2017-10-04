import React, {Component} from 'react'
import './temperature.css'

class Temperature extends Component {
    
    render() {
        return (
            <div className="card temp">
                <img className="card-img-top img-fluid" src={this.props.imgUrl} alt="Product"></img>
                <div className="card-block">
                    <h4 className="card-title">18</h4>
                    <p className="card-text">Price: ${this.props.city}</p>
                </div>
            </div>
        );
    }
}

export default Temperature;