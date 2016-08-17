import React, {PropTypes} from 'react';

class Debug extends React.Component {
  render () {
    return (
        <div>
            {this.props.value}
        </div>
    );
  }
}

Debug.propTypes = {
  value: PropTypes.string.isRequired
};

export default Debug;