import React from 'react'
import AddTeamForm from './AddTeamForm'

//Where teams are created

class Locker extends React.Component {
	render(){
		return (
			<div>
				<h2>Locker</h2>
				<AddTeamForm />
			</div>
		)
	}
}

export default Locker;