import React, {Component} from 'react'
import './year-income-goal.css'

class YearIncomeGoal extends Component {
    
    render() {
        return (
            <div className="card yearIncomeGoal">
                <img className="card-img-top img-fluid" src={this.props.imgUrl} alt="YearIncomeGoal"></img>
                <div className="card-block">
                    <h4 className="card-title">YearIncomeGoal</h4>
                    <p className="card-text">Price: ${this.props.city}</p>
                </div>
            </div>
        );
    }
}

export default YearIncomeGoal;