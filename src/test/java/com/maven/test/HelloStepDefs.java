package com.maven.test;

//import cucumber.annotation.en.Given;
//import cucumber.annotation.en.Then;

import static org.junit.Assert.assertEquals;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class HelloStepDefs {
    private Hello hello;
    private String hi;

    @Given("^I have a hello app with \"([^\"]*)\"$")
    public void I_have_a_hello_app_with(String greeting) {
        hello = new Hello(greeting);
        System.out.println("Ami1");
    }

    @When("^I ask it to say hi$")
    public void I_ask_it_to_say_hi() {
        hi = hello.sayHi();
        System.out.println("Ami2");
    }

    @Then("^it should answer with \"([^\"]*)\"$")
    public void it_should_answer_with(String expectedHi) {
        assertEquals(expectedHi, hi);
        System.out.println("Ami3");
    }
}
