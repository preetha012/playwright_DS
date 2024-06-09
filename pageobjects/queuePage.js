class queuePage{

    constructor(page){
        this.page = page;
        this.imp_array_in_queue = page.getByRole('link', { name: 'Implementation using array' });
        this.tryHere_queue = page.locator('.btn.btn-info');
        this.codeEditor = page.locator(".CodeMirror.cm-s-default");
        this.runBtn_queue = page.getByRole('button', { name: 'Run' });
        this.run_result = page.locator("[id='output']");
        
    }

    async imp_array_queue_fn(){
        this.imp_array_in_queue.click();
    }

    async tryhere_queue_fn(){
        this.tryHere_queue.click();
    }
    
    async queue_codeTryArea_fn(phythonCode){

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
  
    async queue_run_result_fn(){
        
        await this.runBtn_queue.click();
        const runMsg = await this.run_result.textContent();
        console.log("printed result -> ", runMsg);
       return runMsg;
    }

    async queue_alert_fn() {
        
        // Initialize your alert function
         this.page.on("dialog", async (dialog) => {
            const text = dialog.message();
            console.log("Alert message is:", text);
            await dialog.accept();
         });
        // Trigger an action that causes an alert
         await this.runBtn_queue.click();
    }

}
module.exports ={queuePage};