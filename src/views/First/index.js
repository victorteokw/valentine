import React from 'react';
import { connect } from 'react-redux';
import picking from 'lib/picking';
import './first.scss';
import heart from './heart.svg';

class First extends React.Component {

  render() {
    return (
      <div className="page first">
        <div className="icon">
          <img src={heart} />
        </div>
        <div className="text-lines">
          <div className="todayis">今天是情人节</div>
          <div className="ourday">我们俩的节日</div>
        </div>
      </div>
    );
  }
}

export default connect(picking('phase'))(First);
