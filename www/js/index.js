const ACCESS_ID = 'YOUR_ACCESS_ID';
const MERCHANT_ID = 'YOUR_MERCHANT_ID';
const serverURL = null; // YOUR_SERVER_URL

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

const trustlyOptions = {
    closeButton: true,
    dragAndDrop: false,
    widgetContainerId: "trustlyWidget"
};

const returnEstablishData = platform => {
    let lightboxRedirectURL = serverURL ? serverURL : "#";
    let data = {
      accessId: ACCESS_ID,
      // requestSignature: REQUEST_SIGNATURE, <-- this is required in production see: 
      merchantId: MERCHANT_ID,
      description: 'transaction description',
      merchantReference: 'merchant reference',
      paymentType: 'Retrieval',
      returnUrl: `${lightboxRedirectURL}/return`,
      cancelUrl: `${lightboxRedirectURL}/cancel`,
    };
    // check platform for mobile
    if (platform === "android" || platform === "ios") {
        if (!data.metadata) data.metadata = {};
        data.metadata.urlScheme = "io.cordova.trustlyexample://oauth_callback";
        data.metadata.integrationContext = "InAppBrowser";
    }
    return data;
};

function onDeviceReady() {
    // pass the platform info from the cordova obejct 
    const establishData = returnEstablishData(cordova.platformId);

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    
    window.Trustly.selectBankWidget(establishData, trustlyOptions);
}
