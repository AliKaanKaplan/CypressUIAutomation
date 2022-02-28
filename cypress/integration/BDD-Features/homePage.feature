Feature: HomePage Suite

    @regression
    Scenario: Header logo should visible with Static Parameter
        Given Open The Home Page "Global"
        Then User should see header logo

    @regression
    Scenario: URL control of the menus in the header
        Given Open The Home Page "Global"
        Then Click Menu list item and Verify Page Url
    
    @regression
    Scenario: Title control of the menus in the header
        Given Open The Home Page "Global"
        Then Click Menu list item and Verify Page Title

    @regression
    Scenario Outline: Header logo should visible
        Given Open The Home Page <country>
        Then User should see header logo
        Examples:
            | country         |
            | Hungary         |
            | Беларусь        |
            | Czech Republic  |
            | India           |
            | Россия          |
            | Česká Republika |
            | Polska          |
            | Україна         |
            | DACH            |
            | 中国             |