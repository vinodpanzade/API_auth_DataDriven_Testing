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

// export const getStudent=()=>{
//     return cy.request({
//         method:'GET',
//         url:'http://localhost:3000/students',
//         header:authHeader()
//     })
// }

export const getStudent=()=>{
    return cy.request ({
        method:'GET',
        url:'http://localhost:3000/students'
    })
}

export const getUpdatePUT=(id,data)=>{
    return cy.request({
        method:'PUT',
        url:`http://localhost:3000/students/${id}`,
        header:authHeader(),
        body:data
    })
}

export const getUpdatePATCH=(id,data)=>{
    return cy.request({
        method:'PATCH',
        url:`http://localhost:3000/students/${id}`,
        header:authHeader(),
        body:data
    })
}

// export const deleteStudent=(id)=>{
//     return cy.request({
//         method:'DELETE',
//         url:`http://localhost:3000/students/${id}`,
//         header:authHeader()
//     })
// }

export const deleteStudent=(id)=>{
    return cy.request({
        method:'DELETE',
        url:`http://localhost:3000/students/${id}`,
        header:authHeader()
    })
}


export const getstudetnwithid=(id)=>{
    return cy.request({
          method:'GET',
          url:`http://localhost:3000/students/${id}`,
          header:authHeader()
    })
}

