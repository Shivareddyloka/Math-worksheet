// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  analytics: {
    trackingId: 'UA-255878-12'
  },
  firebase: {
    apiKey: "AIzaSyD5ZcjE_QXfwxw6GPHJiMDw6VViSzZP2GQ",
    authDomain: "main-project-f3862.firebaseapp.com",
    databaseURL: "https://main-project-f3862.firebaseio.com",
    projectId: "main-project-f3862",
    storageBucket: "main-project-f3862.appspot.com",
    messagingSenderId: "1085740405634"
  }
};
