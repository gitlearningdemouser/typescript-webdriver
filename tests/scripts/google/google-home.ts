import { describe, it, before, after } from "mocha";
import { DriverUtils } from "../../utils/driver-utils";
import { WebDriver } from "selenium-webdriver";
import { Driver } from "selenium-webdriver/chrome";


describe('google-home test', function(){
    let driverUtils: DriverUtils;
    let driver: WebDriver;

    before(async()=>{
        driverUtils = new DriverUtils();
        driver = await driverUtils.getDriver();
    });

    it('Google homepage test',async()=>{
        await driver.get('http://www.gmail.com');
        let pageTitle = await driver.getTitle();
        console.log('title = ' + pageTitle);
    });



    after(async()=>{
        await driverUtils.closeDriver(driver);
    });

});


