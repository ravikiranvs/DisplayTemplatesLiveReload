import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return (
        <div className="app-main">
            Hello World!
        </div>
    );
  }
}

window.Debug = <App />;