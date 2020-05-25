import Home from '../pages/home';
import TodoList from '../pages/todo-list';
// const Home = lazy(() => import(/* webpackChunkName: 'pages-home' */'./pages/home'));

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
    title: 'TodoList',
    path: '/todo-list',
    component: TodoList,
    layout: false,
  }
];

export default routes;
