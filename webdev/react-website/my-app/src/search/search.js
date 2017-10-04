import React, {Component} from 'react'
import './search.css'

class Search extends Component {
    
    render() {
        return (
            <div className="card">
                <img className="card-img-top search" src={this.props.imgUrl} alt="Search"></img>
                <div className="card-block">
                    <h4 className="card-title">Searchs</h4>
                    <p className="card-text">Price: ${this.props.city}</p>
                </div>
            </div>
        );
    }
}

export default Search;