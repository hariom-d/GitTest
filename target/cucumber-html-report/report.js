$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GoogleScenario.feature");
formatter.feature({
  "id": "google-search",
  "tags": [
    {
      "name": "@GoogleSearch",
      "line": 1
    }
  ],
  "description": "",
  "name": "Google Search",
  "keyword": "Feature",
  "line": 2
});
formatter.before({
  "duration": 27171752784,
  "status": "passed"
});
formatter.scenario({
  "id": "google-search;advance-search-in-google",
  "description": "",
  "name": "Advance Search in Google",
  "keyword": "Scenario",
  "line": 4,
  "type": "scenario"
});
formatter.step({
  "name": "user is on google search page",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "enter \"testing\" text into search field",
  "keyword": "When ",
  "line": 6
});
formatter.step({
  "name": "click on search button",
  "keyword": "And ",
  "line": 7
});
formatter.step({
  "name": "click on advance search icon",
  "keyword": "And ",
  "line": 8
});
formatter.step({
  "name": "click on advance search link",
  "keyword": "And ",
  "line": 9
});
formatter.step({
  "name": "click on advance search button",
  "keyword": "And ",
  "line": 10
});
formatter.step({
  "name": "verify first link text \"testing\"",
  "keyword": "Then ",
  "line": 11
});
formatter.match({
  "location": "GoogleStep.The_user_is_on_google_search_page()"
});
formatter.result({
  "duration": 4930537899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing",
      "offset": 7
    }
  ],
  "location": "GoogleStep.User_enters_text_into_field(String)"
});
formatter.result({
  "duration": 490746909,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStep.user_click_on_search_button()"
});
formatter.result({
  "duration": 147977609,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStep.click_on_advance_icon()"
});
formatter.result({
  "duration": 1005055700,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStep.click_on_advance_link()"
});
formatter.result({
  "duration": 212114045,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStep.click_on_advance_button()"
});
formatter.result({
  "duration": 3767177220,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing",
      "offset": 24
    }
  ],
  "location": "GoogleStep.verify_first_link_text(String)"
});
formatter.result({
  "duration": 222554311,
  "status": "passed"
});
formatter.after({
  "duration": 27685422,
  "status": "passed"
});
formatter.uri("HelloWorld.feature");
formatter.feature({
  "id": "hello-world",
  "description": "",
  "name": "Hello World",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 8619780592,
  "status": "passed"
});
formatter.scenario({
  "id": "hello-world;say-hello",
  "description": "",
  "name": "Say hello",
  "keyword": "Scenario",
  "line": 2,
  "type": "scenario"
});
formatter.step({
  "name": "I have a hello app with \"Hari\"",
  "keyword": "Given ",
  "line": 3
});
formatter.step({
  "name": "I ask it to say hi",
  "keyword": "When ",
  "line": 4
});
formatter.step({
  "name": "it should answer with \"Hari World\"",
  "keyword": "Then ",
  "line": 5
});
formatter.match({
  "arguments": [
    {
      "val": "Hari",
      "offset": 25
    }
  ],
  "location": "HelloStepDefs.I_have_a_hello_app_with(String)"
});
formatter.result({
  "duration": 135652,
  "status": "passed"
});
formatter.match({
  "location": "HelloStepDefs.I_ask_it_to_say_hi()"
});
formatter.result({
  "duration": 63363,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hari World",
      "offset": 23
    }
  ],
  "location": "HelloStepDefs.it_should_answer_with(String)"
});
formatter.result({
  "duration": 75857,
  "status": "passed"
});
formatter.after({
  "duration": 14115799,
  "status": "passed"
});
});