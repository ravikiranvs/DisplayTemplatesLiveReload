import DebuggerTemplate from './template.js';
import MDS from '../../MDS.js';

const DebuggerTemplateEntry = () => {
  window.NamespacedDebugTemplateRenderer = function (ctx) {
    var items = ctx.ListData.ResultTables[0].ResultRows.map((item) => {
      var properties = Object.keys(item).map((key) => {
        return { key, value: JSON.stringify(item[key]) }
      });
      return { properties };
    });

    const debuggerTemplate = new DebuggerTemplate(window);
    return debuggerTemplate.renderAsString({ items });
  }
};

MDS('/Style%20Library/scripts/debugging-display-template.bundle.js', DebuggerTemplateEntry);