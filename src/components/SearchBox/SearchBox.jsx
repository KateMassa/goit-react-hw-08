import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter, changeFilter } from "../../redux/filters/slice";
import { searchContact } from "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const nameFilter = useSelector(selectNameFilter);
  const [searchTerm, setSearchTerm] = useState(nameFilter);
  // const filteredContacts = useSelector(selectFilteredContacts);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    dispatch(searchContact(value));
    dispatch(changeFilter(event.target.value));

    // if (filteredContacts.length === 0) {
    //   setSearchTerm("");
    // }
  };

  return (
    <div className={css.searchContainer}>
      <label htmlFor="search">Find contacts by name:</label>
      <input
        className={css.searchInput}
        type="text"
        id="search"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};
export default SearchBox;
