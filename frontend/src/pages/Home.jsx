import { Link } from 'react-router-dom';
import './styles/Hero.css'; 

const Hero = () => {
  return (
    <section className="hero">
      <h2 className="hero__title">
        Connect. Challenge. Win.
      </h2>
      
      <h1 className="hero__headline">
        Survive the HotSeat.
      </h1>
      
      <p className="hero__description">
        Hotseat lets you enter live debates, challenge others, vote for the strongest arguments and earn rewards. Can you hold the Hotseat?
      </p>
      <Link to="/signup">
      <button className="hero__button">
        Sign Up
      </button>
      </Link>
    </section>
  );
};

export default Hero;