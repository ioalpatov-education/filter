import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import PropTypes from "prop-types";

const ProjectList = ({ portfolioData }) => {
  const portfolioList = portfolioData.map((el, elIdx) => {
    return (
      <ImageListItem key={elIdx}>
        <img src={el.img} alt={el.category} loading="lazy" />
      </ImageListItem>
    );
  });

  return (
    <ImageList variant="masonry" cols={3} gap={8}>
      {portfolioList}
    </ImageList>
  );
};

ProjectList.propTypes = {
  portfolioData: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default ProjectList;
