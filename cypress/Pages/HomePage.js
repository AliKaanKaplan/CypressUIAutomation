/// <reference types="Cypress" />

import basePage from "./BasePage";
import {HomePageSelector} from "../selector/HomePageSelector"

class HomePage {

    openTheHomePage(){
        cy.viewport(1280,720)
        cy.visit('https://www.epam.com/')
        basePage.waitForMilliseconds(5000)
   }

   clickTheEpamLogoInHeader(){
       cy.get(HomePageSelector.mainPageLogo).click()
    }

    clickMenuListAndCheckUrl(){
        cy.get(HomePageSelector.menuList).should('have.length', 6)
        cy.get(HomePageSelector.menuList).each(($el, index, $list) => {
                    cy.get(HomePageSelector.menuList).eq(index).click();
                    basePage.waitForMilliseconds(5000)
                    cy.get(HomePageSelector.menuList).eq(index).invoke('attr','href').then($contains_url => {
                        cy.url().should('include', $contains_url)
                    })

                    cy.get(HomePageSelector.menuList).eq(index).invoke('attr','href').then($contains_url => {
                        cy.url().should('include', $contains_url)
                    })
                  
            })
    }

    clickMenuListAndCheckTitle(){
        cy.get(HomePageSelector.menuList).should('have.length', 6)

        var title_list =
        [
        "Our Services | EPAM",
        "How We Do It | Agile Product Engineering Services | EPAM",
        "Explore our Work | EPAM Customer Stories, Brochures & Accelerators",
        "Discover our Latest Insights | EPAM",
        "One of the Fastest-Growing Public Tech Companies | About EPAM",
        "Explore Professional Growth Opportunities | EPAM Careers"
        ]

        cy.get(HomePageSelector.menuList).each(($el, index, $list) => {
                    cy.get(HomePageSelector.menuList).eq(index).click();
                    basePage.waitForMilliseconds(5000)
                    cy.title().should('include', title_list[index])
            })
    }

}

export default new HomePage();