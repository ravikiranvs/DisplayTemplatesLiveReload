import React, {PropTypes} from 'react';

class DebuggerItem extends React.Component {
  constructor() {
    super();
    this.state = { titleColor: '#000000' };

    this.onHover = this.onHover.bind(this);
    this.onHoverLeave = this.onHoverLeave.bind(this);
  }

  onHover() {
    this.setState({ titleColor: '#882200' });
  }

  onHoverLeave() {
    this.setState({ titleColor: '#222222' });
  }

  render() {
    const debuggerItemStyle = {
      border: 'solid 1px',
      color: this.state.titleColor,
      padding: '3px',
      margin: '3px',
      lineHeight: '200%'
    };

    const debuggerItemPropertyStyle = {
      display: 'inline',
      margin: '2px 2px 2px 2px',
      padding: '2px 2px 2px 2px',
      backgroundColor: '#AACCFF'
    };

    return (
      <div className='debugger-template-item' style={debuggerItemStyle} onMouseEnter={this.onHover} onMouseLeave={this.onHoverLeave}>
        {Object.keys(this.props.item).map((key) => {
          return <div style={debuggerItemPropertyStyle} key={key}>{key}: {JSON.stringify(this.props.item[key]) }</div>;
        }) }
      </div>
    );
  }
}

DebuggerItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default DebuggerItem;