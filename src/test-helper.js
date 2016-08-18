import chaiJQuery from 'chai-jquery';
import jQuery from 'jquery';

chaiJQuery(chai, chai.util, jQuery);

const renderComponent = function renderComponent (ComponentToString,
  props = {}) {
    const componentHTML = ComponentToString(props);
    const componentJQueryHtml = jQuery(jQuery.parseHTML(componentHTML));
    jQuery(document).find('body').append(componentJQueryHtml);

    return componentJQueryHtml;
};

export {renderComponent};