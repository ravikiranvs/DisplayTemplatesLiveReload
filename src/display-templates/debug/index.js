import Debug from './debug-list';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

window.NamespacedDebugTemplateRenderer = function (value) {
  debugger;
  const htmlAsString = ReactDOMServer.renderToString(<Debug value={value} />);
  return htmlAsString;
}