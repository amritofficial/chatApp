// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDfN6rnO0LoqSxU0MKrkhgD9_LxGm8NV10',
    authDomain: 'chatapp-a6cbf.firebaseapp.com',
    databaseURL: 'https://chatapp-a6cbf.firebaseio.com',
    projectId: 'chatapp-a6cbf',
    storageBucket: 'chatapp-a6cbf.appspot.com',
    messagingSenderId: '232489940050'
  }
};
