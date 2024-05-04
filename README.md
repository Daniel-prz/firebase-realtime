## firebase-snapshot

This next.js application was made with javascript and firebase,  
using firestore(addDocs, collections, onSnapshot) to make  
 real time updates to data display on page.
Using firestore to make real time updates requires getFirestore and onSnapshot function imports  
 instead of await getDoc, onSnapshot() is used, automatically fetching the  
 collection dataevery time a change to it is made.  
Every time the RealTimeForm is properly submitted, and the collection receives data,  
 onSnapshot(which attaches a listener to the collection for any change made) automatically updates the data display to the page in real time, according to the change in the collection, without needing a refresh.
