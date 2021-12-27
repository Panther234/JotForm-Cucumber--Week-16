package com.jotform.form.pages;

import com.jotform.form.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

public class Page7 extends Utility {
    private static final Logger log = LogManager.getLogger(Page7.class.getName());
    public Page7() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h1[@class='jfThankYou-header form-header']")
    WebElement thankYouMessage;

    @CacheLookup
    @FindBy(xpath = "//div[@class='jfThankYou-description form-subHeader']")
    WebElement submissionMessage;


    public void verifyThankYouMessage(String message) {
        String actualString = getTextFromElement(thankYouMessage);
        Assert.assertTrue(actualString.contains((message)));
        log.info("Confirming Thank you message: " + message + thankYouMessage.getText());
    }
    public void verifySubmissionMessage(String message) {
        String actualString = getTextFromElement(submissionMessage);
        Assert.assertTrue(actualString.contains((message)));
        log.info("Confirming Submission message: " + message + submissionMessage.getText());
    }

}
