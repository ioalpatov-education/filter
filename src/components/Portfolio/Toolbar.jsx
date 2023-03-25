import Button from "@mui/material/Button";

const Toolbar = ({ filters, selected, onSelectFilter }) => {
  const handleClick = (e, selectFilter) => {
    onSelectFilter(selectFilter);
  };

  const filterBtns = filters.map((filter, filterIdx) => {
    const isActive = filter === selected ? true : false;
    const isDisabled = isActive ? true : false;

    return (
      <Button
        onClick={(e) => handleClick(e, filter)}
        key={filterIdx}
        color="secondary"
        disabled={isDisabled}
        variant="outlined"
      >
        {filter}
      </Button>
    );
  });
  return <div className="filters-container">{filterBtns}</div>;
};

export default Toolbar;
