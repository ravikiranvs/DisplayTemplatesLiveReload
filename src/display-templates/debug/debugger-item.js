import React, {PropTypes} from 'react';

class DebuggerItem extends React.Component {
  constructor () {
    super();
    this.state = {titleColor: '#000000'};

    this.onHover = this.onHover.bind(this);
    this.onHoverLeave = this.onHoverLeave.bind(this);
  }

  onHover() {
    this.setState({titleColor: '#0000FF'});
  }

  onHoverLeave() {
    this.setState({titleColor: '#000000'});
  }

  render () {
    return (
        <div className='debugger-template-item' style={{color: this.state.titleColor}} onMouseEnter={this.onHover} onMouseLeave={this.onHoverLeave}>
            {this.props.item.Title}
        </div>
    );
  }
}

DebuggerItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default DebuggerItem;