import './index';
import {renderComponent} from '../../test-helper';

describe('Debugger Display Template', function () {
  let DebuggerControl;
  beforeEach(function () {
    DebuggerControl = renderComponent(window.NamespacedDebugTemplateRenderer, 'Test');
  });
  it('return a HTML string when called', function () {
    expect(DebuggerControl).to.not.be.empty;
  });
  it('contains the input value', function () {
    expect(DebuggerControl).to.contain('Test');
  });
  it('has appropriate css class', function () {
    expect(DebuggerControl).to.have.class('debugger-template-item');
  });
});