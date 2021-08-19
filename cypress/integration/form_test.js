//Checking Name input 
describe('Name Input', function(){
    it('checks if the name input exists', function(){
        cy.visit('localhost:3000');
        cy.get('input[name="user"]').type('Homer').should('have.value','Homer');
    })
})

//Checking Email Input
describe('Email Input', function(){
    it('checks if the email input exists', function(){
        cy.visit('localhost:3000');
        cy.get('input[name="email"]').type('youhavemail@aol.com').should('have.value', 'youhavemail@aol.com');
    })
})

//Checking Password Input
describe('Password Input', function(){
    it('checks if the password input exists', function(){
        cy.visit('localhost:3000');
        cy.get('input[name="password"]').type('hellocappucino').should('have.value','hellocappucino');
    })
})

//Checking Legal Agreement Box
describe('Legal Checkbox', function(){
    it('checks if the legal agreement checkbox can be checked', function(){
        cy.visit('localhost:3000');
        cy.get('[type="checkbox"]').check();
    })
})
