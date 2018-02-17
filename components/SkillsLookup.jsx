import React, { Component } from 'react';
import STYLES from './SkillsLookup.sass';
import { lookupPlayer } from '../actions/skillsActions';
import { connect } from 'react-redux';


class SkillsLookup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div>
        <div>
          {`Last Player: ${this.props.lastPlayer}`}
        </div>
        <input type="text" onChange={this.handleChange} />
        <input type="button" value="Search" onClick={this.handleClick} />
      </div>
    );
  }

  handleChange(e) {
    this.setState({ playerName: e.target.value });
  }

  handleClick() {
    this.props.submitPlayerName(this.state.playerName);
  }
}

const mapStateToProps = state => {
  return {
    lastPlayer: state.lastPlayerSearch,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitPlayerName: name => {
      dispatch(lookupPlayer(name))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillsLookup);
