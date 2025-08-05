# Trustly Cordova Example App

## Getting Started

1. Clone this repository

```
git clone git@github.com:TrustlyInc/trustly-cordova-example.git
```

2. Install project dependencies

```
npm install
```

3. Add desired platforms to your project. We suggest at least adding `ios` and `android`.

```
npx cordova platform add ios && npx cordova platform add android
```

4. Replace the placeholder tokens with your credentials:

```
// ./www/js/index.js

const ACCESS_ID = 'YOUR_ACCESS_ID';
const MERCHANT_ID = 'YOUR_MERCHANT_ID';
```

Also replace YOUR_ACCESS_ID in `./www/index.html` within the script tag that loads `trustly.js`.

5. Start the app!

```
npx cordova run ios
```

or

```
npx cordova run android
```

# Contributing

You can participate in this project by submitting bugs and feature requests in the [Issues](https://github.com/TrustlyInc/trustly-cordova-example/issues) tab.

If you are interested in fixing issues and contributing directly to the code base, feel free to open a Pull Request with your changes. Please, make sure to fulfill our [Pull Request Template](https://github.com/TrustlyInc/trustly-cordova-example/blob/main/.github/pull_request_template.md).
