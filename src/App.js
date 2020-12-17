import React from 'react';

import Page from './Layout/Page/Page';

import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';

function App() {
  return (
	<Router>
		<Switch>
			<Route path="/">
				<Page />
			</Route>
		</Switch>
	</Router>
  );
}

export default App;
