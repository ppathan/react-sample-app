import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './App';
import Dashboard from './components/Dashboard/Dashboard.js';
import Wrapper from './components/Layout/Wrapper/Wrapper.js';

import registerServiceWorker from './registerServiceWorker';

import './index.css';

const app = document.getElementById('root');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Wrapper}>
			<IndexRoute component={App}></IndexRoute>
			<Route path="/dashboard" component={Dashboard}></Route>
		</Route>
	</Router>,
app);

registerServiceWorker();
