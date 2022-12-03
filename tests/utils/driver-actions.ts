import { WebDriver } from "selenium-webdriver";

export class DriverActions{

    protected driver: WebDriver;


    constructor(currentDriver:WebDriver){
        this.driver = currentDriver;
    }

    public async openUrl(url: string){
        console.log('launching url ' + url);
        await this.driver.get(url);
    }



}