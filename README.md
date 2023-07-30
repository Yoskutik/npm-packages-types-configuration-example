# NPM Packages types configuration demo

This repository is a short demonstration of how you can make your NPM
package configurable in terms of types.

Repository consist of 3 packages:
* `package1` is a really simple NPM package that shows the basics of
configurable types;
* `package2` is an NPM package that provides a few realistic example
of configurable types usage, such as:
  * _Strict types for register/usage approach_
  * _Choosing decorators types - legacy (< TS v.5) or modern (>= TS v.5)_
* `main` is an NPM package that shows can package above be used and
configured.  
The `main` package consists of several unit-tests for types. Usage each
of the above packages is presented in the `main/tests` directory.

To run tests and check all types are applied right, run

```bash
npm t
```