// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAQ3RQ5DG71o5g8QiaksHpEnNl3PIZ28Nw',
    authDomain: 'todo-list-94220.firebaseapp.com',
    databaseURL: 'https://todo-list-94220.firebaseio.com',
    projectId: 'todo-list-94220',
    storageBucket: 'todo-list-94220.appspot.com',
    messagingSenderId: '191224272750'
  }
};
