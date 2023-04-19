# Trustly Cordova Example App

## Getting Started

1. Clone this repository

```
git clone ...
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