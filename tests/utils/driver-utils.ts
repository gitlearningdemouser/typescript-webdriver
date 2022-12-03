import {WebDriver, Builder} from 'selenium-webdriver';  


export class DriverUtils{

    constructor(){};

    public async getDriver(): Promise<WebDriver>{
       let driver = await new Builder()
        .forBrowser('chrome')
        .build();

        await driver.manage().setTimeouts({
            implicit:30*1000,
            pageLoad:30*1000,
            script: 200*1000
        })

        return driver;
    }

    public async closeDriver(driver: WebDriver): Promise<void>{
        console.log("driver!=null : " + driver!=null)
        if(driver!= null){
           await driver.quit();       }
    }


   




}