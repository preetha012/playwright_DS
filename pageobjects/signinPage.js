class signinPage{

    constructor(page){
        this.page = page;
        this.getStart = page.getByRole('button', { name: 'Get Started' });
        this.loginbtn = page.locator("a[href='/login']");
        this.sucess_loginMsg = page.locator("div[role='alert']");
        this.loged_username = page.locator('ul a:nth-child(2)');
        this.userName = page.locator('input#id_username');
        this.password = page.locator('input#id_password');
        this.loginBtn_sigin = page.locator("input[value='Login']");
        this.error_loginMsg = page.locator("div[role='alert']");
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
    
    async loginfn(uname,passwd){
        await  this.userName.fill(uname);
        await  this.password.fill(passwd);
        await  this.loginBtn_sigin.click();
    }

    async loginfn_invalid(uname,passwd){
        await  this.userName.fill(uname);
        await  this.password.fill(passwd);
        await  this.loginBtn_sigin.click();
    }
    
    async login_errorMsg(){
        const msg = await this.error_loginMsg.textContent();
        console.log("msg is ", msg);
        return msg;
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

 }
    module.exports = {signinPage};