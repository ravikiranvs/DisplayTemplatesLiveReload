import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import chaiJQuery from 'chai-jquery';
import jQuery from 'jquery';

chaiJQuery(chai, chai.util, jQuery);

const renderComponent = function renderComponent (Component,
  props = {}) {
    const componentInstance = TestUtils.renderIntoDocument(
        <Component {...props} />
    );

    return jQuery(ReactDOM.findDOMNode(componentInstance));
};

jQuery.fn.simulate = function simulate (eventName, eventData) {
    const firstElementIndex = 0;
    TestUtils.Simulate[eventName](this[firstElementIndex], eventData);
};

export {renderComponent};