/// <reference types="Cypress" />

import {CareerPageSelector} from "../selector/CareerPageSelector"

class CareerPage{
    
    writeToKeywordTextbox(title){
        cy.get(CareerPageSelector.keyword_textbox_css).type(title)
    }

    selectLocation(location){
        cy.get(CareerPageSelector.location_textbox_css).type(locate)
        cy.get(CareerPageSelector.location_dropdown_css).contains(locate).click({force:true})
    }

    selectSkill(){
        cy.get(CareerPageSelector.skill_dropdown_css).click()
        cy.get(CareerPageSelector.skill_checkbox_list).contains(skill).click()
    }

}

export default new CareerPage();