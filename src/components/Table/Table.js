import React from "react";
import "./Table.css";
import { useSelector } from "../context/context";

export default function Table() {
  const { players } = useSelector((state) => state);

  console.log(players);
  const sortedTeams = players.sort(function (a, b) {
    return b.points - a.points;
  });

  const goalDifference = (team) => {
    return team.goalsFor - team.goalsAgainst;
  };

  const headings = (
    <tr>
      <th></th>
      <th>#</th>
      <th>Name</th>
      <th>Games Played</th>
      <th>Goals For</th>
      <th>Goals Against</th>
      <th>Goal Diff</th>
      <th>Points</th>
    </tr>
  );
  const tableRows = sortedTeams.map((team, index) => {
    return (
      <tr key={index}>
        <td>
          <img src={`${team.team}.png`} alt={team.team} />
        </td>
        <td>{index + 1}</td>
        <td>{team.name}</td>
        <td>{team.gamesPlayed}</td>
        <td>{team.goalsFor}</td>
        <td>{team.goalsAgainst}</td>
        <td>{goalDifference(team)}</td>
        <td>{team.points}</td>
      </tr>
    );
  });

  return (
    <div className="table-container">
      <table>
        <tbody>
          {headings}
          {tableRows}
        </tbody>
      </table>
    </div>
  );
}
