package com.jotform.form.pages;

import com.jotform.form.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Page1 extends Utility {
    private static final Logger log = LogManager.getLogger(Page1.class.getName());
    public Page1() {PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(xpath = "//input[@id='first_2']")
    WebElement firstName;

    @CacheLookup
    @FindBy(xpath = "//input[@id='last_2']")
    WebElement lastName;

    @CacheLookup
    @FindBy(xpath = "(//button[text()='Next'])[1]")
    WebElement firstNextButton;

    public void fillFirstNameField(String text) {
        sendKeysToElement(firstName, text);
        log.info("Add First Name : " + text + firstName.getText());
    }

    public void fillLastNameField(String text) {
        sendKeysToElement(lastName, text);
        log.info("Add Last Name : " + text + lastName.getText());
    }

    public void clickFirstNext() {
        firstNextButton.click();
        log.info("Click Next button : " + firstNextButton.getText());
    }
}
