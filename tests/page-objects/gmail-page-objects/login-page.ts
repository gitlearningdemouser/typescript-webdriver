import { WebDriver } from "selenium-webdriver";
import { DriverActions } from "../../utils/driver-actions";

export class LoginPage extends DriverActions{

    driver: WebDriver;

    constructor(currentDriver:WebDriver){
        super(currentDriver);
        this.driver = currentDriver;
    }



}