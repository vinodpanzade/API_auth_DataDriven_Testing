
const authHeader=()=>({
    Authorization:`Bearer ${Cypress.env('token')}`,
    'Content-Type':'application/json'
})

export const createStudent=(data)=>{
   return cy.request({
    method:'POST',
    url:'http://localhost:3000/students',
      header:authHeader(),
    body:data
   })
}
export const getStudents=()=>{
    return cy.request({
        method:'GET',
        url:'http://localhost:3000/students',
          header:authHeader(),
       
    })
}

export const getUpdatewithPUT=(id,data)=>{
    return cy.request({
        method:'PUT',
        url:`http://localhost:3000/students/${id}`,
          header:authHeader(),
        body:data
    })
}
 export const getUpdatewithPatch=(id,data)=>{
    return cy.request({
         method:'PATCH',
         url:`http://localhost:3000/students/${id}`,
        header:authHeader(),
         body:data

    })
 }

 export const Deletestudent=(id)=>{
    return cy.request({
        method:'delete',
        url:`http://localhost:3000/students/${id}`,
        header:authHeader()
    })
 }

 export const getDeletestudent=(id)=>{
    return cy.request({
        method:'DELETE',
        url:`http://localhost:3000/students/${id}`,
        header:authHeader(),
        failOnStatusCode: false

    })
 }