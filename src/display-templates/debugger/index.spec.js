/* eslint-disable */
import './index';

describe('DebuggerTemplateInitFile', function () {
  const ctx = {
    ListData: {
      ResultTables: [
        {
          ResultRows: [
            {
              TestString: 'Test',
              TestNumber: 12,
              TestObject: { Test: 'Test' }
            }
          ]
        }
      ]
    }
  };

  const somewhatCheckHTML = (html) => {
    var openingTags, closingTags;

    html = html.replace(/<[^>]*\/\s?>/g, '');      // Remove all self closing tags
    html = html.replace(/<(br|hr|img).*?>/g, '');  // Remove all <br>, <hr>, and <img> tags
    openingTags = html.match(/<[^\/].*?>/g) || [];        // Get remaining opening tags
    closingTags = html.match(/<\/.+?>/g) || [];           // Get remaining closing tags

    return openingTags.length === closingTags.length ? true : false;
  }

  it('adds the entry function NamespacedDebugTemplateRenderer to window', function () {
    expect(window.NamespacedDebugTemplateRenderer).to.exist;
    expect(typeof (window.NamespacedDebugTemplateRenderer)).to.equal('function');
  });

  it('has entry function which returns valid HTML', function () {
    const html = window.NamespacedDebugTemplateRenderer(ctx);
    expect(html).to.be.a('string');
    expect(somewhatCheckHTML(html)).to.be.ok;
  });
});