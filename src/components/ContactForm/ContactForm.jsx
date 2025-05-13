import React, { useState } from "react";
import "./ContactForm.scss"

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://www.formbackend.com/f/a69b7ae645dda608", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ name, email, message }),
    })
    .then((response) => {
      if (response.status === 422) {
        throw new Error("Validation error");
      } else if (!response.ok) {
        throw new Error("Something went wrong");
      }

      return response.json();
    })
    .then(data => {
      // You can even use `data` here. Access `data.submission_text`, `data.values` etc.
      setSuccessMessage("Form submitted successfully");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }

  return (
    <>
      {successMessage.length == 0 && <form onSubmit={handleSubmit} className="form">
        <label htmlFor="name">Votre nom</label>
        <input type="text" id="name" name="name" required onChange={(e) => setName(e.target.value)} />

        <label htmlFor="email">Votre email</label>
        <input type="email" id="email" name="email" required onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="message">Votre message</label>
        <input type="textarea" id="message" name="message" required onChange={(e) => setMessage(e.target.value)} />

        <button type="submit">Envoyer!</button>
      </form>}

      {successMessage.length > 0 && <p>{successMessage}</p>}
    </>
  )
}
