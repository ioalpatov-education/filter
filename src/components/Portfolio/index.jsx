import { Component } from "react";
import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <Toolbar />
        <ProjectList />
      </div>
    );
  }
}

export default Portfolio;
