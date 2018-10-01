'use strict'

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);


/*
 * 'OnWrite' works as 'addValueEventListener' for android. It will fire the function
 * everytime there is some item added, removed or changed from the provided 'database.ref'
 * 'sendNotification' is the name of the function, which can be changed according to
 * your requirement
 */
exports.sendNotification = functions.database.ref('/admin/notifications').onWrite(event=>{

	
	 
	 
/*
   * Stops proceeding to the rest of the function if the entry is deleted from database.
   * If you want to work with what should happen when an entry is deleted, you can replace the
   * line from "return console.log.... "
   */



const payload={
	notification: {
		title: "New Notification",
		body: "You have a new notification",
		icon:"default",
		sound:"default"
	}
};
return admin.messaging().sendToTopic("notify",payload);
});





