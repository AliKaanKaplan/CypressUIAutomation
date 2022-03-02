/// <reference types="Cypress" />

import {When,Then} from "cypress-cucumber-preprocessor/steps"
import {HomePageSelector} from "../../selector/HomePageSelector"

When('Click the {string} menu',menu => {
    cy.get(HomePageSelector.allmenu_css).contains(menu).click()
})