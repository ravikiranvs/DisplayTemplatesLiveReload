import DebuggerTemplate from './debugger-template';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {render} from 'react-dom';

window.NamespacedDebugTemplateRenderer = function (ctx) {
  AddPostRenderCallback(ctx, function () {
    render(<DebuggerTemplate items={ctx.ListData.ResultTables[0].ResultRows} />, document.getElementById(ctx.ClientControl._element.id));
  });
  const htmlAsString = ReactDOMServer.renderToString(<DebuggerTemplate items={ctx.ListData.ResultTables[0].ResultRows} />);
  return htmlAsString;
}