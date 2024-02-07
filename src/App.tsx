import { useState } from "react";
import boo from "./assets/boo.gif";
import kiss from "./assets/giphy.gif";
import Lubby from "./pages/Lubby";

function App() {
  const [hover, setHover] = useState(false);
  const [counts, setCounts] = useState(0);
  const [buttons, setButtons] = useState(false);
  const [texts, setTexts] = useState("Hey urja, will you be my valentine?");

  const stepper = () => {
    switch (counts) {
      case 1:
        return "Are you sure?";
      case 2:
        return "You might wanna rethink this";
      case 3:
        return "Alright, then go ahead";
      case 4:
        return "SIKEE";
      case 5:
        return "Okay, you seem like you don't really want to";
      case 6:
        return "Final No";
      default:
        return "No";
    }
  };

  const handleText = () => {
    setTexts("");
    setTimeout(() => {
      setTexts("Yay! Thank you pretty babby, i love you xoxo !!🧡 - sushan");
    }, 9000);
  };

  return (
    <div
      style={{
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <div
          style={{
            marginTop: buttons ? "-350px" : "0px",
          }}
          className="transitionalldelay"
        >
          <img
            src={buttons ? kiss : boo}
            style={{
              height: buttons ? "200px" : "100px",
              objectFit: "cover",
              background: "white",
              zIndex: "9999999",
              position: "relative",
            }}
            alt=""
          />
          <h1
            style={
              buttons
                ? {
                    background: "red",
                    zIndex: "9999999",
                    position: "relative",
                    padding: "4px",
                    borderRadius: "20px",
                    color: "white",
                  }
                : {}
            }
          >
            {texts}
          </h1>
        </div>
        <div
          className="flex-between"
          style={{
            opacity: buttons ? 0 : 100,
            fontSize: "18px",
          }}
        >
          <button
            className="transitionall"
            style={{
              backgroundColor: "#68A357",
              width: `${counts === 0 ? "100px" : `${100 + counts * 20}px`}`,
              height: `${counts === 0 ? "" : `${counts * 40}px`}`,
              fontSize: `${counts === 0 ? "" : `${counts * 16}px`}`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => {
              setButtons(true);
              handleText();
            }}
          >
            Yes
          </button>
          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <button
              className={`${hover && counts === 6 && "no-button"}`}
              onClick={() => setCounts((prev) => prev + 1)}
              style={{
                backgroundColor: "red",
              }}
            >
              {stepper()}
            </button>
          </div>
        </div>

        <Lubby buttons={buttons} />
      </div>
    </div>
  );
}

export default App;
