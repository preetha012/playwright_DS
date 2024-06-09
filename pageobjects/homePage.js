class homePage{

constructor(page){
    this.page = page;
    this.getStart = page.getByRole('button', { name: 'Get Started' });
    this.loginbtn = page.locator("a[href='/login']");
    this.sucess_loginMsg = page.locator("div[role='alert']");
    this.loged_username = page.locator('ul a:nth-child(2)');

    this.dropdown_list = page.getByRole('a',{name: 'Data Structures'});
    this.stack_dropdown = page.locator("a[href='/stack']");
    this.queue_dropdown = page.locator("a[href='/queue']");

    this.stack_getStart = page.locator("a[href='stack']");
    this.queue_getStart = page.locator("a[href='queue']");
}

async goTo(){
    await this.page.goto('https://dsportalapp.herokuapp.com/');
}

async getStartedfn(){ 
    await this.getStart.click();
}

async clickLogin_fn(){
    await this.loginbtn.click();
}

async sucessMsg(){
    const msg = await this.sucess_loginMsg.textContent();
    console.log("msg is ", msg);
    return msg;
}

async loged_username_check(){
    const loged_uname =  await this.loged_username.textContent();
    console.log("logged username is -> ",loged_uname )
    return loged_uname;
}

async algo_dropdwn_fn(Option){
    await this.dropdown_list.click();
    switch(Option.toLowerCase()){
        case "stack":
            await this.page.waitFor();
            await this.stack_dropdown.click();
            break;
        case "queue":
            await this.page.waitFor();
            await this.queue_dropdown.click();
            break;
        default :
            console.log("Invalid DropDown Selector");
            break;
    }   
    
}

async algos_getstart_fn(Option){
    switch(Option.toLowerCase()){
        case "stack":
            this.getStartStack_fn();
            break;
        case "queue":
            this.getStartQueue_fn();
            break;
        default :
            console.log("Invalid Selector");
            break;
    }       
}

async getStartStack_fn(){
    await this.stack_getStart.click();
}

async getStartQueue_fn(){
    await this.queue_getStart.click();
}

}
module.exports = {homePage};
