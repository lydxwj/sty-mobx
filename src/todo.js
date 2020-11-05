import React from 'react';
import { inject, observer } from 'mobx-react';
import './todo.css'
@inject('todo')
@observer
class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iptVal: ''
    }
  }

  add = () => {
    const val = this.state.iptVal;
    if (!val) return;
    this.props.todo.addItem({
      val,
      complete: false
    });
    this.setState({ 
      iptVal: ''
    });
  }
  sub = (idx) => {
    this.props.todo.delete(idx);
  }
  toggle = (idx) => {
    this.props.todo.toggle(idx);
  }
  change = (e) => {
    this.setState({ 
      iptVal: e.target.value
    });
  }
  componentDidMount() {
    this.props.todo.getList();
  }

  render() {
    const { list } = this.props.todo;
    if (this.props.todo.loading) {
      return (
        <div>loading...</div>
      )
    }
    return (
      <div>
        <input onInput={this.change} value={this.state.iptVal} type="text"/>
        <button onClick={this.add}>添加</button>
        {
          list.map((item, idx) => {
            return (
              <div key={idx}>
                <span className={item.complete ? 'complete' : ''}>{item.val}</span>
                <button onClick={this.toggle.bind(this, idx)}>{item.complete ? '取消' : '完成' }</button>
                <button onClick={this.sub.bind(this, idx)}>删除</button>
              </div>
            );
          })
        }
        <div>合计：{this.props.todo.getLength}</div>
      </div>
    );
  }

};
export default Todo;