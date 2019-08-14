import React from 'react';
import { connect } from 'react-redux';
import picking from 'lib/picking';
import './global.scss';
import { nextPhase } from 'actions/phase';
import First from '../First';
import Second from '../Second';
import Third from '../Third';
import Fourth from '../Fourth';

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(nextPhase({ name: 'first' }));
    setTimeout(() => {
      this.props.dispatch(nextPhase({ name: 'second' }));
    }, 8800);
  }

  render() {
    return <div className="app">
      {this.renderBody()}
    </div>;
  }

  renderBody() {
    if (this.props.phase.current === 'first') {
      return <First />;
    } else if (this.props.phase.current === 'second') {
      return <Second />;
    } else if (this.props.phase.current === 'third') {
      return <Third />;
    } else if (this.props.phase.current === 'fourth') {
      return <Fourth />;
    }
    return (
      <div>
        Phase '{this.props.phase.current}' not implemented.
      </div>
    );
  }
}

export default connect(picking('phase'))(App);
