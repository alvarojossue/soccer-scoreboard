import React from 'react'

class MatchRegistration extends React.Component {

	goToScoreboard(event){
		event.preventDefault();
		const matchName = this.matchName.value.replace(/\s+/g, '-').toLowerCase();
		this.context.router.transitionTo(`/match/${matchName}`)
	}

	render(){
		return (
			<form onSubmit={(e) => this.goToScoreboard(e)}>
				<h1>Match of the day</h1>
				<h2>Please enter a match name</h2>
				<input type="text" required placeholder="El Clasico" ref={(input) => {this.matchName = input}}/> {/* Uses ref to be able to access the text in the input field and reuse it on goToScoreboard */}
				<button type="submit">Create!</button>
			</form>
		)
	}
}

MatchRegistration.contextTypes = {
	router: React.PropTypes.object
}

export default MatchRegistration;