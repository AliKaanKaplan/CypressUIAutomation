/// <reference types="Cypress" />

import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import homePage from "../../Pages/HomePage"

Given (/^Open The Home Page (Hungary|Беларусь|Czech Republic|India|Россия|Česká Republika|Polska|Україна|DACH|中国)$/, (country) => {
    homePage.openTheHomePage(country)
});

Given("Open The Home Page {string}", (country) => {
    homePage.openTheHomePage(country)
});

Then('Click Menu list item and Verify Page Url', () => {
    homePage.clickMenuListAndCheckUrl()
});

Then('Click Menu list item and Verify Page Title', () => {
    homePage.clickMenuListAndCheckTitle()
});

Then('User should see header logo', () => {
    homePage.verifyHeaderLogo()
});

Then('Click slider and verify Page', () => {
    homePage.verifySliderButton()
});

