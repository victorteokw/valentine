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
          <div className="give-you-flower">送给你小花花</div>
          <div className="put-in-your-heart">把它放在心里面哟</div>
        </div>
      </div>
    );
  }
}

export default connect(picking('phase'))(Fourth);
