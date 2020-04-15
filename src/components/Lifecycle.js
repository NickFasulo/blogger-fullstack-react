import React, { Component } from 'react';

class Lifecycle extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
      toggle: true,
    };
  }

  handleClick = event => {
    event.preventDefault();

    const newList = [...this.state.list];
    newList.push({ name: 'new name' });
    this.setState({ list: newList });
  };

  handleToggle = event => {
    event.preventDefault();

    this.setState({ toggle: !this.state.toggle });
  };

  componentDidMount() {
    console.log(`component did mount`);

    setTimeout(() => {
      this.setState({ list });
    }, 2000);

    let list = [{ name: 'JD' }];
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`component did update has been called`);

    if (prevState.toggle !== this.state.toggle) {
      console.log(`make database call`);

      const newList = [...this.state.list];
      newList.push({ name: 'update name' });
      this.setState({ list: newList });
    }
  }

  render() {
    console.log(`rendered`);

    return (
      <div>
        {this.state.list.length !== 0 ? (
          <div>
            <h1>Lifecycle</h1>
            <ul>
              {this.state.list.map((item, idx) => {
                return <li key={idx}>{item.name}</li>;
              })}
            </ul>
            <button onClick={this.handleClick}>Name</button>
            <button onClick={this.handleToggle}>Toggle</button>
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    );
  }
}

export default Lifecycle;
