describe('fixtxure',()=>{

    it('ghj',()=>{

// when i want to use foreach inside the fixture then i can use but only when it doesnt contain the cy inside the loop
        // cy.fixture('Student_valid').then((data)=>{
        //     cy.log(data)
        //     data.forEach((data2)=>{
        //         cy.log(data2)
        //     })//here no cy command then we can use forEach inside the fixture 
        // })
           cy.fixture('Student_valid').then((data)=>{
         data.forEach((data2)=>{
                cy.request('Post','http://localhost:3000/students',data2).then((res)=>{
                    cy.log(res.body)
                })
            })
             
        })

    })
})

