export default function reducer(state, action) {
  switch (action.type) {
    case "SET_POINTS":
      return {
        ...state,
        points: action.data.player.points,
        gamesPlayed: action.data.player.gamesPlayed,
        goalsFor: action.data.player.goalsFor,
        goalsAgainst: action.data.player.goalsAgainst,
      };
    default:
      return {
        state,
      };
  }
}
