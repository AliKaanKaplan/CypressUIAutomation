Feature: Career page suits
    Background: Before
        Given Open The Home Page "Global"

    Scenario Outline: Did not find the job
        When Click the "Careers" menu
        When Write "QA Automation Engineer" to Keyword box
        When Select "Malta" Locate
        When Click to "Software, System, and Test Engineering" from skill dropdown
        When Check to <work_type>
        Then User should see jobs
        Examples:
        |work_type|
        |Open to Relocation|
        |Office|
        |Remote|

    Scenario Outline: Find the job
        When Click the "Careers" menu
        When Write "QA Automation Engineer" to Keyword box
        When Select "Malta" Locate
        When Click to <skill> from skill dropdown
        Then User should see jobs
         Examples:
            | skill                                           |
            | Business and Data Analysis                      |
            | Client Engagement and Business Development      |
            | Delivery and Project Management                 |
            | Digital Strategy and Design                     |
            | Emerging Talent and Junior Programs             |
            | Human Resources and Talent Acquisition          |
            | Learning and Development                        |
            | Marketing and Communications                    |
            | Operations, Finance, Risk Management, and Legal |
            | Product Design and Engineering                  |
            | Product Management                              |
            | Software, System, and Test Engineering          |
            | Solution Architecture                           |
            | Technology and Business Consulting              |