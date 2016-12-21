import React from 'react'
import Scoreboard from './Scoreboard'
import Field from './Field'
import Locker from './Locker'

class App extends React.Component {

	constructor(){
		super();

		this.addTeam = this.addTeam.bind(this) // Makes this function available to be call anywhere from this component


		//Initial state
		this.state = {
			teams: {}
		}
	}

	addTeam(team){ // Function to be used in AddTeamForm.js (passed as props in Locker and the AddTeamForm)
		const teams = {...this.state.teams} // Copy of our current state
		const timestamp = Date.now(); // To have unique teams
		teams[`team-${timestamp}`] = team // Adds new team
		this.setState({ teams : teams }) // Sets the new state
	}

	render(){
		return (
			<div>
				<Scoreboard /> {/* Where the overall score is shown */}
				<Field teams={this.state.teams}/> {/* Where goals are added or substracted. We pass all the teams */}
				<Locker addTeam={this.addTeam}/> {/* Where teams are created. We pass the function addTeam as props */}
			</div>
		)
	}
}

export default App;