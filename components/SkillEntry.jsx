import React, { Component } from 'react';
// import './HiScoreEntry.css';
import STYLES from './SkillEntry.sass';


class SkillEntry extends Component {
  render() {
    return (
      <div className={STYLES.root}>
        <div className="skillName">{this.props.name}</div>
        <div className="skillLevel">{this.props.level}</div>
        <div className="skillExp">{this.props.exp}</div>
      </div>
    );
  }
}

export default SkillEntry;
