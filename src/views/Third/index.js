import React from 'react';
import { connect } from 'react-redux';
import picking from 'lib/picking';
import './third.scss';
import { nextPhase } from 'actions/phase';
import classNames from 'classnames';

class Third extends React.Component {

  componentDidMount() {
    this.title = "萱萱，";
    this.body = "你要每天开心和快乐，不许有任何人惹你难过。这样才会一直漂亮而年轻。做你热爱的事情，去你向往的地方。我一直坚定着自己的目标，在远方不断地努力。也许同样的努力，在某天会有了回响。岁月静好，光阴荏苒。要让日子短暂而温馨，要去看人生里面最美的风景。";
    this.love = "来自😈可恶的小叔叔";
    this.name = "开宇";
    this.current = 0;
    this.speed = 290;
    this.currentPart = 'title';
    this.partOrder = ['title', 'body', 'love', 'name'];
    const write = () => {
      if (this.current <= this[this.currentPart].length) {
        if (["，", "。", String.fromCharCode(56840)].includes(this[this.currentPart][this.current] )) {
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
            }, 6000);
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
