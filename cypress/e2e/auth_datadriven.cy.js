import {Register,Login} from '../API2/auth_datadriven.api'
describe('importing auth function for data driven',()=>{


    it('Register',()=>{
        cy.fixture('User').then((students)=>{
            students.forEach((student)=>{
                Register('post','http://localhost:3000/students',student).its('status').should('eq',201)
            })
        })

    })

    it('Login',()=>{
        cy.fixture('User').then((students)=>{

            students.forEach((student)=>{
                Login('post','http://localhost:3000/students',student).its('status').should('eq',201)
            })
       
        })
    })
})