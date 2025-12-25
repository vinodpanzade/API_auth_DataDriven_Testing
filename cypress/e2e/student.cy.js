import {
  createStudent,
  getStudent,
  deleteStudent,
  getstudetnwithid,
   updateStudentPUT,
  updateStudentPATCH
} from "../API2/students.api";
import { login } from "../API2/auth.api";


describe("Test execution of studens", () => {

  let studentId;

  before(() => {
    login({ email: "vinodbhai12@gmail.com", password: "VGp12@" }).then(
      (res) => {
        Cypress.env("id", res.body.user.id);
        cy.log(res.body.accessToken);
      }
    );
  });


  it("createstudent", () => {
    createStudent({ name: "vinodbhai", job: "web developer" }).then((res) => {
      studentId = res.body.id;
      cy.log(studentId);
    });
  });
  

  it("get student with id", () => {
    getstudetnwithid(studentId).then((res) => {
      cy.log(JSON.stringify(res.body));
    });
  });

  it('get student ',()=>{
      getStudent().then((res)=>{
       cy.log(JSON.stringify(res.body))
      })
  })

  it('delete student with id',()=>{
     deleteStudent(studentId).its('status').should('eq', 200)
  })
});

 it('Update student using PUT', () => {
    cy.log(studentId)
    updateStudentPUT(studentId, { name: 'Vinod', job: 'junior SDET' })
      .its('status')
      .should('eq', 200)
  })


  it('Update student using PATCH', () => {
    cy.log(studentId)
    updateStudentPATCH(studentId, { job: 'Lead SDET' })
      .its('status')
      .should('eq', 200)
  })


