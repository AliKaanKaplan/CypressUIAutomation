/// <reference types="Cypress" />

import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import homePage from "../../Pages/HomePage"

Given('Open The Home Page', () => {
    homePage.openTheHomePage()
    //homePage.clickTheEpamLogoInHeader()
    //homePage.clickMenuListAndCheckUrl()
    homePage.clickMenuListAndCheckTitle()
})