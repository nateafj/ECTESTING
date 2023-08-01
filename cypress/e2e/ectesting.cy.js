
beforeEach(function () {
  cy.visit('https://mangamode.onrender.com')
})
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://mangamode.onrender.com')
    
    
  })
  it('navcheck', ()=>{
    cy.get('#MenuItems').children().should("have.length",3)
  })
  it('check imgs for alt',()=>{
    cy.get('img').each(($img) => {
      cy.wrap($img).should('have.attr', 'alt');
    });
  })
})
