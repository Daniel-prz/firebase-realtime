"use client";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "./firebaseConfig";

// Form for adding data to collection


export default function RealTimeForm() {
  
  // useState variables preserving form input on refresh


  const [username, setusername] = useState("");
  const [message, setmessage] = useState("");
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();


      // Adds object to collection


      await addDoc(collection(db, "realTimeMessages"), { username, message });
    } catch (error) {}
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            required
            type="text"



            // onChange and value attributes preserving input on refresh



            onChange={(e) => {
              setusername(e.target.value);
            }}
            value={username}
            name="username"
            id="username"
          ></input>
        </label>
        <label>
          Message:
          <input
            required
            type="text"
            onChange={(e) => {
              setmessage(e.target.value);
            }}
            value={message}
            id="message"
            name="message"
          ></input>
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
