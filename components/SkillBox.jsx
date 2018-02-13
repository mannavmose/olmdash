import React, { Component } from 'react';
// import './SkillBox.css';
// import '../DashboardBox.css';
import SkillEntry from './SkillEntry';

import Sample from '../constants/Sample';
import STYLES from './SkillEntry.sass';


class SkillBox extends Component {
  render() {
    return (
      <div className="Hi-scores-box Dashboard-box">
        <div className="Player-name">{this.props.playerName}</div>
        {Sample.skills.map(skill => <SkillEntry className={STYLES.root} key={skill.name} {...skill} />)}
      </div>
    );
  }
}

export default SkillBox;
