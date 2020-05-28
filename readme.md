# Rental Applicaton V(0.1)
Date: Thursday,28th May, 2020
By: Lina Basuni

This is the documentation of the Rental Application.
Online link : http://rentalapp.collegehousing.us/

## How it works
1. Applicant fills the Rental Application.
2. Form submission is sent to the google spreadsheet.
3. AMOcrm receives a lead through the google spreadsheet.
4. AMOcrm sends the confirmation mail to the applicants email.
5. The google spreadsheet sends an email to each guarantor.
- Each email contains the applicant's ID and a link .
- The guarantor clicks the link and enters the provided ID in the form that appears then submits.
6. The google spreadsheet receives the acceptance of the guarantor.

## Installation

1. In your git bash run `git clone https://github.com/College-Housing/Rental-Application-2.git`
2. Run the project on a localhost
3. When publishing the project it must be loaded over http to use the Mailboxlayer API to validate the emails

## Technologies
1. Bootstrap 4
2. jQuery 3.3.1
3. Bootstrap Validator: (https://1000hz.github.io/bootstrap-validator/)
4. Mailboxlayer API (To validate emails)


## Bootstrap Validator
1000hz bootstrap validator is used in the validation of this form.
main functions of the validator:
1. To validate the whole form use: `$('form').validator('validate');`
2. If new fields are added dynamically use: `$('form').validator('update');` to add these added fields to the fields to be validated
3. To remove all validation use:  `$('form').validator('update');`
4. To apply any of those functions on the current active panel only use this code instead:
    ```
    var currentPanel =getCurrentPanel();
    currentPanel.validator('update');
    currentPanel.validator('validate');
    currentPanel.validator('reset');
    ```

  For more details, this is the documentation of the validator: https://1000hz.github.io/bootstrap-validator/

## Project Files
 1. index.html
 2. js/email_validation.js
 3. js/floatingLabels.js
 4. js/multipleNames.js
 5. js/preview.js
 6. js/script.js
 7. confirmation


### 1. index.html
This file contains all the html code of the project

### 2. js/script.js
This file contains most functions , all functions are explained inside the  code

### 3. js/email_validation.js
This file contains two function:
* One for validating that no email address is input more than once in the form.
* And one for validating that any email address input is real.  

### 4. js/floatingLabels.js
This file contains :
1. function to create the floating labels effect on all the form fields
2. function to hide or unhide ssn and add the '-' to the ssn.   
3. function to generate a unique ID for the applicant

### 5. js/multipleNames.js
Since user can add more than one rental history or employment history entries, and only one value of these entries is submitted to the google spreadsheet, this code is a workaround this issue , it contains functions that :
1. gets all the fields with the same name and adds their values to an array separated with "|".
2. this array is set as the value of a hidden input field in the html (one hidden input field for each name).
3. the value of these hidden fields are the values sent to the google spreadsheet.

### 6. js/preview.js
This file contains code to get the values of all the fields in the form and preview them to the user at the end of the form.
1. For each field there is an attribute `data-table`, this attribute value is the title of each entry in the preview table.
2. If there is a field that you don't want to show in the preview table set its data-table attribute to undefined ```data-table="undefined"```

### 7. confirmation
1. This directory contains two directories one for each guarantor for the confirmation.
2. Each directory contains code for a small form of two fields :
- The first field is for the ID, this ID is auto-generated for each applicant when he fills the form and submitted to the spreadsheet, then sent to each guarantor in the email.
- The second field is a check box stating that he agrees to be guarantor.   


## Google spreadsheet

Google spreadsheet link : https://docs.google.com/spreadsheets/d/1alHw1NFyinS_o9hzEwrxGILZbA3Z_lCpkSCNuvNKTAs/edit#gid=0

The google spreadsheet contains a tool called script editor which uses JavaScript to create custom functions for the spreadsheet.

To access script editor:
1. Open the spreadsheet from the link above.
2. Select the menu item Tools > Script editor.
3. You will find the code used .

### Code explanation:
4 functions are used in the script editor:
1. `mergeDuplicates()`: this function assigns the acceptance of the guarantor to the applicant
- it checks the uniqueID column value of any new row added
- if it matches any of the uniqueID values present in the sheet this row is merged with the row that already exists which sets the parents agreement.

2. `sendEmails()`: this function sends the emails to the guarantors (if exists):
- first the function checks if the value of the column `email-is-sent` in the current row (last row) is set to `'yes'`
- if it is set to 'yes' nothing happens.
- if it is not set to `'yes'` it checks if the applicant assigned any guarantors
- if the applicant didn't assign any guarantors nothing happens and no emails are sent
- if the applicant assigned guarantors emails are sent to the guarantors, and the value of the `email-is-sent` is set to `'yes'` (to prevent sending the emails more than once).

3. `sendEmailIfNoGuarantors()`: This function sends an email to the email `contact@collegehousing.us` if the applicant stated that he has no guarantors.
- it checks the value of the column `problem-with-both-parents-signing` for each new row added(new form submission)
- if it's value is `'No'` nothing happens.
- if it's value is `'Yes'` an email is sent to the email `contact@collegehousing.us` notifying that there is a pending application.

4. `doPost()`: This is the main function in the script editor
- It gets the values submitted through the form and assigns them to their right columns
- all the previous functions must be called through this function .
- This function is the function assigned to the `onFormSubmit` trigger.     
