import DebuggerTemplate from './debugger-template';
import {renderComponent} from '../../test-helper';
import React from 'react';

describe('Debugger Display Template', function () {
  let DebuggerComponent = null;

  const props = {
    items: [
      {
        String: 'Test1',
        Object: {Something: 'AAA'},
        Number: 1,
        Float: -10.00

      }, {
        Title: 'Test2'
      }
    ]
  };

  let DebuggerControl;

  beforeEach(function () {
    DebuggerComponent = renderComponent(DebuggerTemplate, props);
  });

  it('contains the input value', function () {
    expect(DebuggerComponent).to.contain('Test1');
    expect(DebuggerComponent).to.contain('Test2');
  });

  it('has appropriate css class', function () {
    expect(DebuggerComponent).to.have.class('debugger-template');
  });

  it('changes color on hover', function () {
    expect(DebuggerComponent.find('div.debugger-template-item')).to.have.css('color', 'rgb(0, 0, 0)');
    DebuggerComponent.find('div.debugger-template-item').simulate('mouseEnter', null);
    expect(DebuggerComponent.find('div.debugger-template-item')).to.have.css('color', 'rgb(136, 34, 0)');
  });
});