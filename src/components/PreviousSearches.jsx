import { FaSearch } from "react-icons/fa";

const PreviousSearches = () => {
    const searches = [
        "pizza",
        "burguer",
        "cookies",
        "juices",
        "steak",
        "salad",
        "icecream",
        "lasagna",
        "pudding",
        "soup",
      ];
      return (
        <div className="previous-searches container">
          <h2>Previous Searches</h2>
          <div className="previous-searches-container">
            {searches.map((search, index) => (
              <div
                className="search-item"
                key={index}
                style={{ animationDelay: index * 0.2 + "s" }}
              >
                {search}
              </div>
            ))}
          </div>
          <div className="search-box">
            <input type="text" placeholder="search for a recipe..." />
            <button className="btn">
              <FaSearch />
            </button>
          </div>
        </div>
      );
    };

export default PreviousSearches