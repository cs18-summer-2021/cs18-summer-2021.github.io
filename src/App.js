import React from 'react';

import './Main.scss';

import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';

import {
	CSSTransition,
	TransitionGroup
} from 'react-transition-group';

import HomePage from './Pages/HomePage/HomePage';
import StaffPage from './Pages/StaffPage/StaffPage';
import ResourcesPage from './Pages/ResourcesPage/ResourcesPage';

import AssignmentsPage from './Pages/AssignmentsPage/AssignmentsPage';
import Homeworks from './Info/Assignments/Homeworks/Homeworks';
import Projects from './Info/Assignments/Projects/Projects';
import Labs from './Info/Assignments/Labs/Labs';

import NotesPage from './Pages/NotesPage/NotesPage';
import Classes from './Info/Notes/Classes/Classes';
import Workshops from './Info/Notes/Workshops/Workshops';

function App() {
	return (
		<Router>
			<Route render={({location}) => (
				<TransitionGroup>
					<CSSTransition key={location.key} timeout={300} classNames="fade">
						<Switch location={location}>
							<Route path="/homeworks"><AssignmentsPage assignments={Homeworks} activeTab="Homeworks"/></Route>
							<Route path="/labs"><AssignmentsPage assignments={Labs} activeTab="Labs"/></Route>
							<Route path="/projects"><AssignmentsPage assignments={Projects} activeTab="Projects"/></Route>
							<Route path="/classes"><NotesPage notes={Classes} activeTab="Classes"/></Route>
							<Route path="/workshops"><NotesPage notes={Workshops} activeTab="Workshops"/></Route>
							<Route path="/staff"><StaffPage/></Route>
							<Route path="/resources"><ResourcesPage/></Route>
							<Route path="/"><HomePage/></Route>
						</Switch>
					</CSSTransition>
				</TransitionGroup>
			)}/>
		</Router>
	);
}

export default App;
