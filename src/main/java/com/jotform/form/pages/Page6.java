package com.jotform.form.pages;

import com.jotform.form.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Page6 extends Utility {
    private static final Logger log = LogManager.getLogger(Page6.class.getName());
    public Page6() {
        PageFactory.initElements(driver, this);
    }


    @CacheLookup
    @FindBy(xpath = "//button[@class='jfInput-button forSubmit form-submit-button u-right']")
    WebElement submitButton;

    public void clickSubmit() {
        submitButton.click();
        log.info("Click Submit button : " + submitButton.getText());
    }

}
