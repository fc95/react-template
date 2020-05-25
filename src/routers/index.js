import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about';
import TodoList from '../pages/todo-list';
import BasicLayout from '../layout/basic-layout'
// const Home = lazy(() => import(/* webpackChunkName: 'pages-home' */'./pages/home'));
// const About = lazy(() => import(/* webpackChunkName: 'pages-about' */'./pages/about'));

const routes = [
  {
    title: 'Home',
    path: '/',
    component: Home,
    exact: true,
    layout: true,
    back: false,
  },
  {
    title: 'About',
    path: '/about',
    component: About,
    layout: true,
    back: true,
  },
  {
    title: 'TodoList',
    path: '/todo-list',
    component: TodoList,
    layout: false,
  }
];

const App = props => {
  return (
    <Router basename={props.basename}>
      <BasicLayout routes={routes}>
        <Switch>
          {
            routes.map((route, i) => {
              return (
                <Route
                  key={i}
                  {...route}
                />
              )
            })
          }
          {/* <Route component={Home}
            exact
            path="/"
          />
          <Route
            component={TodoList}
            path="/todo-list"
          /> */}
        </Switch>
      </BasicLayout>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      {/* </Suspense> */}
    </Router>
  );
}

export default App;