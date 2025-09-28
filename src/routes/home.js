import Card from "react-bootstrap/Card";
import { useEffect } from "react";
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
    url = "/animation.js";
  } else {
    url = "/animation2.js";
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
                We do obscure research.
                </h1>
              </Card.Title>
              <Card.Text>
                <h4>
                At our core, we love to play with data and models. We are an
                independent research lab playing in the domains of finance, physics,
                art, and technology.
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
                We get bored easily. So new stuff every month for that rush!
              </p>
              <p>
                I'll talk about stuff maybe no-one gives a fuck about. Or I don't know shit about.
                So good luck keeping up.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
