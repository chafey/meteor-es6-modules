import { Template } from 'meteor/templating';
import myPackage from 'meteor/my-package';

import "./index.html";

Template.myTemplate.helpers({
  'version' : function() {
    return myPackage.version;
  }
});

Template.myTemplate.events({
  'click button' : function() {
    var result = myPackage.myModule.myFunction('foo');
    console.log(result);
  }
});