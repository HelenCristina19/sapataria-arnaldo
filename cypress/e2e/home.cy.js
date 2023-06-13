describe('Testes na Home', () => {
  it('Abre o diretório', () => {

    cy.visit('/');
  })

  it('Abre a página Index', () => {


    cy.visit('/index.html');

})

})