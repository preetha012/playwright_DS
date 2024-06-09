const {Given,When,Then} = require('@cucumber/cucumber');
const {expect} = require('@playwright/test');


  //Implementation in Queue page
  Given('The user select Queue item from Getstarted icon', async function () {
      this.queuePage = this.poManger.getQueuePage();
      await this.queuePage.getStartQueue_fn();

    });

    Then('The user is directed to Queue Page', async function () {
      await expect(this.page).toHaveTitle(/Queue/);
    });


  When('The user clicks on the Implementation using array in Queue link', async function () {
       
       
        await this.queuePage.imp_array_queue_fn();
  });

  Then('The user is directed to Implementation using array in Queue Page', async function () {

            await expect(this.page).toHaveTitle(/Implementation using array/);
        
  });

  When('The user clicks Try Here in Queue', async function () {
    
        await this.queuePage.tryhere_queue_fn();
  });

  Then('The tryEditor box appears in Queue',async  function () {
        
        await expect(this.page).toHaveTitle(/Assessment/);
  });

  When('User type code {string} in the tryEditor in Queue', async function (phythonCode) {
        
        await this.queuePage.queue_codeTryArea_fn(phythonCode);
    
  });

  Then('User clicks Run button and Result is printed below in Queue', async function () {

        
        expect(await this.queuePage.queue_run_result_fn()).toContain("Hello");
      
  });

  Then('User clicks Run button and Error alert message is displayed and accepted in Queue', async function () {
        
        await this.queuePage.queue_alert_fn();
       
  });