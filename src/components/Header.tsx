import hero from "../images/header.png";
import Navbar from "./Navbar";
import "./styles.css";

const Header: React.FC = () => {
  const handleButtonClick = () => {
    const catalogSection = document.getElementById("catalog");
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero" id="home">
      <Navbar />
      <img src={hero} className="image-hero" />
      <div className="header">
        <h1 className="title">
          Reading is to the mind what exercise to the body. - Joseph Addison.
        </h1>
        <button type="button" className="button" onClick={handleButtonClick}>
          Choose my next book
        </button>
      </div>
    </div>
  );
};

export default Header;
