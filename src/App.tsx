import { useState } from "react";
import boo from "./assets/shaking-heart.gif";
import kiss from "./assets/giphy.gif";
import Lubby from "./pages/Lubby";

function App() {
  const [hover, setHover] = useState(false);
  const [counts, setCounts] = useState(0);
  const [buttons, setButtons] = useState(false);
  const [texts, setTexts] = useState("Anup, will you be my valentine?");

  const stepper = () => {
    switch (counts) {
      case 1:
        return "Are you sure?";
      case 2:
        return "You might wanna rethink this.";
      case 3:
        return "Alright, then go ahead.";
      case 4:
        return "SIKEE!";
      case 5:
        return "Okay, seems like you don't really want to.";
      case 6:
        return "Final no?";
      default:
        return "No";
    }
  };

  const handleText = () => {
    setTexts("");
    setTimeout(() => {
      setTexts("Knew it! Happy first Valentine's to us. Many more to go, *potentially, hehe* ❤️");
    }, 5000);
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
            marginTop: buttons ? "-250px" : "0px",
          }}
          className="transitionalldelay"
        >
          <img
            src={buttons ? kiss : boo}
            style={{
              height: buttons ? "300px" : "250px",
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
                    background: "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(47,177,242,0.676908263305322) 100%)",
                    zIndex: "9999999",
                    position: "relative",
                    padding: "1rem 1rem",
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
