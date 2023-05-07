import "./home.css";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page home-page">
      <div className="top-banner">
        <div className="top-banner-text">
          <h1>Alchemy</h1>
          <h2>Fresh food, healthier life</h2>
          <Link className="btn btn-lg btn-dark" to="/catalog">
            Check out our amazing catalog!
          </Link>
        </div>
      </div>
      
      <div className="bottom">
        <div className="left">
          <h3>Why choose us?</h3>
          <ul>
            <li>We provide fresh and healthy food</li>
            <li>We offer a wide range of products</li>
            <li>We deliver straight to your door</li>
          </ul>
          <Link className="btn btn-lg btn-primary" to="/about">
            Learn More
          </Link>
        </div>
        <div className="right">
          <img src="/images/farmer.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
