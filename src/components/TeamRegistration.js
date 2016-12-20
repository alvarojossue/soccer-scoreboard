import React from 'react'

class TeamRegistration extends React.Component {

	goToScoreboard(event){
		event.preventDefault();
		const blueInput = this.blueInput.value;
		const redInput = this.redInput.value;
		const matchId = `${blueInput}-${redInput}`
		this.context.router.transitionTo(`/match/${matchId}`);
	}

	render(){
		return (
			<form onSubmit={(e) => this.goToScoreboard(e)}>
				<h1>Match of the day</h1>
				<h2>Please enter the name of each team</h2>
				<input type="text" required placeholder="Team Blue" ref={(input) => {this.blueInput = input}}/>
				<input type="text" required placeholder="Team Red" ref={(input) => {this.redInput = input}} />
				<button>Start!</button>
			</form>
		)
	}
}

TeamRegistration.contextTypes = {
	router: React.PropTypes.object
}

export default TeamRegistration;