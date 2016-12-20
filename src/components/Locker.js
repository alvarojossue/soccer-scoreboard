import React from 'react'
import AddTeamForm from './AddTeamForm'

//Where teams are created

class Locker extends React.Component {
	render(){
		return (
			<div>
				<h2>Locker</h2>
				<AddTeamForm addTeam={this.props.addTeam} /> {/* Passes the function addTeam declared in App. js and also passed in <Locker /> */}
			</div>
		)
	}
}

export default Locker;