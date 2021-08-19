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

//A function that fills out the form
const userInput = () => cy.get('input[name="user"]');
const emailInput = () => cy.get('input[name="email"]');
const passwordInput = () => cy.get('input[name="password"]');
const courseInput = () => cy.get('select[name="course"]');
const levelInput = () => cy.get('[type="radio"]');
const checkboxInput = () => cy.get('[type="checkbox"]');

const formFiller = () =>{
      userInput().type('Steven')
      emailInput().type('coffeebro@yahoo.com')
      passwordInput().type('a_pass_word')
      courseInput().select('Coffee Roasting')
      levelInput().first().check()
      checkboxInput().check()
}

//Checking if form may be submitted
describe('Submit Form', function(){
    it('checks if form may be submitted', function(){
        cy.visit('localhost:3000')
          formFiller()
        cy.get('form').submit();
    })
})

//Checking for form validation errors when input is left empty
describe('Form Validation', function(){
    it('checks if submit button is initially disabled', function(){
       cy.visit('localhost:3000')
         .get('button[type="submit"]')
         .should('have.disabled')
    })
    it('checks if submit button is enabled when form is properly filled', function(){
        cy.visit('localhost:3000')
        formFiller()
        cy.get('button[type="submit"]')
          .should('not.have.disabled')
    })
})