import React, { useState } from "react";
import "./About.css";

function About() {
  const jsonExample = `{
  "name": "John Doe",
  "age": 30,
  "email": "john.doe@example.com",
  "isMember": true,
  "favorites": {
    "color": "blue",
    "food": "pizza"
  },
  "hobbies": ["reading", "gaming", "coding"]
}`;

  const [copySuccess, setCopySuccess] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonExample).then(
      () => {
        setCopySuccess("Copied!");
        setTimeout(() => setCopySuccess(""), 2000);
      },
      (err) => {
        setCopySuccess("Failed to copy!");
      }
    );
  };

  return (
    <main className="about-page">
      <header className="about-header">
        <h1>Welcome to Beautiful JSON</h1>
        <p>
          Beautiful JSON is a free, client-side tool designed for developers to
          make JSON more readable.
        </p>
      </header>

      <section className="about-content">
        <h2>What is JSON?</h2>
        <p>
          JSON, or JavaScript Object Notation, is a lightweight data-interchange
          format. It is easy for humans to read and write, and easy for machines
          to parse and generate. While it is similar in structure to a standard
          JavaScript object, there are key differences:
        </p>
        <ul>
          <li>
            <strong>Keys must be strings:</strong> In JSON, all keys must be
            enclosed in double quotes. In JavaScript objects, keys can be
            unquoted if they are valid identifiers, or enclosed in single or
            double quotes.
          </li>
          <li>
            <strong>Strings use double quotes:</strong> JSON strings must use
            double quotes (<code>"</code>), not single quotes (<code>'</code>).
          </li>
          <li>
            <strong>Limited data types:</strong> JSON supports only strings,
            numbers, objects, arrays, booleans, and <code>null</code>. It does
            not support functions, dates, undefined, or other
            JavaScript-specific types.
          </li>
          <li>
            <strong>No comments allowed:</strong> JSON does not support
            comments, whereas JavaScript objects can include comments.
          </li>
        </ul>
        <div className="code-block">
          <div className="code-header">
            <p>Example JSON snippet</p>
            <button onClick={handleCopy}>Copy</button>
          </div>
          <pre>
            <code>{jsonExample}</code>
          </pre>
          {copySuccess && <span className="copy-feedback">{copySuccess}</span>}
        </div>
      </section>

      {/* Rest of your component remains unchanged */}
      <section className="about-content">
        <h2>About Me</h2>
        <p>
          I'm a passionate web developer specializing in React and full-stack
          technologies. This project is part of my personal portfolio to
          demonstrate my skills in building interactive web applications.
        </p>
      </section>

      <section className="about-features">
        <h2>Features</h2>
        <ul>
          <li>Instant JSON formatting and beautification</li>
          <li>Client-side processing to ensure data privacy</li>
        </ul>
      </section>

      <section className="about-privacy">
        <h2>Data Privacy</h2>
        <p>
          Your data never leaves your local device. Beautiful JSON processes all
          data on the client side, ensuring complete privacy and security.
        </p>
      </section>

      <footer className="about-footer">
        <p>
          Interested in my work?{" "}
          <a href="https://kolby-k.netlify.app/">Get in touch</a> or check out
          my <a href="https://github.com/kolby-k">GitHub</a>.
        </p>
      </footer>
    </main>
  );
}

export default About;
