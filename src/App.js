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

import NotesPage from './Pages/NotesPage/NotesPage';
import Lectures from './Info/Notes/Lectures/Lectures';
import Workshops from './Info/Notes/Workshops/Workshops';

function App() {
  return (
	<Router>
		<Switch>
			<Route path="/homeworks">
				<AssignmentsPage assignments={Homeworks} activeTab="Homeworks"/>
			</Route>
			<Route path="/labs">
				<AssignmentsPage assignments={Labs} activeTab="Labs"/>
			</Route>
			<Route path="/projects">
				<AssignmentsPage assignments={Projects} activeTab="Projects"/>
			</Route>
			<Route path="/lectures">
				<NotesPage notes={Lectures} activeTab="Lectures"/>
			</Route>
			<Route path="/workshops">
				<NotesPage notes={Workshops} activeTab="Workshops"/>
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
