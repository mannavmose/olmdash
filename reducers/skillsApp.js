const skills = (state = {}, action) => {
  switch (action.type) {
    case 'LOOKUP_PLAYER':
      return {
        ...state,
        lastPlayerSearch: action.playerName,
      }
    default:
      return state;
  }
}

export default skills;
