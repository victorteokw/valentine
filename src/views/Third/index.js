import React from 'react';
import { connect } from 'react-redux';
import picking from 'lib/picking';
import './third.scss';
import { nextPhase } from 'actions/phase';
import classNames from 'classnames';

class Third extends React.Component {

  componentDidMount() {
    this.title = "有啲機智嘅何小姐，";
    this.body = "時間系個旅程，我哋嘅生命都系唔同嘅旅程。交匯分離，由出生始，到嗰頭止。形形色色啲人，構成咗繽紛嘅風景。你好落力追求你嘅目標。我都喺远方不断努力，不斷實踐。或許有一日，我哋兩條線會相遇，交織成好靚嘅雙螺旋線，話唔掂呢？短暫嘅旅程入邊，你永遠十八歲。喺呢嗰moment，有一個對你有好感嘅男仔，要同你講聲：“生辰快樂，何小姐❤️”。";
    this.love = "在遙遠的上海的";
    this.name = "开宇";
    this.current = 0;
    this.speed = 290;
    this.currentPart = 'title';
    this.partOrder = ['title', 'body', 'love', 'name'];
    const write = () => {
      if (this.current <= this[this.currentPart].length) {
        if (["，", "。", "❤"].includes(this[this.currentPart][this.current])) {
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
