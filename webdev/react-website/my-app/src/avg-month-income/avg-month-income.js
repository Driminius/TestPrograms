import React, {Component} from 'react'
import './avg-month-income.css'

class AvgMonthIncome extends Component {
    
    render() {
        return (
            <div className="card avgMonthIncome">
                <img className="card-img-top img-fluid" src={this.props.imgUrl} alt="AvgMonthIncome"></img>
                <div className="card-block">
                    <h4 className="card-title">AvgMonthIncome</h4>
                    <p className="card-text">Price: ${this.props.city}</p>
                </div>
            </div>
        );
    }
}

export default AvgMonthIncome;