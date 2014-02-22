 package com.maven.test;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
//@CucumberOptions(
//		features = {"src/test/resources/GoogleScenario.feature"},
//			glue = {"com.maven.test"},
//			format = {"pretty",
//				"html:target/cucumber-html-report",
//				"junit:target/cucumber-junit-report/allcukes.xml"},
//			tags = {}
//	)

@CucumberOptions(
		//features = {"classpath:HelloWorld.feature"},
		features = {"src/test/resources"},
			glue = {"com.maven.test"},
			format = {"pretty",
				"html:target/cucumber-html-report",
				"junit:target/cucumber-junit-report/allcukes.xml"},
			tags = {}
	)


public class RunCukesTest {
}

