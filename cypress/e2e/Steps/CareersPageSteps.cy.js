/// <reference types="Cypress" />

import {When} from "cypress-cucumber-preprocessor/steps"
import {CareerPageSelector} from "../../selector/CareerPageSelector"
import CareerPage from "../../Pages/CareerPage"

When('Write {string} to Keyword box', title =>{
    CareerPage.writeToKeywordTextbox(title)
})

When('Select {string} Locate', (location)  =>{
    CareerPage.selectLocation(location)
})

When (/^Click to (Business and Data Analysis|Client Engagement and Business Development|Delivery and Project Management|Digital Strategy and Design|Emerging Talent and Junior Programs|Human Resources and Talent Acquisition|Learning and Development|Marketing and Communications|Operations, Finance, Risk Management, and Legal|Product Design and Engineering|Product Management|Software, System, and Test Engineering|Solution Architecture|Technology and Business Consulting) from skill dropdown$/, (skill) => {
   CareerPage.selectSkill(skill)
});

When (/^Check to (Open to Relocation|Office|Remote)$/, (workType) => {
    cy.get(".job-search__filter-list").contains(workType).click()
 });

When('Click to {string} from skill dropdown', (locate) =>{
    cy.get(CareerPageSelector.skill_dropdown_css).click()
    cy.get(CareerPageSelector.skill_checkbox_list).contains(locate).click()
})

Then('User should see jobs', () => {
    
})