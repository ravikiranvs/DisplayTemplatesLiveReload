import './index';

describe('Debugger Display Template', function () {
  it('return a HTML string when called', function () {
    const htmlResult = window.NamespacedDebugTemplateRenderer('Test');
    console.log(htmlResult);
    expect(htmlResult).to.not.be.empty;
  });
});