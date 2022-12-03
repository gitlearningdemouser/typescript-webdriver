import { describe, before, after, it } from "mocha";
import { WebDriver } from "selenium-webdriver";
import { LoginPage } from "../../page-objects/gmail-page-objects/login-page";
import { testbase } from '../../utils/test-base';

describe("gmail-login-page tests", function(){
let driver:WebDriver;
let loginPage: LoginPage;


    before(async()=>{
        driver = await testbase.getDriver();
        loginPage = new LoginPage(driver);
    });

    it("Login Page Test", async()=>{
        
    });

    after(async()=>{
        
    });




});