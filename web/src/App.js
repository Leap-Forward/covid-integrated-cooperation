import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';

import NeedVisualizer from './screens/NeedVisualizer';
import Initiatives from './screens/Initiatives';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/initiatives/:id">
          <Initiatives />
        </Route>
        <Route exact path="/">
          <NeedVisualizer />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
