import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import useOnClickOutside from "./use-onclick-outside";
import "./style.css";

function App() {
  // Create a ref that we add to the element for which we want to detect outside clicks
  const ref = useRef();
  // State for our modal
  const [isModalOpen, setModalOpen] = useState(false);
  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, () => setModalOpen(false));

  return (
    <div style={{ padding: "50px" }}>
      {isModalOpen ? (
        <div ref={ref} style={modalStyle}>
          <span role="img" aria-label="wave">
            👋
          </span>
          {` `}
          Hey, I'm a modal <br />
          <br /> Click anywhere outside of me to close
        </div>
      ) : (
        <button onClick={() => setModalOpen(true)}>Open Modal</button>
      )}
    </div>
  );
}
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "400px",
  width: "100%",
  padding: "50px",
  textAlign: "center",
  fontSize: "1.2rem",
  backgroundColor: "white",
  boxShadow: "0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1)"
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
