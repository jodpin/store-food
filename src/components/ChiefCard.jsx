import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const ChiefCard = ({ chief }) => {
  return (
    <div className="chief-card">
      <div className="chief-card-image">
        <img src={chief.img} alt="chief-image" />
      </div>
      <div className="chief-card-info">
        <h3 className="chief-card-name">{chief.name}</h3>
        <p className="chief-recipe-count">
          Recipes: <b>{chief.recipesCount}</b>
        </p>
        <p className="chief-cuisine">
          Cuisine: <b>{chief.cuisine}</b>
        </p>
        <p className="chief-icons">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
        </p>
      </div>
    </div>
  );
};

export default ChiefCard;
