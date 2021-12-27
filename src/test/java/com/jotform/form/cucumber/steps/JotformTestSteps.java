package com.jotform.form.cucumber.steps;

import com.jotform.form.pages.*;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.awt.*;

public class JotformTestSteps {
    @Given("^I am on jotform$")
    public void iAmOnJotform() {
    }
    @When("^I click on Start fill form$")
    public void iClickOnStartFillForm() {
        new StartPage().startForm();
    }
    @And("^I fill first name field$")
    public void iFillFirstNameField() {
        new Page1().fillFirstNameField("Bob");
    }

    @And("^I fill last name field$")
    public void iFillLastNameField() {
        new Page1().fillLastNameField("Alexa");
    }

    @And("^I click first page next$")
    public void iClickFirstPageNext() {
        new Page1().clickFirstNext();
    }

    @And("^I drag and drop file$")
    public void iDragAndDropFile() throws AWTException, InterruptedException {
        new Page2().uploadFile("JotForm.docx");
    }

    @And("^I click second page next$")
    public void iClickSecondPageNext() {
        new Page2().clickSecondNext();
    }

    @And("^I draw my signature$")
    public void iDrawMySignature() throws InterruptedException {
        new Page3().signCanvas();
    }

    @And("^I click third page next$")
    public void iClickThirdPageNext() {
        new Page3().clickThirdNext();
    }

    @And("^I enter a date$")
    public void iEnterADate() {
        new Page4().fillDateField("20211230");
//        new Page4().selectYear("2021");
//        new Page4().selectMonth("December");
//        new Page4().selectDate("30");
    }

    @And("^I click fourth page next$")
    public void iClickFourthPageNext() {
        new Page4().clickFourthNext();
    }

    @And("^I select security question$")
    public void iSelectSecurityQuestion() {
        new Page5().selectSecurityQuestion();
    }

    @And("^I answered security question$")
    public void iAnsweredSecurityQuestion() {
        new Page5().selectAnswerOfSecurityQuestion("Blue");
    }

    @And("^I click fifth page next$")
    public void iClickFifthPageNext() {
        new Page5().clickFifthNext();
    }

    @And("^I click submit button$")
    public void iClickSubmitButton() {
        new Page6().clickSubmit();
    }

    @Then("^I should see text 'Thank you!' and below that 'Your submission has been received!'$")
    public void iShouldSeeTextThankYouAndBelowThatYourSubmissionHasBeenReceived() {
        new Page7().verifyThankYouMessage("Thank You!");
        new Page7().verifySubmissionMessage("Your submission has been received!");
    }

}
