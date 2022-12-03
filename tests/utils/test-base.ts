import { WebDriver } from 'selenium-webdriver';
import { DriverUtils } from './driver-utils';


class TestBase{

driverUtils:DriverUtils;
driver: WebDriver;

public async getDriver(): Promise<WebDriver>{
    if (this.driver == null){
        this.driverUtils = new DriverUtils();
        this.driver = await this.driverUtils.getDriver();

    }
    
    return this.driver;
}



public async closeDriver(){
    this.driverUtils.closeDriver(this.driver);
}

}


export const testbase = new TestBase();