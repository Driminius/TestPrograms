import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/* import components */
import Temperature from '../temperature/temperature';
import NewVisitors from '../new-visitors/new-visitors';
import BounceRate from '../bounce-rate/bounce-rate';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      
		
		<div className="container-fluid App-main">
			<div className="row">
				<div className="col-sm-8">
					<div className="row">
						<div className="col-sm-4"><p>new followers card</p></div>
						<div className="col-sm-4"><p>average monthly income card</p></div>
						<div className="col-sm-4"><p>yearly income card</p></div>
					</div>
					<div className="row">
						<div className="col-sm-12">
							<p>shot views | likes | comments card </p>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-12">
							<p>shot views | likes | comments card </p>
						</div>
					</div>
				</div>
				<div className="col-sm-4">
					<div className="row">
						<div className="col-sm-12"><Temperature /></div>
					</div>
					<div className="row">
						<div className="col-sm-12"><NewVisitors /></div>
					</div>
					<div className="row">
						<div className="col-sm-12"><BounceRate /></div>
					</div>
					<div className="row">
						<div className="col-sm-12"><p>Searchs card </p></div>
					</div>
					<div className="row">
						<div className="col-sm-12"><p>Traffic card</p></div>
					</div>
				</div>
			</div>
		</div>
		
      </div>
    );
  }
}

export default App;
