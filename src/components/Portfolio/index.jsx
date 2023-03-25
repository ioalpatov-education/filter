import { Component } from "react";
import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";
import portfolioData from "../../store/portfolioData";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: ["All", "Websites", "Flayers", "Business Cards"],
      selected: "All",
      portfolioData: portfolioData,
    };
  }

  filterPortfolio = (selectFilter) => {
    const filteredPortfolio = portfolioData.filter((el) => {
      return el.category === selectFilter;
    });

    return selectFilter === "All" ? portfolioData : filteredPortfolio;
  };

  onSelectFilter = (selectFilter) => {
    this.setState({
      selected: selectFilter,
      portfolioData: this.filterPortfolio(selectFilter),
    });
  };

  render() {
    return (
      <div className="portfolio">
        <Toolbar
          filters={this.state.filters}
          selected={this.state.selected}
          onSelectFilter={this.onSelectFilter}
        />

        <ProjectList portfolioData={this.state.portfolioData} />
      </div>
    );
  }
}

export default Portfolio;
