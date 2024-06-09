const{Before , After , BeforeStep , AfterStep} = require('@cucumber/cucumber')
const {POManager} = require('../../pageobjects/POManager');
const playwright = require('playwright'); // Correctly importing playwright



Before( async function(){
    const browser = await playwright.chromium.launch({headless:false});
    const context = await browser.newContext();
    this.page = await context.newPage();
    this.poManger = new POManager(this.page);
});

After( async function(){
    console.log("last execution")
});

BeforeStep(function (){

});

AfterStep(async function({result}){
    if(result.status === 'FAILED'){
        await this.page.screenshot({path: 'screenshot.png'});
    }
});