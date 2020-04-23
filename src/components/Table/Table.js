import React from "react";
import teams from "../../data/Teams.json";
import "./Table.css";

export default function Table() {
  const sortedTeams = teams.sort(function (a, b) {
    return b.points - a.points;
  });

  const goalDifference = (team) => {
    return team.goalsFor - team.goalsAgainst;
  };

  const headings = (
    <tr>
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
