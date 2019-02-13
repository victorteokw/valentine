import React from 'react';
import { connect } from 'react-redux';
import picking from 'lib/picking';
import './global.scss';
import { nextPhase } from 'actions/phase';
import First from '../First';

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(nextPhase({ name: 'first' }));
    setTimeout(() => {
      this.props.dispatch(nextPhase({ name: 'second' }));
      setTimeout(() => {
        this.props.dispatch(nextPhase({ name: 'third' }));

      }, 3000);
    }, 6600);
  }

  render() {
    if (this.props.phase.current === 'first') {
      return <First />
    }
    return (
      <div>
        Phase '{this.props.phase.current}' not implemented.
      </div>
    );
  }
}

export default connect(picking('phase'))(App);
