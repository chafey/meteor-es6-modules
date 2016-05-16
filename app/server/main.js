import { Meteor } from 'meteor/meteor';
import myPackage from 'meteor/my-package';

Meteor.startup(() => {
  myPackage.initializeServer('foo');
  myPackage.myModule.myFunction('bar');
});
