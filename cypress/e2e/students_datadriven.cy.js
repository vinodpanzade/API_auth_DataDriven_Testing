
import {Login} from '../API2/auth_datadriven.api'
import {createStudent,getStudents,getUpdatewithPUT,getUpdatewithPatch,Deletestudent,getDeletestudent} from '../API2/student_datadriven.api'

describe ('Data driven Test suits',()=>{

let studentIds=[];
  before(()=>{

cy.fixture('User').then((users)=>{
    users.forEach((user)=>{
        Login('Post','http://localhost:3000/students',user).its('status').should('eq',201)
    })
})

  })

  it('Student creation',()=>{
       cy.fixture('Student_valid').then((students)=>{

      cy.wrap(students).each((student)=>{
        createStudent(student).then((res)=>{
          expect(res.status).to.eq(201)
          studentIds.push(res.body.id)
          cy.log(studentIds)
          cy.log(JSON.stringify(res.body))
        })
      })
      
  })
})

  it('Student get',()=>{
   getStudents().then((res)=>{
    expect(res.status).to.eq(200)
    cy.log(JSON.stringify(res.body))
   })
  })


  it('update student by PUT',()=>{
    cy.fixture('Studentupdate').then((students)=>{
        cy.wrap(studentIds).each((id,index)=>{
          getUpdatewithPUT(id,students[index]).then((res)=>{
            expect(res.status).to.eq(200)
            cy.log(JSON.stringify(res.body))
          })
        })
    })
  })



  it('update stuedent patch',()=>{
    cy.fixture('Student_patch').then((students)=>{
       cy.wrap(studentIds).each((id,index)=>{
        getUpdatewithPatch(id,students[index]).then((res)=>{
          expect(res.status).to.eq(200)
          cy.log(JSON.stringify(res.body))
        })
       })
    })
  })

  it('Delete Student one by one',()=>{
  cy.wrap(studentIds).each((id)=>{
         Deletestudent(id).then((res)=>{
          expect(res.status).to.eq(200)
         })
  })
  })

  it('get student after delete',()=>{
     cy.wrap(studentIds).each((id)=>{
        getDeletestudent(id).then((res)=>{
          expect(res.status).to.eq(404)
        })
     })
  })







})