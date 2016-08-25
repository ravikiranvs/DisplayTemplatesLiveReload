import DebuggerTemplate from './template.js';

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