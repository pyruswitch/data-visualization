import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { isIE } from "utils";
import Support from 'routes/support';
import StyleA from 'routes/style-a';
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
          <Helmet>
            <title>左邻 - 数据驾驶舱系统</title>
          </Helmet>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/sa" component={StyleA} />
          </Switch>
        </div>
      </Router>
    );
};

render(<App />, document.getElementById('root'));
