import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { useIntl } from 'react-intl';
import routes from '../routers';
import BasicLayout from '../layout/basic-layout';
import intlJection from '../utils/intl-jection';

const App = props => {
  return (
    <Router basename={props.basename}>
      {
        (function() {
          intlJection.formatMessage = useIntl().formatMessage;
          return null;
        })()
      }
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