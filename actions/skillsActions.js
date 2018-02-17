export const lookupPlayer = playerName => {
  return {
    type: 'LOOKUP_PLAYER',
    playerName
  }
}
