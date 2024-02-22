import { mount } from 'cypress/vue'

/* eslint-disable @typescript-eslint/no-namespace */
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount,
    }
  }
}

Cypress.Commands.add('mount', (component, options = {}) => {
  return mount(component, options).as('vue');
});
