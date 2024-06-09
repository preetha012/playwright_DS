class stacksPage{

    constructor(page){
        this.page = page;
        this.oprtn_stack = page.getByRole('link', { name: 'Operations in Stack' });
        this.implemntn_stack = page.getByRole('link', {name:'Implementation'});
        this.tryHere_stack = page.locator('.btn.btn-info');
        this.codeEditor = page.locator(".CodeMirror.cm-s-default");
        this.runBtn_stack = page.getByRole('button', { name: 'Run' });
        this.run_result = page.locator("[id='output']");
        
    }

    async get_title_stack(){
    
        await this.page.waitForLoadState(); // Ensure the new page is fully loaded 
        const title = await this.page.title(); // Await the asynchronous title() method
            console.log('Child page title:',title);
           return  title;
        
    }
    async op_in_stack_fn(){
        this.oprtn_stack.click();
    }
    async implementatin_stack_fn(){
        this.implemntn_stack.click();
    }
    async tryhere_stack_fn(){
        this.tryHere_stack.click();
    }
    
    async codeTryArea_stack_fn(phythonCode){

          // Wait for the CodeMirror editor to be visible
            await this.codeEditor.waitFor({ state: 'visible' });
            await this.codeEditor.click();
            await this.page.keyboard.type(phythonCode);
            
        // // Set the content of the CodeMirror editor using JavaScript
        //     await this.page.evaluate((codeEditor) => {
        //         const editor = document.querySelector('.CodeMirror').CodeMirror;
        //         editor.setValue(phythonCode);
        //     },phythonCode);

            
    }
  
    async run_result_fn(){
        
        await this.runBtn_stack.click();
        const runMsg = await this.run_result.textContent();
        console.log("printed result -> ", runMsg);
       return runMsg;
    }

    async alert_fn() {
        
        // Initialize your alert function
         this.page.on("dialog", async (dialog) => {
            const text = dialog.message();
            console.log("Alert message is:", text);
            await dialog.accept();
         });
        // Trigger an action that causes an alert
         await this.runBtn_stack.click();
    }

}
module.exports ={stacksPage};