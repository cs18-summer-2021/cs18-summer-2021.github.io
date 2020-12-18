import React from 'react';

import Page from './Layout/Page/Page';

import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';

import HomePage from './Pages/HomePage/HomePage';
import StaffPage from './Pages/StaffPage/StaffPage';

function App() {
  return (
	<Router>
		<Switch>
			<Route path="/staff">
				<StaffPage/>
			</Route>
			<Route path="/">
				<HomePage/>
			</Route>
		</Switch>
	</Router>
  );
}

export default App;
