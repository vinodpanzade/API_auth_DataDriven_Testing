export const Register=(data)=>{

    return cy.request('POST','http://localhost:3000/students',data)

}

export const Login =(data)=>{
    return cy.request('POST','http://localhost:3000/students',data).then((res)=>{
        Cypress.env('token',res.body.accessToken)
    })
}
