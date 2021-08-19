//Checking Name input 
describe('Name Input', function(){
    it('checks if the name input exists', function(){
        cy.visit('localhost:3000')
          .get('input[name="user"]')
          .type('Homer')
          .should('have.value','Homer');
    })
})

//Checking Email Input
describe('Email Input', function(){
    it('checks if the email input exists', function(){
        cy.visit('localhost:3000')
          .get('input[name="email"]')
          .type('youhavemail@aol.com')
          .should('have.value', 'youhavemail@aol.com');
    })
})

//Checking Password Input
describe('Password Input', function(){
    it('checks if the password input exists', function(){
        cy.visit('localhost:3000')
          .get('input[name="password"]')
          .type('hellocappucino')
          .should('have.value','hellocappucino');
    })
})

//Checking Legal Agreement Box
describe('Legal Checkbox', function(){
    it('checks if the legal agreement checkbox can be checked', function(){
        cy.visit('localhost:3000')
          .get('[type="checkbox"]')
          .check();
    })
})

//Checking if form may be submitted
describe('Submit Form', function(){
    it('checks if form may be submitted', function(){
        cy.visit('localhost:3000')
          .get('form')
          .submit();
    })
})

//Checking for form validation errors when input is left empty
describe('Form Validation', function(){
    it('checks if form validation error displays when input is left blank', function(){
        cy.visit('localhost:3000')
          .get('input[name="password"]')
          .type('hello')
          .invoke('prop', 'validationMessage')
          .should('equal', 'password must be at least 10 chars')
    })
})