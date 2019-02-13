import React from 'react';
import { connect } from 'react-redux';
import picking from 'lib/picking';
import './second.scss';
import envelope from './envelope.svg';

class Second extends React.Component {

  render() {
    return (
      <div className="page second">
        <div className="text-lines">
          <div className="today">然而今年今天</div>
          <div className="weareapart">我们天各一方</div>
          <div className="cannot">不能陪在你身边</div>
          <div className="soi">所以</div>
          <div className="please">我准备了一份特别的心意</div>
        </div>
        <div className="icon">
          <img src={envelope} />
          <div className="prompt">
            请打开它
            <br />
             ⃪
          </div>
        </div>
      </div>
    );
  }
}

export default connect(picking('phase'))(Second);
