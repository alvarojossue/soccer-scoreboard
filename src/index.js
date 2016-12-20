import React from 'react'
import { render } from 'react-dom'
import {BrowserRouter, Match, Miss} from 'react-router'
import TeamRegistration from './components/TeamRegistration'
import NotFound from './components/NotFound'
import App from './components/App'

const Root = () => {
	return(
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={TeamRegistration} />
				<Match exactly pattern="/match/:matchId" component={App} />
				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
	)	
}

render(<Root />, document.querySelector('#main'));