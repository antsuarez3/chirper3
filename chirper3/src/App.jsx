import React, { Component } from 'react';
import Names from './Names.jsx'
import Input from './Input.jsx'

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Chirper</h1>
          <Input user={this.props.author} />
          <Names />
        </header>
      </div>
    );
  }

}


export default App;
