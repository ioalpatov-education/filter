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
      portfolioData,
    };
  }

  onSelectFilter = (selectFilter) => {
    this.setState({
      selected: selectFilter,
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

        <ProjectList />
      </div>
    );
  }
}

export default Portfolio;
