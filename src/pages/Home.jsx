import React, { useState } from "react";
import "./Home.css";
import Button from "../components/Button";
import ErrorBanner from "../components/ErrorBanner";

function Home() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleFormatJSON = () => {
    try {
      const isValid = JSON.parse(inputValue);
      setInputValue(() => JSON.stringify(isValid, null, 2));
    } catch (error) {
      setError(error.message || "Error parsing JSON...");
    }
  };

  const handleMinifyJSON = () => {
    try {
      const isValid = JSON.parse(inputValue);
      setInputValue(() => JSON.stringify(isValid));
    } catch (error) {
      setError(error.message || "Error parsing JSON...");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(inputValue).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleReset = () => {
    setInputValue("");
  };

  return (
    <section>
      <div class="main-container">
        <div id="button-container">
          <Button handleClick={handleFormatJSON} title={"Format JSON"} />
          <Button handleClick={handleMinifyJSON} title={"Minify JSON"} />
          <Button
            handleClick={handleCopy}
            title={copied ? "Copy Saved!" : "Copy to Clipboard"}
          />
          <Button handleClick={handleReset} title={"Reset"} />
        </div>
        <div id="input-container">
          <textarea
            id="textInput"
            name="textInput"
            placeholder="Enter your JSON here..."
            required
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          ></textarea>
        </div>
      </div>
      {error && <ErrorBanner error={error} handleClose={() => setError("")} />}
    </section>
  );
}

export default Home;
