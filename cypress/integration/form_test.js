//Checking Name input 
describe('Name Input', function(){
    it('checks if the name input exists', function(){
        cy.visit('localhost:3000')
        cy.get('input[name="user"]').type('Homer');
        cy.get('input[name="user"]').should('have.value','Homer');
    })
})


