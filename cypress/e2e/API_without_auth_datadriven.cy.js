describe("Test Suit", () => {


  //like this if we want to data driven testing then we can make array and then push inside the data

let studIds = [];
    before(() => {
      cy.fixture("Student_valid").then((students) => {
        students.forEach((student) => {
          cy.request("POST", "http://localhost:3000/students/", student).then(
            (res) => {

              studIds.push(res.body.id);
              expect(res.status).to.eq(201);           
              cy.log(JSON.stringify(res.body));

            }
          );  
        });
      });
    });


 it("Get all created students", () => {

  studIds.forEach((id) => {
    cy.request(`http://localhost:3000/students/${id}`).then((res) => {
      expect(res.status).to.eq(200);
      cy.log(JSON.stringify(res.body));
    });
  });

});

it("PUT all created users", () => {
  cy.fixture('Studentupdate').then((updateData) => {

    studIds.forEach((id) => {
      cy.request(
        'PUT',
        `http://localhost:3000/students/${id}`,
        updateData
      ).then((res) => {
        expect(res.status).to.eq(200);
      });
    });

  });
});

it('Delete',()=>{
studIds.forEach((id)=>{
  cy.request({
    method:'Delete',
    url:`http://localhost:3000/students/${id}`,

  }).then((res)=>{
 expect(res.status).to.eq(200)


  })
})
})

it('checking the students are delete or not',()=>{

  studIds.forEach((id)=>{
    cy.request({
      method:'GET',
      url:`http://localhost:3000/students/${id}`,
      failOnStatusCode: false
    })
    .then((res)=>{
        expect(res.status).to.eq(404)
    })
  })

})

//paraller solution
// it('checking the students are delete or not', () => {
//   cy.wrap(studIds).each((id) => {
//     cy.request({
//       method: 'GET',
//       url: `http://localhost:3000/students/${id}`,
//       failOnStatusCode: false
//     }).then((res) => {
//       expect(res.status).to.eq(404)
//       cy.log(`Student ${id} deleted successfully`)
//     })
//   })
// })

})