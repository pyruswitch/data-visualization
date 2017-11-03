import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { isIE } from "utils";
import Support from 'routes/support';
import Home from 'routes/home';

import 'styles/index.less';

const App = () => {
  if (isIE(10, 'lt'))
    return (
      <Router>
        <Route path="/" component={Support} />
      </Router>
    );
  else
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    );
};

render(<App />, document.getElementById('root'));
