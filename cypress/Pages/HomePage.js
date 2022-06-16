/// <reference types="Cypress" />

import basePage from "./BasePage";
import {HomePageSelector} from "../selector/HomePageSelector"
import {baseUrl} from "../fixtures/baseUrl";

class HomePage {

    openTheHomePage(language){
        cy.viewport(1280,720)
            switch(language) {
                case "Hungary" :
                  cy.visit(baseUrl.Hungary)
                  break;
                case "Беларусь":
                  cy.visit(baseUrl.Беларусь)
                  break;
                case "Czech Republic" :
                    cy.visit(baseUrl.CzechRepublic)
                    break;
                case "India":
                    cy.visit(baseUrl.India)
                    break;
                case "Россия" :
                    cy.visit(baseUrl.Россия)
                    break;
                case "Česká Republika" :
                   cy.visit(baseUrl.ČeskáRepublika)
                        break;
                case "Polska" :
                    cy.visit(baseUrl.Polska)
                    break;
                case "Україна":
                    cy.visit(baseUrl.Україна)
                    break;
                case "DACH" :
                    cy.visit(baseUrl.DACH)
                    break;
                case "中国":
                    cy.visit(baseUrl.中国)
                    break;
                default:
                    cy.visit(baseUrl.Global)
              }
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
            cy.get(HomePageSelector.menuList).each(($el, index, $list) => {
                cy.get(HomePageSelector.menuList).eq(index).click();
                cy.wait(2000)
               cy.title().should('include',baseUrl.Hungary)
             })
    }

    verifyHeaderLogo(){
        cy.get(HomePageSelector.mainPageLogo).should('be.visible')
    }

    verifySliderButton(){
        cy.fixture('contentTitle').then((content_title) => {
            const titleList = 
            [
                content_title.one,
                content_title.two,
                content_title.three,
                content_title.four
            ]

            cy.get(HomePageSelector.first_slider_button_list).eq(0).click({force:true})
            cy.contains(titleList[0]).scrollIntoView({ easing: 'linear' }).should('be.visible')
            cy.get(HomePageSelector.first_slider_button_list).eq(1).click({force:true})
            cy.contains(titleList[1]).scrollIntoView({ easing: 'linear' }).should('be.visible')
            cy.get(HomePageSelector.first_slider_button_list).eq(2).click({force:true})
            cy.contains(titleList[2]).scrollIntoView({ easing: 'linear' }).should('be.visible')
            cy.get(HomePageSelector.first_slider_button_list).eq(3).click({force:true})
            cy.contains(titleList[3]).scrollIntoView({ easing: 'linear' }).should('be.visible')
             })

    }
}

export default new HomePage();








