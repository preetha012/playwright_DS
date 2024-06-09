class signinPage{

    constructor(page){
        this.page = page;
        this.userName = page.locator('input#id_username');
        this.password = page.locator('input#id_password');
        this.loginBtn = page.locator("input[value='Login']");
        this.error_loginMsg = page.locator("div[role='alert']");
    }
    
    async loginfn(uname,passwd){
        await  this.userName.fill(uname);
        await  this.password.fill(passwd);
        await  this.loginBtn.click();
    }

    async loginfn_invalid(uname,passwd){
        await  this.userName.fill(uname);
        await  this.password.fill(passwd);
        await  this.loginBtn.click();
    }
    
    async login_errorMsg(){
        const msg = await this.error_loginMsg.textContent();
        console.log("msg is ", msg);
        return msg;
    } 
    }
    module.exports = {signinPage};