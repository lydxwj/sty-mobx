import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('num')
@observer
class Num extends React.Component {

  add = () => {
    this.props.num.addNum();
  }
  sub = () => {
    this.props.num.subNum();
  }

  render() {
    const num = this.props.num.num;
    return (
      <div>
        <p>{num}</p>
        <button onClick={this.add}>+</button>
        <button onClick={this.sub}>-</button>
      </div>
    );
  }

};
export default Num;