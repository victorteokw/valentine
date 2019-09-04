import React from 'react';
import { connect } from 'react-redux';
import picking from 'lib/picking';
import './second.scss';
import envelope from './envelope.svg';
import { nextPhase } from 'actions/phase';
import classNames from 'classnames';

class Second extends React.Component {

  componentDidMount() {
    setTimeout(() => {
      this.setState({ canOpen: true });
    }, 11200);
  }

  openEvelope() {
    if (!(this.state && this.state.open)) {
      if (this.state && this.state.canOpen) {
        this.setState({ open: true });
        setTimeout(() => {
          this.props.dispatch(nextPhase({ name: 'third' }));
        }, 1200);
      }
    }
  }

  render() {
    return (
      <div className={
        classNames("page", "second", { open: this.state && this.state.open })
      }>
        <div className="text-lines">
          <div className="today">Thanks for chatting with me sweetly.</div>
          <div className="weareapart">And giving me force and courage to struggle.</div>
          <div className="cannot">You're like a guardian angel at the darkest night.</div>
          <div className="soi">And you are charming at least to me.</div>
          <div className="please">I've written a letter to you.</div>
        </div>
        <div className="icon">
          <img src={envelope} className={
            classNames({ open: this.state && this.state.open })
          } onClick={this.openEvelope.bind(this)} />
          <div className="prompt">
            ← Please open it.
          </div>
        </div>
      </div>
    );
  }
}

export default connect(picking('phase'))(Second);
