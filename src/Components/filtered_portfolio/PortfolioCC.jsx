import { Component } from 'react';
import projects from './data';

import ProjectList from './ProjectListCC';
import Toolbar from './ToolbarCC';

import classes from './main.module.css';


const FilterType = {
    ALL: 'All', 
    WEBSITES: 'Websites', 
    FLAYERS: 'Flayers', 
    BUSINESS_CARDS: 'Business Cards'
};

class Portfolio extends Component {
    state = {
        activeFilter: FilterType.ALL,
    }

/*     constructor(props) {
        super(props);
        this.like = this.like.bind(this);
    }

    like() {
        this.setState((state) => ({count: state.count + 1 }));
    }

    render() {
        return (
            <button onClick={this.like}>Количество лайлов: {this.state.count}</button>
        );
    } */
  
    onSelectFilter = (filter) => {
        this.setState({activeFilter: filter});
        console.log(filter);
    }
    
    render() {
      const filteredProjects = this.state.activeFilter === FilterType.ALL
        ? projects
        : projects.filter(project => project.category === this.state.activeFilter);

      return (
        <div className={classes.root}>
          <Toolbar filters={Object.values(FilterType)} selected={this.state.activeFilter} onSelectFilter={this.onSelectFilter} />
          <ProjectList projects={filteredProjects}/>
        </div>
      )
    }
}

export default Portfolio;
