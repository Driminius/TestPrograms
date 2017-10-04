import React, {Component} from 'react'
import './followers.css'

class Followers extends Component {
    
    render() {
        return (
            <div className="card followers">
                <img className="card-img-top img-fluid" src={this.props.imgUrl} alt="Followers"></img>
                <div className="card-block">
                    <h4 className="card-title">Followers</h4>
                    <p className="card-text">Price: ${this.props.city}</p>
                </div>
            </div>
        );
    }
}

export default Followers;