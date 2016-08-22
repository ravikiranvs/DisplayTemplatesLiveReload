import DebuggerItem from './debugger-item';
import React, {PropTypes} from 'react';

class DebuggerTemplate extends React.Component {
  render () {
    return (
        <div className='debugger-template'>
          {this.props.items.map(function(item, index){
            return <DebuggerItem key={index} item={item} />
          })}
        </div>
    );
  }
}

DebuggerTemplate.propTypes = {
  items: PropTypes.array.isRequired
};

export default DebuggerTemplate