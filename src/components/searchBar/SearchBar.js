import classes from "./SearchBar.module.css";
import { FaSearch, FaMapMarked } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className={classes.searchBarWrapper}>
      <div className={classes.searchBar}>
        <FaSearch className={classes.searchIcon} />
        <input type="text" placeholder="Search" />
      </div>

      <div className={classes.locationIcon}>
        <FaMapMarked className={classes.mapMarked} />
      </div>
    </div>
  );
};

export default SearchBar;
