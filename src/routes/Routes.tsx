import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

// Routes
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

// Pages/Components
import { Introduce } from '../pages/GeneralPage';
import { Home } from '../pages/HomePage';
import { Loading } from '../components';

import { InternalUrl } from '../constant/page-url';
import { Login } from '../pages/AuthenticationPage';
import NotFoundPage from '../pages/NotFoundPage';
import News from '../pages/News';

// Public Routes Data
const publicRoutes = [
	{
		path: '/',
		component: Login,
		fallback: Loading,
		exact: true,
	},
	{
		path: '/login',
		component: Login,
		fallback: Loading,
		exact: true,
	},
	{
		path: '/register',
		component: Introduce,
		fallback: Loading,
		exact: true,
	},
	{
		path: '/register_success',
		component: Introduce,
		fallback: Loading,
		exact: true,
	},
	{
		path: '/register_verify_email',
		component: Introduce,
		fallback: Loading,
		exact: true,
	},
	{
		path: '/oauth2/redirect',
		component: Introduce,
		fallback: Loading,
		exact: true,
	},
];

const privateRoutes = [
	{
		path: InternalUrl.notFoundPage,
		component: NotFoundPage,
		fallback: Loading,
		exact: true,
	},
	{
		path: InternalUrl.homePage,
		component: Home,
		fallback: Loading,
		exact: true,
	},
	{
		path: InternalUrl.news,
		component: News,
		fallback: Loading,
		exact: true,
	},
];

const Routes: React.FC = () => {
	return (
		<BrowserRouter>
			<Switch>
				{publicRoutes.map(
					(
						{ path, component: Component, fallback: Fallback = Loading, exact = true },
						key: number
					) => (
						<PublicRoute path={path} exact={exact} key={key}>
							<React.Suspense fallback={<Fallback />}>
								<Component />
							</React.Suspense>
						</PublicRoute>
					)
				)}
				{privateRoutes.map(
					(
						{ path, component: Component, fallback: Fallback = Loading, exact = true },
						key: number
					) => (
						<PrivateRoute path={path} exact={exact} key={key}>
							<React.Suspense fallback={<Fallback />}>
								<Component />
							</React.Suspense>
						</PrivateRoute>
					)
				)}
				<Route
					path={`*`}
					render={({ match }) => {
						const isMatch = Object.values(InternalUrl).includes(match.url as InternalUrl);

						if (!isMatch) {
							return (
								<Redirect
									to={{
										pathname: InternalUrl.notFoundPage,
									}}
								/>
							);
						}
					}}
				></Route>
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
