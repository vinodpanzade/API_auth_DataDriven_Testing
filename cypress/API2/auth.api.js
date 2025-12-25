//function for the register 
// export const Register=(data)=>{
//     return cy.request('POST','http://localhost:3000/register',data)
// }

// // function for the login
// export const login=(data)=>{

//     return cy.request('POST','http://localhost:3000/login',data).then((response)=>{
//         Cypress.env('token',response.body.accessToken)
//     })

// }

// function for the resgiter
export const Register = ((data)=>{
return  cy.request('POST','http://localhost:3000/register',data)
})

// function for the login
export const login=((data)=>{
    return cy.request('Post','http://localhost:3000/register',data).then((res)=>{
        Cypress.env('token',res.body.accessToken)
    })
})




