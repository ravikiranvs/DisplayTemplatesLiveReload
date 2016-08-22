import DebuggerTemplate from './debugger-template';
import React from 'react';
import {render} from 'react-dom';

window.NamespacedDebugTemplateRenderer = function (ctx) {
  AddPostRenderCallback(ctx, function () {
    render(<DebuggerTemplate items={ctx.ListData.ResultTables[0].ResultRows} />, document.getElementById(ctx.ClientControl._element.id));
  });
}