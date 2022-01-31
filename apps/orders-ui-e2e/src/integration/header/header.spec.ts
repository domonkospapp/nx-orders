describe('orders-ui: Header component', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=header--primary&args=title:Header title')
  );

  it('should render the component', () => {
    cy.get('.MuiTypography-root ').should('contain', 'Header title');
  });
});
