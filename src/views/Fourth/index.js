import React from 'react';
import { connect } from 'react-redux';
import picking from 'lib/picking';
import './fourth.scss';
import rose from './rose.svg';

class Fourth extends React.Component {

  render() {
    return (
      <div className="page fourth">
        <div className="icon">
          <img src={rose} />
        </div>
        <div className="text-lines">
          <div className="forever">要永远在一起</div>
        </div>
      </div>
    );
  }
}

export default connect(picking('phase'))(Fourth);
