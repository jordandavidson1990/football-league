const url = "http://localhost:3001/api/players/";
const fixtureUrl = "http://localhost:3001/api/fixtures/";
export default {
  getPlayers() {
    return fetch(url).then((res) => res.json());
  },
  updatePlayer(player) {
    return fetch(url + player._id, {
      method: "PUT",
      body: JSON.stringify(player),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  },

  addFixture(fixture) {
    return fetch(fixtureUrl, {
      method: "POST",
      body: JSON.stringify(fixture),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  },
  getFixtures() {
    return fetch(fixtureUrl).then((res) => res.json());
  },
};
