import Report from '../pages/report';
import TodoList from '../pages/todo';
// const Home = lazy(() => import(/* webpackChunkName: 'pages-home' */'./pages/home'));

const routes = [
  {
    title: 'Report',
    path: '/',
    component: Report,
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
