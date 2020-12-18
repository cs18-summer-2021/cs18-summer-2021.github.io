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
import Homeworks from './Info/Assignments/Homeworks/Homeworks';
import Projects from './Info/Assignments/Projects/Projects';
import Labs from './Info/Assignments/Labs/Labs';

function App() {
  return (
	<Router>
		<Switch>
			<Route path="/homeworks">
				<AssignmentsPage assignments={Homeworks}/>
			</Route>
			<Route path="/labs">
				<AssignmentsPage assignments={Labs}/>
			</Route>
			<Route path="/projects">
				<AssignmentsPage assignments={Projects}/>
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
