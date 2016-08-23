import DebuggerHbTemplate from './template.html';
import TemplateBuilder from '../template-builder.js';

/**
 * Template for the PersentageColumn
 * 
 * @class PresentColTemplate
 * @extends {TemplateBuilder}
 */
class DebuggerTemplate extends TemplateBuilder {
  /**
   * Creates an instance of PresentColTemplate.
   * 
   * @param {any} context Template events will be attached here
   */
  constructor(context) {
    super(DebuggerHbTemplate, context);
  }

  /**
   * Gets all the template events enclosed in a namespace.
   * Refer handlebar template file
   * 
   * @returns {any} Namespaced template events
   */
  getNamespacedTemplateEvents() {
    const DebuggerFunctions = {
      onHover: (target) => {
        target.style.color = '#0022FF';
      },
      onHoverExit: (target) => {
        target.style.color = '#222222';
      }
    };

    return {DebuggerFunctions};
  }
}

export default DebuggerTemplate;