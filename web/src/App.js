import React from 'react';
import { Route, NavLink, Switch, HashRouter } from 'react-router-dom';

import NeedVisualizer from './screens/NeedVisualizer';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/initiatives/:id" />
        <Route exact path="/">
          <NeedVisualizer />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
