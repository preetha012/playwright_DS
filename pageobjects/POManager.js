const {homePage} = require('./homePage');
const {signinPage} = require('./signinPage');
const {stacksPage} = require('./stacksPage');
const {queuePage} = require('./queuePage');

class POManager{

    constructor(page){
        this.page = page;
        this.homePage = new homePage(page);
        this.signinPage = new signinPage(page);
        this.stacksPage = new stacksPage(page);
        this.queuePage = new queuePage(page);

    }

getHomePage(){
    return this.homePage;
}

getSiginPage(){
    return this.signinPage;
}

getStackPage(){
    return this.stacksPage;
}
getQueuePage(){
    return this.queuePage;
}

}

module.exports = {POManager}