import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { isIE } from "utils";
import Home from 'routes/home';
import NotFound from 'routes/404';
import Login from 'routes/login';
import Support from 'routes/support';
import themes from 'themes';

// 根据域名匹配主题
if (themes[window.location.host])
  themes[window.location.host];
else
  themes['default'];

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
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
};

render(<App />, document.getElementById('root'));
