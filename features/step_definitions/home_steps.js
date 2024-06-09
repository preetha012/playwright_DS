const {Given,When,Then} = require('@cucumber/cucumber');
const {expect} = require('@playwright/test');



Given('The user is in the Home page after logged in', async function () {
      this.homepage = await  this.poManger.getHomePage();
     //expect( await this.homepage.loged_username_check()).toContain('Numpy');
     
   });
 
   When('The user select {string} item from the drop down menu',async function (Option) {
      console.log("Option is - ",Option);
     await this.homepage.algos_getstart_fn_dropdwn_fn(Option);
   
     });
 
   When('The user select {string} item from Getstarted icon', async function (Option) {
 
     await this.homepage.algos_getstart_fn_getstart_fn(Option);
     
   });
 
   Then('The user is directed to that {string} Page', async function (Option) {
     
         console.log("Option is - ",Option);
         console.log("received title is ",await this.page.title());
        // await expect(this.page).toHaveTitle(/Stack/);
         // this.stacksPage = await this.poManger.getStackPage();
         //  expect( await this.stacksPage.get_title_stack()).toContain('Stack');
 });