import React from 'react'
import TeamControls from './TeamControls'

// Where goals are added or substracted

class Field extends React.Component {
	render(){
		return (
			<div>
				<h2>Field</h2>
				{Object.keys(this.props.teams).map(key => <TeamControls key={key} index={key} details={this.props.teams[key]}/>)}
			</div>
		)
	}
}

export default Field;