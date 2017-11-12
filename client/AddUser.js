import {Template} from 'meteor/templating';
import {ReactiveVar}from 'meteor/reactive-var';

import './AddUser.html';



Template.add.events({
 
 'click .btn':function() {
 	// body...

 	var username=$('#name').val();
 	var userage=$('#age').val();

    users.insert({name:username,age:userage});

 }



}); 