import {
  ButtonLabel,
  SearchForminput,
  SearchForm,
  Searchbar,
  SearchFormbutton,
} from './Searchbar.styled';
import { FaSearch } from 'react-icons/fa';

export const SearchbarHead = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.elements.query.value;
    onSubmit(query);
  };
  return (
    <Searchbar>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormbutton type="submit">
          {' '}
          <FaSearch />
          <ButtonLabel> </ButtonLabel>
        </SearchFormbutton>
        <SearchForminput
          type="text"
          name="query"
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Searchbar>
  );
};
