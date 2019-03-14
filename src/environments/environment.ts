// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseSettings: {
    timestampsInSnapshots: true
  },
  firebaseConfig: {
    apiKey: "AIzaSyDmbivBkUXVU9qyNJaF9c0sYz5AP0zv5cc",
    authDomain: "mun-game-1202.firebaseapp.com",
    databaseURL: "https://mun-game-1202.firebaseio.com",
    projectId: "mun-game-1202",
    storageBucket: "mun-game-1202.appspot.com",
    messagingSenderId: "669589809928"
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
