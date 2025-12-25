import {Register,login} from '../API2/auth.api'
describe('Register and login the user',()=>{

    it('register',()=>{
     Register({
        email:'vinodbhai12@gmail.com',
        password:'VGp12@'
     }).its('status').should('eq',201)
    })

    it('Login',()=>{
          login({
            email:'vinodbhai12@gmail.com',
            password:'VGp12@'
          }).its('status').should('eq',200)
    })
    
})