import React from 'react';
import { connect } from 'react-redux';
import picking from 'lib/picking';
import './third.scss';
import { nextPhase } from 'actions/phase';
import classNames from 'classnames';

class Third extends React.Component {

  componentDidMount() {
    this.title = "宝宝，";
    this.body = "没有你的过去，孤单而消沉。有了你的陪伴，每天温馨而短暂。我一直坚定着自己的目标，不断地努力工作，去想去的城市。同样的努力，有了回响。牵起的手，两个人的步伐，和越来越相近的眼光，要一起去看最美的风景。";
    this.love = "爱你的";
    this.name = "宝宝";
    this.current = 0;
    this.speed = 290;
    this.currentPart = 'title';
    this.partOrder = ['title', 'body', 'love', 'name'];
    const write = () => {
      if (this.current <= this[this.currentPart].length) {
        if (["，", "。"].includes(this[this.currentPart][this.current] )) {
          this.setState({
            ['written' + this.currentPart]:
              this[this.currentPart].slice(0, this.current + 1)
          });
          this.current += 2;
        } else {
          this.setState({
            ['written' + this.currentPart]:
              this[this.currentPart].slice(0, this.current)
          });
          this.current++;
        }
        setTimeout(write, this.speed);
      } else {
        if (this.currentPart !== 'name') {
          this.currentPart =
            this.partOrder[this.partOrder.indexOf(this.currentPart) + 1];
          this.current = 0;
          setTimeout(write, this.speed);
        } else {
          setTimeout(() => {
            this.setState({ fadeout: true });
            setTimeout(() => {
              this.props.dispatch(nextPhase({ name: 'fourth' }));
            }, 2000);
          }, 2000);
        }
      }
    };
    write();
  }

  render() {
    return (
      <div className={classNames(
        "third",
        "page",
        { fadeout: this.state && this.state.fadeout })}>
        <div className="title">
          {this.state && this.state.writtentitle}
        </div>
        <br />
        <div className="body">
          {this.state && this.state.writtenbody}
        </div>
        <br />
        <div className="love">
          {this.state && this.state.writtenlove}
        </div>
        <div className="name">
          {this.state && this.state.writtenname}
        </div>
      </div>
    );
  }
}

export default connect(picking('phase'))(Third);
