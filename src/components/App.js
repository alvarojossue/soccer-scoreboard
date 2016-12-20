import React from 'react'
import Scoreboard from './Scoreboard'
import Field from './Field'
import Locker from './Locker'

class App extends React.Component {
	render(){
		return (
			<div>
				<Scoreboard />
				<Field />
				<Locker />
			</div>
		)
	}
}

export default App;