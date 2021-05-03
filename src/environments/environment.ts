// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyDwi9utCyqhOJSbn-DNPUkO3ILKUe52aJo",
    authDomain: "angular-dashboard-eea0b.firebaseapp.com",
    projectId: "angular-dashboard-eea0b",
    storageBucket: "angular-dashboard-eea0b.appspot.com",
    messagingSenderId: "470546673735",
    appId: "1:470546673735:web:1621a8d7a12588999d8162",
    measurementId: "G-471S2KPQE2"
  },
  url: {
    covid: "https://api.covid19india.org/v4/min"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
