import React from 'react'
import Scoreboard from './Scoreboard'
import Field from './Field'
import Locker from './Locker'

class App extends React.Component {
	render(){
		return (
			<div>
				<Scoreboard /> {/* Where the overall score is shown */}
				<Field /> {/* Where goals are added or substracted */}
				<Locker /> {/* Where teams are created */}
			</div>
		)
	}
}

export default App;