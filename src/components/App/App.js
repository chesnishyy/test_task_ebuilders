import React, { Component } from 'react';

import style from './App.scss';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        {this.props.children}
      </div>
    );
  }
}
