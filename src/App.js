import React from 'react';

import Page from './Layout/Page/Page';

import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';

import HomePage from './Pages/HomePage/HomePage';
import StaffPage from './Pages/StaffPage/StaffPage';

import AssignmentsPage from './Pages/AssignmentsPage/AssignmentsPage';

function App() {
  return (
	<Router>
		<Switch>
			<Route path="/homeworks">
				<AssignmentsPage/>
			</Route>
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
