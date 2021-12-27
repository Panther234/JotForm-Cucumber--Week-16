$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/jotform.feature");
formatter.feature({
  "line": 1,
  "name": "Fill in jotform",
  "description": "",
  "id": "fill-in-jotform",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7189664100,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Fill in jotform",
  "description": "",
  "id": "fill-in-jotform;fill-in-jotform",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on jotform",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on Start fill form",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I fill first name field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I fill last name field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click first page next",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I drag and drop file",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click second page next",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I draw my signature",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click third page next",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter a date",
  "keyword": "And "
});
formatter.match({
  "location": "JotformTestSteps.iAmOnJotform()"
});
formatter.result({
  "duration": 178120000,
  "status": "passed"
});
formatter.match({
  "location": "JotformTestSteps.iClickOnStartFillForm()"
});
formatter.result({
  "duration": 119468300,
  "status": "passed"
});
formatter.match({
  "location": "JotformTestSteps.iFillFirstNameField()"
});
formatter.result({
  "duration": 153332400,
  "status": "passed"
});
formatter.match({
  "location": "JotformTestSteps.iFillLastNameField()"
});
formatter.result({
  "duration": 369507700,
  "status": "passed"
});
formatter.match({
  "location": "JotformTestSteps.iClickFirstPageNext()"
});
formatter.result({
  "duration": 307442700,
  "status": "passed"
});
formatter.match({
  "location": "JotformTestSteps.iDragAndDropFile()"
});
formatter.result({
  "duration": 9298624700,
  "status": "passed"
});
formatter.match({
  "location": "JotformTestSteps.iClickSecondPageNext()"
});
formatter.result({
  "duration": 129041400,
  "status": "passed"
});
formatter.match({
  "location": "JotformTestSteps.iDrawMySignature()"
});
formatter.result({
  "duration": 11737341300,
  "status": "passed"
});
formatter.match({
  "location": "JotformTestSteps.iClickThirdPageNext()"
});
formatter.result({
  "duration": 122042100,
  "status": "passed"
});
formatter.match({
  "location": "JotformTestSteps.iEnterADate()"
});
formatter.result({
  "duration": 17664517500,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with locator By.id: title\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-OJIPPDE6\u0027, ip: \u0027192.168.50.90\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat com.jotform.form.pages.Page4.selectDate(Page4.java:91)\r\n\tat com.jotform.form.cucumber.steps.JotformTestSteps.iEnterADate(JotformTestSteps.java:57)\r\n\tat ✽.And I enter a date(src/test/java/resources/featurefile/jotform.feature:13)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 33624300,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d96.0.4664.110)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-OJIPPDE6\u0027, ip: \u0027192.168.50.90\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [96b7b76a7ad3790f9567fbd1a8a81c94, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\hiren\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58461}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:58461/devtoo..., se:cdpVersion: 96.0.4664.110, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 96b7b76a7ad3790f9567fbd1a8a81c94\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:614)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:349)\r\n\tat com.jotform.form.utility.Utility.getScreenshot(Utility.java:359)\r\n\tat com.jotform.form.Hooks.tearDown(Hooks.java:22)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
});