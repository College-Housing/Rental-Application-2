# Rental Applicaton V(0.1)

This is documentation for the rental application code.

## Installation

1. In your git bash run `git clone https://github.com/College-Housing/Rental-Application-2.git`
2. Run the project on a localhost

## Technologies
1. Bootstrap 4
2. jQuery 3.3.1
3. Bootstrap Validator: (https://1000hz.github.io/bootstrap-validator/)


## Bootstrap Validator
1000hz bootstrap validator is used in the validation of this form.
main functions of the validator:
⋅⋅1. To validate the whole form use: `$('form').validator('validate');`
⋅⋅2. If new fields are added dynamically use: `$('form').validator('update');` to add these added fields to the fields to be validated
⋅⋅3. To remove all validation use:  `$('form').validator('update');`
⋅⋅4. To apply any of those functions on the current active panel only use this code instead:
    `
    var currentPanel =getCurrentPanel();
    currentPanel.validator('update');
    currentPanel.validator('validate');
    currentPanel.validator('reset');
    `

## Project Files
 1. index.html
 2. js/email_validation.js
 3. js/floatingLabels.js
 4. js/multipleNames.js
 5. js/preview.js
 6. js/script.js


### 1. index.html
This file contains all the html code of the project

### 2. js/script.js
This file contains most functions , all functions are explained inside the  code

### 3. js/email_validation.js
This file contains two function:
⋅⋅* One for validating that no email address is input more than once in the form.
⋅⋅* And one for validating that any email address input is real.  

### 3. js/floatingLabels.js
This file contains :
⋅⋅1. function to create the floating labels effect on all the form fields
⋅⋅2. function to hide or unhide ssn and add the '-' to the ssn.   
⋅⋅3. function to generate a unique ID for the applicant

### 4. js/multipleNames.js
Since user can add more than one rental history or employment history entries, and only one value of these entries is submitted to the google spreadsheet, this code is a workaround this issue , it contains functions that :
⋅⋅1. gets all the fields with the same name and adds their values to an array separated with "|".
⋅⋅2. this array is set as the value of a hidden input field in the html (one hidden input field for each name).
⋅⋅3. the value of these hidden fields are the values sent to the google spreadsheet.

### 5. js/preview.js
This file contains code to get the values of all the fields in the form and preview them to the user at the end of the form.
⋅⋅1. For each field there is an attribute `data-table`, this attribute value is the title of each entry in the preview table.
⋅⋅2. If there is a field that you don't want to show in the preview table set its data-table attribute to undefined `data-table="undefined"`
