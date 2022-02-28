/// <reference types="Cypress" />

import basePage from "./BasePage";
import {HomePageSelector} from "../selector/HomePageSelector"

class HomePage {

    openTheHomePage(language){
        cy.viewport(1280,720)
        cy.fixture('baseUrl').then((base_url) => {
            switch(language) {
                case "Hungary" :
                  cy.visit(base_url.Hungary)
                  break;
                case "Беларусь":
                  cy.visit(base_url.Беларусь)
                  break;
                case "Czech Republic" :
                    cy.visit(base_url.CzechRepublic)
                    break;
                case "India":
                    cy.visit(base_url.India)
                    break;
                case "Россия" :
                    cy.visit(base_url.Россия)
                    break;
                case "Česká Republika" :
                   cy.visit(base_url.ČeskáRepublika)
                        break;
                case "Polska" :
                    cy.visit(base_url.Polska)
                    break;
                case "Україна":
                    cy.visit(base_url.Україна)
                    break;
                case "DACH" :
                    cy.visit(base_url.DACH)
                    break;
                case "中国":
                    cy.visit(base_url.中国)
                    break;
                default:
                    cy.visit(base_url.Global)
              }
        })
   }

   clickTheEpamLogoInHeader(){
       cy.get(HomePageSelector.mainPageLogo).click()
    }

    clickMenuListAndCheckUrl(){
            cy.get(HomePageSelector.menuList).should('have.length', 6)
            cy.get(HomePageSelector.menuList).each(($el, index, $list) => {
                        cy.get(HomePageSelector.menuList).eq(index).click();
                        cy.get(HomePageSelector.menuList).eq(index).invoke('attr','href').then($contains_url => {
                            cy.url().should('include', $contains_url)
                        })
                })
    }

    clickMenuListAndCheckTitle(){
        cy.get(HomePageSelector.menuList).should('have.length', 6)
        cy.fixture('pageTitle').then((page_title) => {
            var title_list=[
                page_title.servicesPage,
                page_title.howDoItPage,
                page_title.ourWorkPage,
                page_title.InSightsPage,
                page_title.aboutPage,
                page_title.careersPage]
            cy.get(HomePageSelector.menuList).each(($el, index, $list) => {
                cy.get(HomePageSelector.menuList).eq(index).click();
                cy.title().should('include', title_list[index])
             })
        })
    }

    verifyHeaderLogo(){
        cy.get(HomePageSelector.mainPageLogo).should('be.visible')
    }

}

export default new HomePage();