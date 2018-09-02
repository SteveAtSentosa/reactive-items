import React from 'react';
import { hot } from 'react-hot-loader';
import { ItemView } from 'reactive-items-components';

const App = () =>(
  <div>
    Hello Hot
    <ItemView />
  </div>
);
export default hot(module)(App);
