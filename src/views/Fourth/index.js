import React from 'react';
import { connect } from 'react-redux';
import picking from 'lib/picking';
import './fourth.scss';
import cake from './cake.svg';

class Fourth extends React.Component {

  render() {
    return (
      <div className="page fourth">
        <div className="icon">
          <img src={cake} />
        </div>
        <div className="text-lines">
          <div className="give-you-flower">系喎￼￼，我冇忘記</div>
          <div className="put-in-your-heart">生日蠟燭同蛋糕</div>
        </div>
      </div>
    );
  }
}

export default connect(picking('phase'))(Fourth);
