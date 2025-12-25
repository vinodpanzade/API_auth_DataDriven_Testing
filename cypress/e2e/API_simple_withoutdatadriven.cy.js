describe("Tetsing without using auth simple", () => {
  //  solution is before block
  let studid;
  before(() => {
    cy.request("POST", "http://localhost:3000/students/", {
      name: "Naina",
      job: "hima",
    }).then((response) => {
      studid = response.body.id;
      expect(response.status).to.eq(201);
      cy.log("Created student id: " + studid);
    });
  });
  it("Simple api testing", () => {
   
    cy.request("GET", `http://localhost:3000/students/${studid}`).then(
      (res) => {
        expect(res.status).to.eq(200);
        // cy.log(JSON.stringify(res))
        cy.log(JSON.stringify(res.body)); //it gives us correct output
      }
    );
    cy.request('PUT',`http://localhost:3000/students/${studid}`,{
      name: "wlanamnd",
      job: "bhjbscjhs"

    }).then((res)=>{
      expect(res.status).to.eq(200)
      cy.log(JSON.stringify(res.body))
    })

    cy.request({
      method: "DELETE",
      url: `http://localhost:3000/students/${studid}`,
    }).then((res) => {
      expect(res.status).to.eq(200);
    });

    cy.request({
      url: `http://localhost:3000/students/${studid}`,
      failOnStatusCode: false,
    }).then((res) => {
      expect(res.status).to.eq(404);
    });

  });
});
