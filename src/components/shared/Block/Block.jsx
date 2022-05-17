import React from "react";
import "./Block.scss";

class Block extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { className, children } = this.props;
    const {} = this.state;

    return <div className={`Block ${className}`}>{children}</div>;
  }
}

export default Block;
