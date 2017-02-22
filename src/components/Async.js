import React from 'react';

export default class Async extends React.Component {
  constructor(props) {
    super(props);

    this.Component = null;
    this.state = { Component: null };
  }

  async componentWillMount() {
    if (!this.state.Component) {
      const { default: Component } = await this.props.import();

      this.setState({ Component });
    }
  }

  render() {
    const { Component } = this.state;

    if (Component) {
      return <Component {...this.props} />;
    }

    return null;
  }
}
