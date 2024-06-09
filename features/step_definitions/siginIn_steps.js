const{Given,When,Then} = require('@cucumber/cucumber')
const {expect} = require('@playwright/test');
const ExcelUtilities = require('../../utilities/excelReader');

const filepath ='\\Users\\anoop\\Desktop\\Playwright_projects\\testData\\playwrightData.xlsx';
const Sheetname = 'Sheet1';

    Given('Login to the DSALGO website', async function () {
    
        this.homepage = this.poManger.getHomePage();
        await this.homepage.goTo();
        await this.homepage.getStartedfn();
        await this.homepage.clickLogin_fn();
    });

    When('Enter valid Username And Password', async function () {
        this.siginpage = this.poManger.getSiginPage();
        const excelUtilities = await new ExcelUtilities(); // Instantiate the class
        const data = await excelUtilities.readExcel(filepath,Sheetname); // Call the method on the instance

            if (data.length === 0) {
                throw new Error('No user data found in the Excel file');
            }

        const user = data[0]; // Use the first row

        await this.siginpage.loginfn(user.username_valid,user.password_valid);
     });

     When('enter invalid {string} And {string}', async function (username_invalid, password_invalid) {
       
        this.siginpage = this.poManger.getSiginPage();
        await this.siginpage.loginfn_invalid(username_invalid,password_invalid);

      });

    Then('successfully login', async function () {
        expect( await this.homepage.sucessMsg()).toContain("You are logged in");
    });
    
    Then('Unsuccessfull login', async function () {
        expect( await this.siginpage.login_errorMsg()).toContain("Invalid");
    });