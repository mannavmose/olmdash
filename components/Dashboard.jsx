import React, { Component } from 'react';
// import './DashboardContainer.css';
import SkillBox from './SkillBox';
import SkillsLookup from './SkillsLookup';


class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard-container">
        <SkillsLookup />
      </div>
    );
  }
}

export default Dashboard;
