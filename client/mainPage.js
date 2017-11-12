import { Template } from  'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';

import './mainPage.html';

Template.mainpage.helpers({

  cusers:function() {
  	// body...
  	return  users.find();
  },

  found:function(){


  // return users.find({$or:[{name:/^zj/},{age:{$gt:20}}]});



  }

 

});

Template.mainpage.events({

 'click .btnremove':function(){



 	users.remove(this._id);
},

 'click .update':function(){


users.update({_id:this._id},{$inc:{age:1}});

 }



});