# TestLatte for Visual Studio Code

TestLatte allows you to Debug or Run your TestCafé tests on visual studio code.

## Features

#### Shows a list of installed browsers and allows you to select one or more browsers to run your tests.

![Browser List](./images/browser-list.png)

#### Shows a list of tests grouped by fixture.

![Test List](./images/test-list.png)

#### Navigate to your test or fixture clicking on the test/fixture name.

![Navigate](./images/navigate.png)

#### Debug or Run your test or fixture clicking on the debug icon or on the run icon.
![Debug Test](./images/debug-test.png)


![Run Test](./images/run-test.png)

#### Debug or Run all tests clicking on the debug all icon or on the run all icon.

![Debug All](./images/debug-all.png)


![Run All](./images/run-all.png)


## Requirements

It's recommended you install [TestCafé](https://github.com/DevExpress/testcafe) on your project as a local package. 

TestLatte will look for TestCafé in the default location `[testWorkspaceFolder]/node_modules/testcafe/bin` folder, where `testWorkspaceFolder` is the workspace folder of the corresponding test.

If TestCafé is not installed at the default location, it is possible to configure TestCafé's module path in TestLatte configuration settings.

## Extension Settings

This extension contributes the following settings:

* `testlatte.filePath`: Directory from which to search and run the tests. Default value is `test/`
* `testlatte.customArguments`: Custom arguments to TestCafé command line.
* `testlatte.testcafePath`: Path to the TestCafe module used to execute the tests. If it is not configured it will use the path `[testWorkspaceFolder]/node_modules/testcafe/bin/testcafe.js`, where `testWorkspaceFolder` is the workspace folder of the corresponding test.
