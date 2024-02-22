// Components
import BaseButton from '@src/components/base/base-button.vue';

describe('<BaseButton />', () => {
  it('@click is not emitted if loading prop is true', () => {
    cy.mount(BaseButton, {
      props: {
        loading: true,
      },
      slots: {
        default: 'Default text',
      },
    });

    cy
      .get('[data-cy="base-button"]')
      .click();

    cy
      .get('@vue')
      .should(({ wrapper }) => {
        expect(wrapper.emitted('click')).to.be.undefined;
      });
  });
});
