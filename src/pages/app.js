import React, { useState, useEffect } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  // Link
} from 'react-router-dom';
import routes from '../routers';
import BasicLayout from '../layout/basic-layout';
import Loading from '../components/loading';

const App = props => {
  const [inited, setInited] = useState(false);

  useEffect(() => {
    window.ZC.init(data => {
      console.log(data);
      setInited(true);
    });
  }, []);

  if (!inited) return <Loading />;
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