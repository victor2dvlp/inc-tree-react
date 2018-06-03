import React, { Component } from 'react';
import classes from './App.css';

import TreeObject from './TreeComponent/TreeObject/TreeObject';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
          <span className="Block">
              <TreeObject/>
          </span>
          <span className="Block">
                Second block
          </span >
      </div>
    );
  }
}

export default App;
