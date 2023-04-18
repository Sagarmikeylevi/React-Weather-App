
import { useState } from "react";
import classes from "./SearchBar.module.css";
import { FaSearch, FaMapMarked } from "react-icons/fa";

const SearchBar = (props) => {  
  const [location, setLocation] = useState('');
  const cityNameHandler = (event) => {
    const city = event.target.value;
    setLocation(city);
    props.onGetCity(city);
  }

  const submitHandler = () => {
    props.onFetch();
    setLocation('');
  }


  return (
    <div className={classes.searchBarWrapper}>
      <div className={classes.searchBar}>
        <FaSearch className={classes.searchIcon} />
        <input
          type="text"
          placeholder="Search"
          onChange={cityNameHandler}
          value={location}
          onError={false}
        />
      </div>

      <div className={classes.locationIcon} onClick={submitHandler}>
        <FaMapMarked className={classes.mapMarked} />
      </div>
    </div>
  );
};

export default SearchBar;
