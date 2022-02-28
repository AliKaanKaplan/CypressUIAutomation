class BasePage {
    waitForMilliseconds(milliseconds){
        const time=milliseconds
        cy.wait(milliseconds).then(($time) => {
            cy.log('waited :'+time+' milliseconds')
          })
    }
}

export default new BasePage