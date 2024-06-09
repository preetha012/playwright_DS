const {Given,When,Then} = require('@cucumber/cucumber');
const {expect} = require('@playwright/test');


  //Implementation in Stack page
  Given('The user select stack item from Getstarted icon', async function () {

      await this.homepage.getStartStack_fn();

    });

    Then('The user is directed to Stack Page', async function () {
      await expect(this.page).toHaveTitle(/Stack/);
    });


  When('The user clicks on the Implementation in Stack link', async function () {
       this.stacksPage = this.poManger.getStackPage();
       
        await this.stacksPage.implementatin_stack_fn();
  });

  Then('The user is directed to Implementation in Stack Page', async function () {

            await expect(this.page).toHaveTitle(/Implementation/);
        
  });

  When('The user clicks Try Here in stack', async function () {
    
        await this.stacksPage.tryhere_stack_fn();
  });

  Then('The tryEditor box appears in stack',async  function () {
        
        await expect(this.page).toHaveTitle(/Assessment/);
        console.log('Stack Assessment title** -', await this.stacksPage.get_title_stack());
  });

  When('User type code {string} in the tryEditor', async function (phythonCode) {
        
        await this.stacksPage.codeTryArea_stack_fn(phythonCode);
    
  });

  Then('User clicks Run button and Result is printed below', async function () {

        
        expect(await this.stacksPage.run_result_fn()).toContain("Hello");
      
  });

  Then('User clicks Run button and Error alert message is displayed and accepted', async function () {
        
        await this.stacksPage.alert_fn();
       
  });
