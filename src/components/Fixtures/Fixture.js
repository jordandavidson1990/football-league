import React, { useState } from "react";
import { useDispatch } from "../context/context";
import requests from "../api/requests";

export default function Fixture({ fixture, folks }) {
  const [showFixture, setShowFixture] = useState(true);
  const dispatch = useDispatch();
  function handleSubmit(event) {
    setShowFixture(false);
    event.preventDefault();
    function findTeam(id) {
      return folks.find((folk) => folk.id === id);
    }
    let homeTeam = findTeam(fixture.home.id);
    let awayTeam = findTeam(fixture.away.id);
    const homeTeamScore = event.target.name1.value;
    const awayTeamScore = event.target.name2.value;
    const homeTeamObject = {
      ...homeTeam,
      gamesPlayed: (homeTeam.gamesPlayed += 1),
      goalsFor: (homeTeam.goalsFor += parseInt(homeTeamScore)),
      goalsAgainst: (homeTeam.goalsAgainst += parseInt(awayTeamScore)),
    };

    const awayTeamObject = {
      ...awayTeam,
      gamesPlayed: (awayTeam.gamesPlayed += 1),
      goalsFor: (awayTeam.goalsFor += parseInt(awayTeamScore)),
      goalsAgainst: (awayTeam.goalsAgainst += parseInt(homeTeamScore)),
    };

    if (parseInt(homeTeamScore) > parseInt(awayTeamScore)) {
      const home = {
        ...homeTeamObject,
        points: (homeTeam.points += 3),
      };
      requests.updatePlayer(home);
      requests.updatePlayer(awayTeamObject);
      dispatch({
        type: "SET_POINTS",
        data: {
          player: home,
        },
      });
      dispatch({
        type: "SET_POINTS",
        data: {
          player: awayTeamObject,
        },
      });
    } else if (homeTeamScore < awayTeamScore) {
      const away = {
        ...awayTeamObject,
        points: (awayTeam.points += 3),
      };
      requests.updatePlayer(homeTeamObject);
      requests.updatePlayer(away);
      dispatch({
        type: "SET_POINTS",
        data: {
          player: homeTeamObject,
        },
      });
      dispatch({
        type: "SET_POINTS",
        data: {
          player: away,
        },
      });
    } else {
      const home = {
        ...homeTeamObject,
        points: (homeTeam.points += 1),
      };
      const away = {
        ...awayTeamObject,
        points: (awayTeam.points += 1),
      };
      requests.updatePlayer(home);
      requests.updatePlayer(away);
      dispatch({
        type: "SET_POINTS",
        data: {
          player: home,
        },
      });
      dispatch({
        type: "SET_POINTS",
        data: {
          player: away,
        },
      });
    }
    requests.deleteFixture(fixture._id);
  }
  return (
    <div className={showFixture ? null : "hide-fixture"}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name1">
          <img src={`${fixture.home.team}.png`} alt={fixture.home.team} />
        </label>
        <input name="name1" type="number" min={0} />
        V
        <input name="name2" type="number" min={0} />
        <label htmlFor="name2">
          <img src={`${fixture.away.team}.png`} alt={fixture.away.team} />
        </label>
        <br />
        <input type="submit" value="Submit" />
        <hr />
      </form>
    </div>
  );
}
