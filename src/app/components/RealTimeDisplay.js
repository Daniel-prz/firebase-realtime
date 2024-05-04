"use client";
import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./firebaseConfig";
export default function RealTimeDisplay() {
  // UseState array will contain data objects to display on page

  const [messages, setmessages] = useState([]);
  useEffect(() => {
    // Every time the RealTimeForm is properly submitted, and the collection receives data,
    // the onSnapshot function(which attaches a listener to the collection for any change made)
    // automatically updates the data display to the page in real time,
    // according to the change in the collection, without needing a refresh.

    const unsub = onSnapshot(collection(db, "realTimeMessages"), (snapshot) => {
      // Maps over the docs in collection after every change

      const rtmArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setmessages(rtmArray);
    });
    return () => unsub();
  }, []);
  return (
    <div>
      <h2>Messages</h2>
      <ul>
        
        {/* Maps over useState messages array to display each object in collection in real time */}

        {messages.map((message) => (
          <li key={message.id}>
            {message.username}: {message.message}
          </li>
        ))}
      </ul>
    </div>
  );
}
