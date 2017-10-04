import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/* import components */
import Temperature from '../temperature/temperature';
import NewVisitors from '../new-visitors/new-visitors';
import BounceRate from '../bounce-rate/bounce-rate';
import Search from '../search/search';
import Traffic from '../traffic/traffic';
import Followers from '../followers/followers';
import AvgMonthIncome from '../avg-month-income/avg-month-income';
import YearIncomeGoal from '../year-income-goal/year-income-goal';
import Statistics from '../statistics/statistics';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
            <hr />
      
		
		<div className="container-fluid App-main">
			<div className="row">
				<div className="col-sm-9">
					<div className="row extra-bottom-padding">
						<div className="col-sm-4"><Followers /></div>
						<div className="col-sm-4"><AvgMonthIncome /></div>
						<div className="col-sm-4"><YearIncomeGoal /></div>
					</div>
					<div className="row extra-bottom-padding">
						<div className="col-sm-12">
							<Statistics />
						</div>
					</div>
					<div className="row extra-bottom-padding">
						<div className="col-sm-12">
							<Statistics />
						</div>
					</div>
				</div>
				<div className="col-sm-3">
					<div className="row extra-bottom-padding">
						<div className="col-sm-12"><Temperature /></div>
					</div>
					<div className="row extra-bottom-padding">
						<div className="col-sm-12"><NewVisitors /></div>
					</div>
					<div className="row extra-bottom-padding">
						<div className="col-sm-12"><BounceRate /></div>
					</div>
					<div className="row extra-bottom-padding">
						<div className="col-sm-12"><Search /></div>
					</div>
					<div className="row extra-bottom-padding">
						<div className="col-sm-12"><Traffic /></div>
					</div>
				</div>
			</div>
		</div>
		
      </div>
    );
  }
}

export default App;
