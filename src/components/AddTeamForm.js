import React from 'react'

class AddTeamForm extends React.Component {

	createTeam(event){
		event.preventDefault();

		const team = {
			name: this.name.value,
			goals: 0
		}

		this.props.addTeam(team)
		this.form.reset();

	}


	render(){
		return (
			<form ref={(input) => {this.form = input}} onSubmit={(e) => this.createTeam(e)}> {/*On click, it executes the createTeam function. */}
				<input ref={(input) => {this.name = input}} type="text" placeholder="Team Name" /> {/*We use ref to access the input text from the creatTeam function */}
				<button type="submit">Create Team</button>
			</form>
		)
	}
}

export default AddTeamForm;