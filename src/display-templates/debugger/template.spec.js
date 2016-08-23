/* eslint-disable */
import DebuggerTemplate from './template.js';
import renderTemplate from '../template-test-helper';

describe('PersentCol', function () {
  let DebuggerHtml;
  const data = {
    items: [
      {
        properties: [
          {
            key: 'Title',
            value: 'Test1'
          }
        ]
      },
      {
        properties: [
          {
            key: 'Title',
            value: 'Test2'
          }
        ]
      }
    ]
  }

  beforeEach(function () {
    DebuggerHtml = renderTemplate(DebuggerTemplate, data);
  });

  it('contains the input value', function () {
    expect(DebuggerHtml).to.contain('Test1');
    expect(DebuggerHtml).to.contain('Test2');
  });

  it('has appropriate css class', function () {
    expect(DebuggerHtml).to.have.class('debugger-template');
  });

  it('changes color on hover', function () {
    expect(DebuggerHtml.find('div.debugger-template-item')).to.have.css('color', 'rgb(34, 34, 34)');
    DebuggerHtml.find('div.debugger-template-item')[0].onmouseover();
    expect(DebuggerHtml.find('div.debugger-template-item')).to.have.css('color', 'rgb(136, 34, 0)');
  });
});