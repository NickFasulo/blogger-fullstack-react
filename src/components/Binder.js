import React, { Component } from 'react';

class Binder extends Component {
  constructor() {
    super();
    this.state = {
      text: 'hello state',
      somethingText: '',
    };
  }

  // defining a function like this binds it to the class with fat arrow:
  onClickMe = () => console.log(this);

  handleSomething = (text) => {
    this.setState({
      somethingText:'Clicked on handle something'
    })
  };

  render() {
    return (
      <>
      <h1>{this.state.somethingText}</h1>
        <button
          className="ui primary button"
          style={{ margin: '10px 15px' }}
          onClick={this.onClickMe}
        >
          Click Me
        </button>
        <button
          className="ui primary button"
          style={{ margin: '10px 15px' }}
          onClick={() => this.handleSomething(this.state.somethingText)}
        >
          Do Something
        </button>
      </>
    );
  }
}

export default Binder;
