import React from "react";
import { useDispatch, useSelector } from "../context/context";

export default function Fixture({ fixture }) {
  const dispatch = useDispatch();
  const { players } = useSelector((state) => state);
  function handleSubmit(event) {
    event.preventDefault();

    let homeTeam = fixture[0];
    let awayTeam = fixture[1];
    const homeTeamScore = event.target.name1.value;
    const awayTeamScore = event.target.name2.value;
    dispatch({
      type: "SET_POINTS",
      data: {
        player: homeTeam,
        gamesPlayed: (homeTeam.gamesPlayed += 1),
        goalsFor: (homeTeam.goalsFor += parseInt(homeTeamScore)),
        goalsAgainst: (homeTeam.goalsAgainst += parseInt(awayTeamScore)),
      },
    });
    dispatch({
      type: "SET_POINTS",
      data: {
        player: awayTeam,
        gamesPlayed: (awayTeam.gamesPlayed += 1),
        goalsFor: (awayTeam.goalsFor += parseInt(awayTeamScore)),
        goalsAgainst: (awayTeam.goalsAgainst += parseInt(homeTeamScore)),
      },
    });

    if (homeTeamScore > awayTeamScore) {
      dispatch({
        type: "SET_POINTS",
        data: {
          player: homeTeam,
          points: (homeTeam.points += 3),
        },
      });
    } else if (homeTeamScore < awayTeamScore) {
      dispatch({
        type: "SET_POINTS",
        data: {
          player: awayTeam,
          points: (awayTeam.points += 3),
        },
      });
    } else {
      dispatch({
        type: "SET_POINTS",
        data: {
          player: homeTeam,
          points: (homeTeam.points += 1),
        },
      });
      dispatch({
        type: "SET_POINTS",
        data: {
          player: awayTeam,
          points: (awayTeam.points += 1),
        },
      });
    }
    console.log("homeTeamAfter:", homeTeam);
    console.log("awayTeamAfter:", awayTeam);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name1">
        <img src={`${fixture[0].team}.png`} alt={fixture[0].team} />
      </label>
      <input name="name1" type="number" min={0} />
      V
      <input name="name2" type="number" min={0} />
      <label htmlFor="name2">
        <img src={`${fixture[1].team}.png`} alt={fixture[1].team} />
      </label>
      <br />
      <input type="submit" value="Submit" />
      <hr />
    </form>
  );
}
