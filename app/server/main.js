import { Meteor } from 'meteor/meteor';
import myPackage from 'meteor/my-package';

myPackage.initialize('foo');
myPackage.myModule.myFunction('bar');

Meteor.startup(() => {
  // code to run on server at startup
});
