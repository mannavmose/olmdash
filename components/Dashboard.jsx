import React, { Component } from 'react';
// import './DashboardContainer.css';
import SkillBox from './SkillBox';


class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard-container">
        <SkillBox playerName={'Knomi'}/>
        <SkillBox playerName={'MannAvMose'}/>
        <SkillBox playerName={'Innsj0'}/>
      </div>
    );
  }
}

export default Dashboard;
