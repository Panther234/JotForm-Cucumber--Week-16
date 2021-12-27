package com.jotform.form.pages;

import com.jotform.form.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Page5 extends Utility {
    private static final Logger log = LogManager.getLogger(Page5.class.getName());
    public Page5() {PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//div[@class='jfDropdown-chipContainer']")
    WebElement securityQDropdown;

    @CacheLookup
//    @FindBy(xpath = "//li[@class='jfDropdown-optionListItem isSelected']")
    @FindBy(xpath = "//li[@data-value='Favourite Colour']")
    WebElement selectQuestion;

    @CacheLookup
    @FindBy(xpath = "//input[@id='input_6_field_2']")
    WebElement securityQAnswer;

    @CacheLookup
    @FindBy(xpath = "//div[@data-type='control_mixed']//button[@aria-label='Next'][normalize-space()='Next']")
    WebElement fifthNextButton;

    public void selectSecurityQuestion() {
        clickOnElement(securityQDropdown);
        mouseHoverToElementAndClick(selectQuestion);
        log.info("Select Security question : " + selectQuestion.getText());
    }
    public void selectAnswerOfSecurityQuestion(String answer){
        sendTextToElement(securityQAnswer, answer);
        log.info("Send Answer in to field : " + answer + securityQAnswer.getText());
    }
    public void clickFifthNext() {
        fifthNextButton.click();
        log.info("Click Next button : " + fifthNextButton.getText());
    }


}
