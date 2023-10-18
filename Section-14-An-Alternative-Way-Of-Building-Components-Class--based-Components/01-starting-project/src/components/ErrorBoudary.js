import { Component } from "react";

class ErrorBoudary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  componentDidCatch(error) {
    console.log(error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <p>Somthing Went Wrong!</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoudary;
