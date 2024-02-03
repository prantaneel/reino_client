import Card from "react-bootstrap/Card";
import { useEffect } from "react";
import { Height } from "@mui/icons-material";
function Home() {
  const useScript = (url) => {
    useEffect(() => {
      const script = document.createElement("script");
      script.src = url;
      script.async = true;

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }, [url]);
  };
  let animation = Math.round(Math.random());
  let url;

  if (animation === 1) {
    url = "/animation2.js";
  } else {
    url = "/animation.js";
  }
  useScript(url);
  return (
    <div className="home-div">
      <div className="hero-section">
        <div className="canvas-container">
          <canvas id="canvas-6066"></canvas>
        </div>
        <div className="overlay-div-card-container">
          <Card style={{ width: "45vw"}} className="overlay-div-card">
            <Card.Body>
              <Card.Title>
                <h1>
                Where Disruptive Thinking Meets Quantitative Finance
                </h1>
              </Card.Title>
              <Card.Text>
                <h4>
                At our core, we love to play with data and models. We are an
                independent Research Lab developing models and strategies for
                our clients along with Risk Management.
                </h4>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="brand-banner">
        <div className="brand-line-div">
          <div className="brand-tagline">
            <div className="brand-tagline-h1">
              <h1>Fresh Perspectives. Disruptive Innovation.</h1>
            </div>
            <div>
              <p>
                Our team consists of the best talents from top Engineering
                Schools with expertice in machine learning, data analytics,
                finance and mathematics.
              </p>
              <p>
                We combine our diverse knowledge with disruptive out-of-the-box
                thinking to create state-of-the-art pricing models across a wide
                range of financial instruments, trading strategies, Portfolio
                Construction and Risk Management models.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
