import React from 'react'

class TeamControls extends React.Component {
	render(){

		const details=this.props.details; 
		return (
			<li>
				<p>Controls for {details.name}</p>
				<button>Goal!</button>
				<button>Offside!</button>
			</li>
		)
	}
}

export default TeamControls;