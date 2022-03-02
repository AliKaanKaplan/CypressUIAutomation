/// <reference types="Cypress" />

import {When} from "cypress-cucumber-preprocessor/steps"
import {CareerPageSelector} from "../../selector/CareerPageSelector"

When('Write {string} to Keyword box', jobs =>{
    cy.get(CareerPageSelector.keyword_textbox_css).type(jobs)

})

When('Select {string} Locate', (locate)  =>{
    cy.get(CareerPageSelector.location_textbox_css).type(locate)
    cy.get(CareerPageSelector.location_dropdown_css).contains(locate).click({force:true})
})

When (/^Click to (Business and Data Analysis|Client Engagement and Business Development|Delivery and Project Management|Digital Strategy and Design|Emerging Talent and Junior Programs|Human Resources and Talent Acquisition|Learning and Development|Marketing and Communications|Operations, Finance, Risk Management, and Legal|Product Design and Engineering|Product Management|Software, System, and Test Engineering|Solution Architecture|Technology and Business Consulting) from skill dropdown$/, (skill) => {
    cy.get(CareerPageSelector.skill_dropdown_css).click()
    cy.get(CareerPageSelector.skill_checkbox_list).contains(skill).click()
});

When('Click to {string} from skill dropdown', (locate) =>{
    cy.get(CareerPageSelector.skill_dropdown_css).click()
    cy.get(CareerPageSelector.skill_checkbox_list).contains(locate).click()
})
/*
Then('User should see jobs', () => {
    
})*/