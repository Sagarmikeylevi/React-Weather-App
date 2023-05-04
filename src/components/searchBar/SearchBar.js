import { useState } from "react";
import classes from "./SearchBar.module.css";
import { FaSearch, FaMapMarked } from "react-icons/fa";

const SearchBar = (props) => {
  // location state 
  const [location, setLocation] = useState("");
  // handler for city name 
  const cityNameHandler = (event) => {
    const city = event.target.value;
    setLocation(city);
    props.onGetCity(city);
  };
 /* once the submit or the find location btn is clicked 
 this will fetch the data for given city / location's weather */
  const submitHandler = () => {
    props.onFetch();
    setLocation("");
  };

  return (
    <div className={classes.searchBarWrapper}>
      <div className={classes.searchBar}>
        <FaSearch className={classes.searchIcon} />
        <input
          type="text"
          placeholder="Search"
          onChange={cityNameHandler}
          value={location}
        />
      </div>

      <div className={classes.locationIcon} onClick={submitHandler}>
        <FaMapMarked className={classes.mapMarked} />
      </div>
    </div>
  );
};

export default SearchBar;
