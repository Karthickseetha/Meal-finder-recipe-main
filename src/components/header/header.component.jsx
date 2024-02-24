import './header.styles.scss';

const Header = ({ setSearchTerm, handleSubmit }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <div className="flex-content">
      <h1>Meal Finder.</h1>
      <div className="flex">
        <input
          type="text"
          id="search"
          placeholder="Search for meals or keywords"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <form className="flex" onSubmit={handleFormSubmit}>
          <button className="search-btn" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
