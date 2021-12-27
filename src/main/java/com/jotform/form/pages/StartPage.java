package com.jotform.form.pages;

import com.jotform.form.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class StartPage extends Utility {
    private static final Logger log = LogManager.getLogger(StartPage.class.getName());
    public StartPage() {PageFactory.initElements(driver, this);}

    @CacheLookup
    @FindBy (id = "jfCard-welcome-start")
    WebElement clickStart;

    public void startForm(){
        clickOnElement(clickStart);
    }

}
