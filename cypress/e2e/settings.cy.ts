import { setLoginInfo, defaultMocks } from './helpers';

describe('Settings', () => {
  it('Settings stores', () => {
    ///
    setLoginInfo();
    defaultMocks();

    cy.visit('/');
    cy.wait('@Ping');
    cy.wait('@ShowConf');
    cy.get('li').contains('Online').should('be.visible');
    //cy.get('h1').contains('Welcome to the Freqtrade UI', { timeout: 5000 }).should('be.visible');
    // cy.wait('@Strategies');

    cy.get('[id=avatar-drop]').should('be.visible').parent().click();
    cy.get('.dropdown-menu > [href="/settings"]').click();
    cy.contains('FreqUI Settings');

    // cy.get('[id=settings-lock-layout]').should('be.visible');
    cy.get('select:first')
      .select('asTitle')
      .should(() => {
        const settings = JSON.parse(localStorage.getItem('ftUISettings') || '{}');
        expect(settings['openTradesInTitle']).to.eq('asTitle');
      });
  });
});
