# Trustly Cordova Example App

## Getting Started

1. Clone this repository

2. `npm install`

3. Replace the placeholder tokens with your credentials:
```
// ./www/js/index.js

const ACCESS_ID = 'YOUR_ACCESS_ID';
const MERCHANT_ID = 'YOUR_MERCHANT_ID';
```
Also replace YOUR_ACCESS_ID in `./www/index.html` within the script tag that loads `trustly.js`.

4. Start the app!
```
npm start
```